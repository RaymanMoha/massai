import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

const ImageGallery: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const galleryImages = [
    { src: '/ai5.jpg', alt: 'AI Research and Development' },
    { src: '/ai7.jpg', alt: 'AI Innovation Workspace' },
    { src: '/ai8.jpg', alt: 'Future of AI Technology' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(180deg, 
          rgba(248, 250, 252, 1) 0%, 
          rgba(255, 255, 255, 0.95) 50%, 
          rgba(248, 250, 252, 1) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 20% 20%, rgba(33, 150, 243, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(233, 30, 99, 0.03) 0%, transparent 50%)`,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                background: theme.palette.gradient.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              See AI in Action
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Discover how AI is transforming workplaces and driving innovation across industries
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '250px', md: '300px' },
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    '& .image': {
                      transform: 'scale(1.1)',
                    },
                    '& .overlay': {
                      background: `linear-gradient(145deg, 
                        rgba(33, 150, 243, 0.4) 0%, 
                        rgba(233, 30, 99, 0.3) 100%)`,
                    },
                  },
                  transition: 'all 0.3s ease-in-out',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  className="image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
                
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(145deg, 
                      rgba(33, 150, 243, 0.2) 0%, 
                      rgba(233, 30, 99, 0.1) 100%)`,
                    transition: 'background 0.3s ease-in-out',
                  }}
                />

                {/* Floating Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50%',
                    animation: `float ${3 + index}s ease-in-out infinite`,
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontStyle: 'italic',
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: '1.1rem',
              }}
            >
              "The future of AI in Africa is bright, and Kenya is leading the way in innovation and implementation."
            </Typography>
          </Box>
        </motion.div>
      </Container>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </Box>
  );
};

export default ImageGallery;
