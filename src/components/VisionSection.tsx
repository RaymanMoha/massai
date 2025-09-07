import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TrendingUp, People, Lightbulb } from '@mui/icons-material';

const VisionSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="vision"
      sx={{
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, 
          rgba(33, 150, 243, 0.02) 0%, 
          rgba(255, 255, 255, 1) 50%, 
          rgba(233, 30, 99, 0.02) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(33, 150, 243, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(233, 30, 99, 0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Vision Content */}
          <Box sx={{ flex: 1, order: { xs: 2, md: 1 } }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  background: theme.palette.gradient.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                The Massai Vision: AI Leadership
              </Typography>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 4,
                  color: theme.palette.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                Named after the Maasai warriors known for their strategic thinking and community leadership, 
                <strong> Massai AIR</strong> embodies the same principles in artificial intelligence. We're not just 
                managing AI tools – we're building AI departments that are as strategic and people-focused as 
                traditional HR departments.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <TrendingUp sx={{ color: 'white', fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Strategic AI Adoption
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Like strategic HR planning, we help businesses adopt AI with long-term vision and immediate impact
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <People sx={{ color: 'white', fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      AI Team Building
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Foster collaboration between human teams and AI tools across Kenya's tech ecosystem
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Lightbulb sx={{ color: 'white', fontSize: 30 }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                      Innovation Excellence
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Drive breakthrough innovations that solve real African challenges
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>

          {/* Vision Illustration */}
          <Box sx={{ flex: 1, order: { xs: 1, md: 2 } }}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Main Illustration Container */}
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '400px',
                    borderRadius: '30px',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background Image */}
                  <Box
                    component="img"
                    src="/ai.jpg"
                    alt="AI Innovation Team"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '30px',
                    }}
                  />
                  
                  {/* Overlay with gradient */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(145deg, 
                        rgba(33, 150, 243, 0.3) 0%, 
                        rgba(255, 255, 255, 0.1) 50%,
                        rgba(233, 30, 99, 0.3) 100%)`,
                      borderRadius: '30px',
                    }}
                  />

                  {/* Floating Network Nodes */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '15%',
                      left: '15%',
                      width: '20px',
                      height: '20px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '50%',
                      animation: 'float 3s ease-in-out infinite',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '40px',
                        height: '40px',
                        border: `2px solid rgba(255, 255, 255, 0.6)`,
                        borderRadius: '50%',
                        transform: 'translate(-50%, -50%)',
                        opacity: 0.7,
                        animation: 'pulse 2s ease-in-out infinite',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '20%',
                      right: '20%',
                      width: '16px',
                      height: '16px',
                      background: 'rgba(233, 30, 99, 0.8)',
                      borderRadius: '50%',
                      animation: 'float 2.5s ease-in-out infinite reverse',
                      boxShadow: '0 4px 20px rgba(233, 30, 99, 0.3)',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: '10%',
                      width: '12px',
                      height: '12px',
                      background: 'rgba(33, 150, 243, 0.8)',
                      borderRadius: '50%',
                      animation: 'float 4s ease-in-out infinite',
                      boxShadow: '0 4px 20px rgba(33, 150, 243, 0.3)',
                    }}
                  />
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.1; }
          }
        `}
      </style>
    </Box>
  );
};

export default VisionSection;
