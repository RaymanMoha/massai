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

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
        background: '#FFFFFF',
        position: 'relative',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: 'flex-start',
              gap: { xs: 8, lg: 12 },
              minHeight: '80vh',
            }}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1, maxWidth: { lg: '600px' } }}>
              {/* Overline */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#00AEEF',
                    mb: 4,
                  }}
                >
                  Mass.AI — Artificial Intelligence Resources
                </Typography>
              </motion.div>

              {/* Main Headline - Dentsu Style */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
                    fontWeight: 700,
                    lineHeight: 1,
                    color: '#000000',
                    mb: 6,
                    letterSpacing: '-0.02em',
                  }}
                >
                  Building to Breakthrough
                </Typography>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 400,
                    lineHeight: 1.4,
                    color: '#333333',
                    mb: 8,
                    maxWidth: '500px',
                  }}
                >
                  The strategic AI partner transforming African enterprises through intelligent automation, scalable solutions, and measurable digital outcomes.
                </Typography>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToPricing}
                  endIcon={<ArrowForward />}
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    py: 2.5,
                    px: 5,
                    backgroundColor: '#00AEEF',
                    color: '#FFFFFF',
                    borderRadius: '0px',
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#0099D4',
                      boxShadow: '0 4px 12px rgba(0, 174, 239, 0.3)',
                      transform: 'translateY(-1px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Transform Your Business
                </Button>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: '#666666',
                    mt: 8,
                    maxWidth: '450px',
                  }}
                >
                  Our work drives impact at the convergence of artificial intelligence, 
                  technology and African innovation. We push the boundaries of business 
                  transformation and sustainable growth for brands, people and society.
                </Typography>
              </motion.div>
            </Box>

            {/* Right Content - Hero Image */}
            <Box sx={{ flex: 1, display: { xs: 'none', lg: 'block' } }}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '600px',
                    position: 'relative',
                  }}
                >
                  <Box
                    component="img"
                    src="/ai2.jpg"
                    alt="AI Innovation"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
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
