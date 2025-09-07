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
import { PlayArrow, TrendingUp, Security } from '@mui/icons-material';
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
        background: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 12 },
        pb: { xs: 8, md: 10 },
      }}
    >
      {/* Subtle Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.02) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: { xs: 6, md: 8 },
            }}
          >
            <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <img
                    src="/logomassai.png"
                    alt="Mass.AI Logo"
                    style={{
                      height: '60px',
                      width: 'auto',
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00AEEF',
                        fontWeight: 600,
                        mb: 0.5,
                        fontSize: '1.25rem',
                      }}
                    >
                      Mass.AI
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                      }}
                    >
                      Artificial Intelligence Resources
                    </Typography>
                  </Box>
                </Box>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: '#1a1a1a',
                    mb: 3,
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.2,
                    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Manage AI like you manage people
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: '#666',
                    mb: 4,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                  }}
                >
                  Mass.AI helps African businesses adopt, track, and scale AI tools with confidence. 
                  Scaling African innovation through smarter automation.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 5 }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => navigate('/contact')}
                      startIcon={<PlayArrow />}
                      sx={{
                        fontSize: '1.1rem',
                        py: 2,
                        px: 4,
                        background: '#00AEEF',
                        color: 'white',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 600,
                        boxShadow: '0 4px 16px rgba(0, 174, 239, 0.3)',
                        '&:hover': {
                          background: '#0099D4',
                          boxShadow: '0 6px 20px rgba(0, 174, 239, 0.4)',
                        },
                      }}
                    >
                      Get Started Today
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        fontSize: '1.1rem',
                        py: 2,
                        px: 4,
                        borderColor: '#00AEEF',
                        color: '#00AEEF',
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontWeight: 600,
                        borderWidth: '2px',
                        '&:hover': {
                          borderColor: '#0099D4',
                          backgroundColor: 'rgba(0, 174, 239, 0.05)',
                          borderWidth: '2px',
                        },
                      }}
                    >
                      Watch Demo
                    </Button>
                  </motion.div>
                </Box>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'rgba(0, 174, 239, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TrendingUp sx={{ color: '#00AEEF', fontSize: 20 }} />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>
                      500+ Companies
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'rgba(0, 174, 239, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Security sx={{ color: '#00AEEF', fontSize: 20 }} />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#333' }}>
                      Enterprise Security
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ flex: 1, order: { xs: 1, md: 2 } }}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '400px',
                    borderRadius: '16px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                  }}
                >
                  {/* Main Hero Image */}
                  <Box
                    component="img"
                    src="/ai2.jpg"
                    alt="AI Technology Dashboard"
                    sx={{
                      width: '150%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '16px',
                      filter: 'contrast(1.05) saturate(1.05)',
                    }}
                  />
                  
                  {/* Subtle overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(145deg, rgba(0, 174, 239, 0.05) 0%, transparent 60%)',
                      borderRadius: '16px',
                    }}
                  />

                  {/* Floating indicator */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'rgba(255, 255, 255, 0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      px: 2,
                      py: 1,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#00AEEF', fontWeight: 600 }}>
                      AI Dashboard
                    </Typography>
                  </Box>
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
