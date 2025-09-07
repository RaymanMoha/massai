import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'center',
              gap: { xs: 6, lg: 8 },
              minHeight: '80vh',
            }}
          >
            {/* Left Content */}
            <Box
              sx={{
                flex: 1,
                maxWidth: { lg: '600px' },
                position: 'relative',
                zIndex: 2,
              }}
            >
                {/* Overline with boxy design */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Box
                    sx={{
                      display: 'inline-block',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      px: 3,
                      py: 1.5,
                      mb: 4,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)',
                    }}
                  >
                    Mass.AI — Artificial Intelligence Resources
                  </Box>
                </motion.div>

                {/* Main Headline with geometric emphasis */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Box sx={{ position: 'relative', mb: 6 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontSize: { xs: '2rem', md: '3.2rem', lg: '3.8rem' },
                        fontWeight: 800,
                        lineHeight: { xs: 1.1, md: 0.95 },
                        color: '#000000',
                        letterSpacing: '-0.02em',
                        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                        textTransform: 'uppercase',
                      }}
                    >
                      Because AI Still Needs{' '}
                      <Box
                        component="span"
                        sx={{
                          background: 'linear-gradient(90deg, #00AEEF 0%, #0099D4 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: { xs: -8, md: -12 },
                            left: 0,
                            width: '100%',
                            height: { xs: 6, md: 8 },
                            backgroundColor: '#00AEEF',
                            clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)',
                          },
                        }}
                      >
                        People
                      </Box>
                    </Typography>
                  </Box>
                </motion.div>

                {/* Subtitle in a box */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#f8f9fa',
                      border: '3px solid #000000',
                      p: 4,
                      mb: 6,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -3,
                        right: -3,
                        bottom: -3,
                        left: -3,
                        backgroundColor: '#00AEEF',
                        zIndex: -1,
                        transform: 'translate(8px, 8px)',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: { xs: '1.125rem', md: '1.25rem' },
                        fontWeight: 500,
                        lineHeight: 1.5,
                        color: '#000000',
                      }}
                    >
                      The strategic AI partner transforming African enterprises through intelligent automation, scalable solutions, and measurable digital outcomes.
                    </Typography>
                  </Box>
                </motion.div>

                {/* CTA Button with boxy design */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mb: 6,
                    alignItems: 'center',
                    flexDirection: { xs: 'column', md: 'row' }
                  }}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate('/contact')}
                      endIcon={<ArrowForward />}
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        py: 3,
                        px: 6,
                        backgroundColor: '#000000',
                        color: '#FFFFFF',
                        borderRadius: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        border: '3px solid #000000',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:hover': {
                          backgroundColor: '#00AEEF',
                          borderColor: '#00AEEF',
                          transform: 'translate(-4px, -4px)',
                          boxShadow: '4px 4px 0px #000000',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                          transition: 'left 0.5s',
                        },
                        '&:hover::after': {
                          left: '100%',
                        },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      Get Started Today
                    </Button>

                    {/* Hero CTA Arrow GIF */}
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      <Box
                        component="img"
                        src="/looney-arrow.gif"
                        alt="Start your transformation"
                        sx={{
                          width: { xs: '80px', md: '120px' },
                          height: { xs: '60px', md: '90px' },
                          objectFit: 'contain',
                          display: { xs: 'none', md: 'block' }
                        }}
                      />
                    </motion.div>
                  </Box>
                </motion.div>

                {/* Description in geometric box */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Box
                    sx={{
                      borderLeft: '6px solid #00AEEF',
                      pl: 4,
                      py: 2,
                      backgroundColor: 'rgba(0, 174, 239, 0.05)',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        backgroundColor: '#000000',
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        fontWeight: 500,
                        lineHeight: 1.6,
                        color: '#000000',
                        maxWidth: '450px',
                      }}
                    >
                      Our work drives impact at the convergence of artificial intelligence,
                      technology and African innovation. We push the boundaries of business
                      transformation and sustainable growth for brands, people and society.
                    </Typography>
                  </Box>
                </motion.div>
              </Box>

            {/* Right Content - Hero Image with boxy design */}
            <Box
              sx={{
                flex: 1.2,
                display: { xs: 'none', lg: 'block' },
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      right: -20,
                      bottom: -20,
                      backgroundColor: '#00AEEF',
                      zIndex: -1,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 40,
                      left: 40,
                      right: -40,
                      bottom: -40,
                      border: '3px solid #000000',
                      zIndex: -2,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/ai2.jpg"
                    alt="AI Innovation"
                    sx={{
                      width: '680px',
                      height: '700px',
                      objectFit: 'cover',
                      border: '4px solid #000000',
                      filter: 'contrast(1.1) brightness(0.95)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        filter: 'contrast(1.2) brightness(1)',
                        transform: 'scale(1.02)',
                      },
                    }}
                  />
                  
                  {/* Geometric overlay elements */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      right: -20,
                      width: 60,
                      height: 60,
                      backgroundColor: '#000000',
                      clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
                    }}
                  />
                  
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -20,
                      left: -20,
                      width: 80,
                      height: 80,
                      backgroundColor: '#00AEEF',
                      clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)',
                    }}
                  />
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;
