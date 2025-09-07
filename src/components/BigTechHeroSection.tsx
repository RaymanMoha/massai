import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowForward, PlayArrow } from '@mui/icons-material';

const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 10
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        border: '1px solid rgba(229, 229, 234, 0.6)',
        padding: '24px',
      }}
    >
      {children}
    </motion.div>
  );
};

const ArchitecturalGrid = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        backgroundImage: `
          linear-gradient(rgba(0, 122, 255, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 122, 255, 0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
      }}
    />
  );
};

const GlowOrb = ({ size = 200, color = '#007AFF', delay = 0 }: { size?: number; color?: string; delay?: number }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1.2, 1],
        opacity: [0, 0.3, 0.1],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${color}40 0%, ${color}10 50%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
    />
  );
};

const BigTechHeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX - centerX);
      mouseY.set(clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(ellipse at top, rgba(0, 122, 255, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at bottom right, rgba(255, 59, 48, 0.05) 0%, transparent 50%),
          linear-gradient(180deg, #FFFFFF 0%, #FBFBFD 100%)
        `,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Architectural Grid */}
      <ArchitecturalGrid />

      {/* Floating Orbs */}
      <GlowOrb size={300} color="#007AFF" delay={0} />
      <GlowOrb size={200} color="#FF3B30" delay={0.5} />
      <GlowOrb size={150} color="#5AC8FA" delay={1} />

      {/* Floating Elements */}
      <Box sx={{ position: 'absolute', top: '20%', right: '10%', zIndex: 1 }}>
        <FloatingCard delay={1.2}>
          <Typography variant="caption" sx={{ color: '#007AFF', fontWeight: 600 }}>
            99.9% Uptime
          </Typography>
        </FloatingCard>
      </Box>

      <Box sx={{ position: 'absolute', bottom: '30%', left: '5%', zIndex: 1 }}>
        <FloatingCard delay={1.5}>
          <Typography variant="caption" sx={{ color: '#FF3B30', fontWeight: 600 }}>
            Real-time AI
          </Typography>
        </FloatingCard>
      </Box>

      <Box sx={{ position: 'absolute', top: '40%', left: '15%', zIndex: 1 }}>
        <FloatingCard delay={1.8}>
          <Typography variant="caption" sx={{ color: '#34C759', fontWeight: 600 }}>
            Enterprise Ready
          </Typography>
        </FloatingCard>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 8, md: 12 },
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 6,
              alignItems: 'center',
            }}
          >
            <motion.div variants={itemVariants}>
              <Box sx={{ mb: 3 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #007AFF, #5AC8FA)',
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: '50px',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    NEXT-GEN AI PLATFORM
                  </Typography>
                </motion.div>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(135deg, #1D1D1F 0%, #007AFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Scale African Innovation Through
                <Box component="span" sx={{ 
                  background: 'linear-gradient(135deg, #007AFF, #5AC8FA)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'block'
                }}>
                  Intelligent Automation
                </Box>
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  mb: 4,
                  maxWidth: '500px',
                  lineHeight: 1.7,
                  fontSize: '1.25rem',
                  color: '#86868B',
                }}
              >
                Mass.AI delivers enterprise-grade artificial intelligence solutions designed 
                specifically for African businesses. Transform your operations with smart automation 
                that understands your market.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                sx={{ mb: 4 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      minWidth: 200,
                      height: 56,
                      background: 'linear-gradient(135deg, #007AFF 0%, #5AC8FA 100%)',
                      boxShadow: '0 8px 32px rgba(0, 122, 255, 0.3)',
                    }}
                  >
                    Start Building
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      minWidth: 200,
                      height: 56,
                      borderColor: '#E5E5EA',
                      color: '#1D1D1F',
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </Stack>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {[
                  { label: '50K+', sublabel: 'Active Users' },
                  { label: '99.9%', sublabel: 'Uptime' },
                  { label: '24/7', sublabel: 'Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          background: 'linear-gradient(135deg, #007AFF, #5AC8FA)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          mb: 0.5,
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#86868B', fontWeight: 500 }}>
                        {stat.sublabel}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 400, md: 600 },
                  borderRadius: '32px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(229, 229, 234, 0.6)',
                  boxShadow: '0 32px 80px rgba(0, 0, 0, 0.12)',
                }}
              >
                <Box
                  component="img"
                  src="/ai3.jpg"
                  alt="AI Dashboard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.1) saturate(1.1)',
                  }}
                />
                
                {/* Overlay with glass effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.1) 0%, rgba(90, 200, 250, 0.05) 100%)',
                  }}
                />

                {/* Floating UI Elements */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                >
                  <Box
                    sx={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      p: 2,
                      border: '1px solid rgba(229, 229, 234, 0.6)',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#007AFF', fontWeight: 600 }}>
                      Live Processing: 1.2M ops/sec
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                  }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.8 }}
                >
                  <Box
                    sx={{
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '16px',
                      p: 2,
                      border: '1px solid rgba(229, 229, 234, 0.6)',
                    }}
                  >
                    <Typography variant="caption" sx={{ color: '#34C759', fontWeight: 600 }}>
                      Models Active: 47
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default BigTechHeroSection;
