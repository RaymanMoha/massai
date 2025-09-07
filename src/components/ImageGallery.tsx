import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Modal,
  IconButton,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Close, ArrowBack, ArrowForward } from '@mui/icons-material';

interface ImageData {
  src: string;
  title: string;
  category: string;
  description: string;
}

const ImageGallery: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedImage, setSelectedImage] = React.useState<number | null>(null);

  const images: ImageData[] = [
    {
      src: '/ai.jpg',
      title: 'Neural Networks',
      category: 'Deep Learning',
      description: 'Advanced neural network architectures powering intelligent decision-making systems.',
    },
    {
      src: '/ai1.jpg',
      title: 'Data Processing',
      category: 'Analytics',
      description: 'Real-time data processing pipelines for business intelligence and insights.',
    },
    {
      src: '/ai2.jpg',
      title: 'AI Infrastructure',
      category: 'Cloud Computing',
      description: 'Scalable cloud infrastructure optimized for AI workloads and machine learning.',
    },
    {
      src: '/ai3.jpg',
      title: 'Automation Systems',
      category: 'Process Intelligence',
      description: 'Intelligent automation systems streamlining business operations and workflows.',
    },
    {
      src: '/ai4.jpg',
      title: 'Machine Learning',
      category: 'Predictive Models',
      description: 'Advanced ML models providing predictive analytics and business forecasting.',
    },
    {
      src: '/ai5.jpg',
      title: 'Digital Innovation',
      category: 'Future Technology',
      description: 'Cutting-edge digital solutions transforming traditional business models.',
    },
    {
      src: '/ai6.jpg',
      title: 'Smart Analytics',
      category: 'Business Intelligence',
      description: 'Intelligent analytics platforms delivering actionable business insights.',
    },
    {
      src: '/ai7.jpg',
      title: 'AI Integration',
      category: 'System Architecture',
      description: 'Seamless AI integration with existing enterprise systems and workflows.',
    },
    {
      src: '/ai8.jpg',
      title: 'Innovation Lab',
      category: 'Research & Development',
      description: 'Innovation laboratory developing next-generation AI solutions for Africa.',
    },
  ];

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: 8,
              position: 'relative',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 900,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                mb: 3,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 120,
                  height: 4,
                  backgroundColor: '#00AEEF',
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)',
                },
              }}
            >
              AI Innovation Gallery
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#333333',
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 500,
              }}
            >
              Explore our comprehensive AI solutions and technological innovations
            </Typography>
          </Box>
        </motion.div>

        {/* Gallery Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4,
            mb: 8,
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                onClick={() => handleImageClick(index)}
                sx={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  border: '4px solid #000000',
                  borderRadius: 0,
                  overflow: 'hidden',
                  height: '400px',
                  cursor: 'pointer',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    bottom: -4,
                    left: -4,
                    backgroundColor: index % 3 === 0 ? '#00AEEF' : index % 3 === 1 ? '#FF6B35' : '#7B68EE',
                    zIndex: -1,
                    transform: 'translate(8px, 8px)',
                  },
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translate(-4px, -4px)',
                    '&::before': {
                      transform: 'translate(12px, 12px)',
                    },
                    '& img': {
                      transform: 'scale(1.1)',
                    },
                    '& .overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.title}
                  sx={{
                    width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    filter: 'contrast(1.1) brightness(0.9)',
                  }}
                />
                
                {/* Hover Overlay */}
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '280px',
                    background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'flex-end',
                    p: 3,
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#00AEEF',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        mb: 1,
                      }}
                    >
                      {image.category}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#FFFFFF',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {image.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Content Box */}
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: '#ffffff',
                    height: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#00AEEF',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      mb: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    {image.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      color: '#000000',
                      textTransform: 'uppercase',
                      letterSpacing: '0.02em',
                      mb: 1,
                    }}
                  >
                    {image.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666666',
                      fontWeight: 400,
                      fontSize: '0.875rem',
                      lineHeight: 1.4,
                    }}
                  >
                    Click to explore details
                  </Typography>
                </Box>

                {/* Geometric accent */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    width: 30,
                    height: 30,
                    backgroundColor: index % 3 === 0 ? '#00AEEF' : index % 3 === 1 ? '#FF6B35' : '#7B68EE',
                    clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
                  }}
                />
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* Modal for Image Preview */}
        <AnimatePresence>
          {selectedImage !== null && (
            <Modal
              open={selectedImage !== null}
              onClose={handleClose}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    border: '4px solid #000000',
                    borderRadius: 0,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    overflow: 'hidden',
                    position: 'relative',
                    outline: 'none',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      bottom: -4,
                      left: -4,
                      backgroundColor: '#000000',
                      zIndex: -1,
                      transform: 'translate(12px, 12px)',
                    },
                  }}
                >
                  {/* Close Button */}
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      top: 15,
                      right: 15,
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      zIndex: 3,
                      '&:hover': {
                        backgroundColor: '#00AEEF',
                      },
                    }}
                  >
                    <Close />
                  </IconButton>

                  {/* Navigation Buttons */}
                  <IconButton
                    onClick={handlePrevious}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: 15,
                      transform: 'translateY(-50%)',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      zIndex: 3,
                      '&:hover': {
                        backgroundColor: '#00AEEF',
                      },
                    }}
                  >
                    <ArrowBack />
                  </IconButton>

                  <IconButton
                    onClick={handleNext}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: 15,
                      transform: 'translateY(-50%)',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      zIndex: 3,
                      '&:hover': {
                        backgroundColor: '#00AEEF',
                      },
                    }}
                  >
                    <ArrowForward />
                  </IconButton>

                  {/* Image */}
                  <Box
                    component="img"
                    src={images[selectedImage].src}
                    alt={images[selectedImage].title}
                    sx={{
                      width: '100%',
                      maxHeight: '70vh',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {/* Content */}
                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#00AEEF',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        mb: 1,
                      }}
                    >
                      {images[selectedImage].category}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 900,
                        color: '#000000',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em',
                        mb: 2,
                      }}
                    >
                      {images[selectedImage].title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333333',
                        lineHeight: 1.6,
                        fontWeight: 500,
                        maxWidth: '600px',
                      }}
                    >
                      {images[selectedImage].description}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default ImageGallery;
