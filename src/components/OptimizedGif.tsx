import React, { useState, useRef, useEffect } from 'react';
import { Box, Skeleton } from '@mui/material';

interface OptimizedGifProps {
  src: string;
  alt: string;
  sx?: any;
  autoPlay?: boolean;
  playOnHover?: boolean;
  fallbackImage?: string;
  priority?: boolean;
}

const OptimizedGif: React.FC<OptimizedGifProps> = ({
  src,
  alt,
  sx = {},
  autoPlay = true,
  playOnHover = false,
  fallbackImage,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for performance
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!autoPlay && entry.isIntersecting) {
          setIsPlaying(true);
        } else if (!autoPlay && !entry.isIntersecting) {
          setIsPlaying(false);
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlay, priority]);

  const handleMouseEnter = () => {
    if (playOnHover) {
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (playOnHover) {
      setIsPlaying(false);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Only load GIF when in view or priority
  const shouldLoad = isInView || priority;

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        cursor: playOnHover ? 'pointer' : 'default',
        ...sx,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Loading skeleton */}
      {!isLoaded && !hasError && shouldLoad && (
        <Skeleton
          variant="rectangular"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 174, 239, 0.1)',
          }}
          animation="wave"
        />
      )}

      {/* Fallback image when not playing */}
      {fallbackImage && (!isPlaying || !shouldLoad) && !hasError && (
        <Box
          component="img"
          src={fallbackImage}
          alt={alt}
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          onLoad={handleLoad}
        />
      )}

      {/* Actual GIF */}
      {shouldLoad && isPlaying && (
        <Box
          ref={imgRef}
          component="img"
          src={hasError ? (fallbackImage || '/placeholder.svg') : src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            // Performance optimizations
            willChange: 'auto',
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            bgcolor: '#f5f5f5',
            color: '#666',
            fontSize: '0.875rem',
            borderRadius: 1,
          }}
        >
          Animation unavailable
        </Box>
      )}

      {/* Play indicator for hover gifs */}
      {playOnHover && !isPlaying && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem',
            pointerEvents: 'none',
          }}
        >
          ▶
        </Box>
      )}
    </Box>
  );
};

export default OptimizedGif;
