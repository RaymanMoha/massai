// Performance monitoring utilities for image loading
export const measureImageLoadTime = (imageUrl: string): Promise<number> => {
  return new Promise((resolve) => {
    const startTime = performance.now();
    const img = new Image();
    
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      console.log(`Image ${imageUrl} loaded in ${loadTime.toFixed(2)}ms`);
      resolve(loadTime);
    };
    
    img.onerror = () => {
      const loadTime = performance.now() - startTime;
      console.error(`Image ${imageUrl} failed to load after ${loadTime.toFixed(2)}ms`);
      resolve(loadTime);
    };
    
    img.src = imageUrl;
  });
};

// Preload critical images
export const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  const promises = imageUrls.map(url => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Resolve even on error to not block
      img.src = url;
    });
  });
  
  return Promise.all(promises);
};

// Critical images that should be preloaded
export const CRITICAL_IMAGES = [
  '/ai2.jpg', // Hero image
  '/massai-logo.svg', // Logo
];

// Check if image is in viewport
export const isImageInViewport = (element: HTMLElement): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Get optimal image format based on browser support
export const getOptimalImageFormat = (): 'webp' | 'avif' | 'jpg' => {
  // Check for AVIF support
  const avifSupported = document.createElement('canvas')
    .toDataURL('image/avif')
    .startsWith('data:image/avif');
  
  if (avifSupported) return 'avif';
  
  // Check for WebP support
  const webpSupported = document.createElement('canvas')
    .toDataURL('image/webp')
    .startsWith('data:image/webp');
  
  if (webpSupported) return 'webp';
  
  return 'jpg';
};

// Image compression quality based on connection speed
export const getImageQuality = (): 'high' | 'medium' | 'low' => {
  // @ts-ignore - experimental API
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (!connection) return 'medium';
  
  const effectiveType = connection.effectiveType;
  
  switch (effectiveType) {
    case '4g':
      return 'high';
    case '3g':
      return 'medium';
    case '2g':
    case 'slow-2g':
      return 'low';
    default:
      return 'medium';
  }
};

// Add performance observer for image loading
export const observeImagePerformance = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes('.jpg') || entry.name.includes('.png') || entry.name.includes('.gif')) {
          console.log(`Image resource: ${entry.name} took ${entry.duration.toFixed(2)}ms to load`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });
  }
};
