import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Insights,
  Psychology,
  AutoAwesome,
} from '@mui/icons-material';

const VisionSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const insights = [
    {
      icon: <Psychology />,
      category: 'AI Strategy',
      title: 'The Future of Intelligent Business',
      description: 'How African enterprises are leveraging AI to transform operations and drive sustainable growth.',
      readTime: '5 min read',
      featured: true,
    },
    {
      icon: <TrendingUp />,
      category: 'Innovation',
      title: 'Digital Transformation Insights',
      description: 'Key strategies for successful digital transformation in emerging markets.',
      readTime: '4 min read',
      featured: false,
    },
    {
      icon: <AutoAwesome />,
      category: 'Automation',
      title: 'Smart Automation Solutions',
      description: 'Implementing intelligent automation for maximum efficiency and impact.',
      readTime: '6 min read',
      featured: false,
    },
    {
      icon: <Insights />,
      category: 'Data Science',
      title: 'Data-Driven Decision Making',
      description: 'Unlock the power of data analytics for strategic business decisions.',
      readTime: '7 min read',
      featured: false,
    },
  ];

  return (
    <Box
      id="vision"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: '#ffffff',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px),
            linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            {/* Overline */}
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
              Our Promise
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 900,
                lineHeight: 0.9,
                color: '#000000',
                mb: 6,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              Innovating
              <br />
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
                    bottom: -10,
                    left: 0,
                    width: '100%',
                    height: 8,
                    backgroundColor: '#00AEEF',
                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)',
                  },
                }}
              >
                To Impact
              </Box>
            </Typography>

            <Box
              sx={{
                backgroundColor: '#f8f9fa',
                border: '3px solid #000000',
                p: 4,
                maxWidth: '600px',
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
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  color: '#000000',
                }}
              >
                We increase the potential for innovation to happen, creating experiences
                that enrich every business across Africa.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {/* Insights Cards Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
              },
              gap: 4,
              mb: 8,
            }}
          >
            {/* Featured Card - Larger */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ gridColumn: isMobile ? '1' : '1 / -1' }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: '#ffffff',
                  border: '4px solid #000000',
                  borderRadius: 0,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    bottom: -4,
                    left: -4,
                    backgroundColor: '#00AEEF',
                    zIndex: -1,
                    transform: 'translate(12px, 12px)',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  '&:hover': {
                    transform: 'translate(-8px, -8px)',
                    '&::before': {
                      transform: 'translate(20px, 20px)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                    <Box
                      sx={{
                        display: 'inline-block',
                        backgroundColor: '#000000',
                        color: '#FFFFFF',
                        p: 2,
                        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
                      }}
                    >
                      {insights[0].icon}
                    </Box>
                    <Box
                      sx={{
                        display: 'inline-block',
                        backgroundColor: '#00AEEF',
                        color: '#FFFFFF',
                        px: 3,
                        py: 1,
                        fontSize: '0.875rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
                      }}
                    >
                      Featured
                    </Box>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      color: '#000000',
                      mb: 3,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                      textTransform: 'uppercase',
                      lineHeight: 1.1,
                    }}
                  >
                    {insights[0].title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#333333',
                      lineHeight: 1.6,
                      mb: 4,
                      fontSize: '1.125rem',
                      fontWeight: 500,
                    }}
                  >
                    {insights[0].description}
                  </Typography>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box
                      sx={{
                        display: 'inline-block',
                        backgroundColor: '#f8f9fa',
                        border: '2px solid #000000',
                        color: '#000000',
                        px: 3,
                        py: 1,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {insights[0].category}
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#666666', 
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {insights[0].readTime}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>

            {/* Regular Cards */}
            {insights.slice(1).map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: '#ffffff',
                    border: '3px solid #000000',
                    borderRadius: 0,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -3,
                      right: -3,
                      bottom: -3,
                      left: -3,
                      backgroundColor: '#f8f9fa',
                      zIndex: -1,
                      transform: 'translate(8px, 8px)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    },
                    '&:hover': {
                      transform: 'translate(-4px, -4px)',
                      '&::before': {
                        transform: 'translate(12px, 12px)',
                        backgroundColor: '#00AEEF',
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ mb: 3 }}>
                      <Box
                        sx={{
                          display: 'inline-block',
                          backgroundColor: '#f8f9fa',
                          border: '2px solid #000000',
                          color: '#000000',
                          p: 1.5,
                        }}
                      >
                        {insight.icon}
                      </Box>
                    </Box>

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 900,
                        color: '#000000',
                        mb: 2,
                        lineHeight: 1.3,
                        textTransform: 'uppercase',
                        fontSize: '1.125rem',
                      }}
                    >
                      {insight.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#333333',
                        lineHeight: 1.6,
                        mb: 3,
                        fontSize: '0.95rem',
                        fontWeight: 500,
                      }}
                    >
                      {insight.description}
                    </Typography>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box
                        sx={{
                          display: 'inline-block',
                          backgroundColor: '#f8f9fa',
                          border: '1px solid #000000',
                          color: '#000000',
                          px: 2,
                          py: 0.5,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                        }}
                      >
                        {insight.category}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: '#666666', 
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        {insight.readTime}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                fontSize: '1rem',
                fontWeight: 700,
                py: 3,
                px: 8,
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
              Discover More Insights →
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default VisionSection;
