import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Analytics,
  Psychology,
  Shield,
} from '@mui/icons-material';

interface FeatureCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  delay: number;
  image?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, image }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <Card
        sx={{
          height: '100%',
          background: '#FFFFFF',
          border: '4px solid #000000',
          borderRadius: 0,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
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
            '& .feature-image': {
              transform: 'scale(1.05)',
              filter: 'contrast(1.2) brightness(1.1)',
            },
          },
        }}
      >
        {/* Boxy Image Section */}
        {image && (
          <Box
            sx={{
              height: 200,
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#f8f9fa',
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              className="feature-image"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.1) brightness(0.95)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
            
            {/* Geometric overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: -10,
                right: -10,
                width: 40,
                height: 40,
                backgroundColor: '#000000',
                clipPath: 'polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)',
              }}
            />
          </Box>
        )}
        
        <CardContent sx={{ p: 4, position: 'relative' }}>
          {/* Icon in geometric container */}
          <Box
            sx={{
              display: 'inline-block',
              backgroundColor: '#000000',
              color: '#FFFFFF',
              p: 2,
              mb: 3,
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
            }}
          >
            {icon}
          </Box>
          
          {/* Title */}
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: 900,
              color: '#000000',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              lineHeight: 1.2,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            {title}
          </Typography>
          
          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              color: '#333333',
              lineHeight: 1.6,
              fontSize: '1rem',
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>

          {/* Geometric accent */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '60px',
              height: '6px',
              backgroundColor: '#00AEEF',
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
            }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <Analytics />,
      title: 'Strategic Intelligence',
      description: 'Advanced analytics that transform data into decisive action. Real-time insights that drive competitive advantage and operational excellence.',
      image: '/ai3.jpg',
    },
    {
      icon: <Psychology />,
      title: 'Capability Development',
      description: 'Comprehensive AI education programs that build internal expertise. Transform your workforce into AI-native professionals.',
      image: '/ai1.jpg',
    },
    {
      icon: <Shield />,
      title: 'Responsible Implementation',
      description: 'Ethical AI frameworks that ensure sustainable growth. Governance models that build trust and drive long-term value.',
      image: '/ai4.jpg',
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 10, md: 16 },
        backgroundColor: '#f8f9fa',
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
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
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
              Capabilities
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                fontWeight: 900,
                lineHeight: 0.9,
                color: '#000000',
                mb: 4,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              AI Solutions
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
                That Transform
              </Box>
            </Typography>

            <Box
              sx={{
                backgroundColor: '#ffffff',
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
                Empowering businesses across Africa with cutting-edge AI technology
                and strategic innovation frameworks that drive measurable results.
              </Typography>
            </Box>

            {/* AI Innovation GIF */}
            <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="/gif1.gif"
                  alt="AI Technology in Action"
                  sx={{
                    width: { xs: '250px', md: '300px' },
                    height: { xs: '180px', md: '220px' },
                    objectFit: 'contain',
                    borderRadius: '12px',
                    border: '2px solid #000000',
                    backgroundColor: '#ffffff',
                    p: 1,
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* Features Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: { xs: 4, md: 6 },
            mb: { xs: 10, md: 16 },
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
              image={feature.image}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
