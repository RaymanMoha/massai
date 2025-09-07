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
  Dashboard as DashboardIcon,
  School as TrainingIcon,
  Security as ComplianceIcon,
  Store as MarketplaceIcon,
  Code as TechStackIcon,
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
      viewport={{ once: true, margin: '-100px' }}
    >
      <Card
        sx={{
          height: '100%',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
            borderColor: '#00AEEF',
          },
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}
      >
        {/* Image Header */}
        {image && (
          <Box
            sx={{
              height: 200,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.05) saturate(1.05)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(0, 174, 239, 0.1) 0%, transparent 60%)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: 16,
                width: 48,
                height: 48,
                borderRadius: '12px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                '& .MuiSvgIcon-root': {
                  fontSize: 24,
                  color: '#00AEEF',
                },
              }}
            >
              {icon}
            </Box>
          </Box>
        )}
        
        <CardContent sx={{ p: 3 }}>
          {!image && (
            <Box
              sx={{
                width: 56,
                height: 56,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00AEEF 0%, #0099D4 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 3,
                '& .MuiSvgIcon-root': {
                  fontSize: 28,
                  color: 'white',
                },
              }}
            >
              {icon}
            </Box>
          )}
          
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: '#1a1a1a',
              fontSize: '1.25rem',
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: '#64748b',
              lineHeight: 1.6,
              fontSize: '0.95rem',
            }}
          >
            {description}
          </Typography>
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
      icon: <DashboardIcon />,
      title: 'AI Dashboard',
      description: 'Comprehensive analytics and monitoring for all your AI tools and processes in one centralized dashboard.',
      image: '/ai3.jpg',
    },
    {
      icon: <TrainingIcon />,
      title: 'Training Hub',
      description: 'Interactive learning modules and certification programs to upskill your team in AI technologies.',
      image: '/ai1.jpg',
    },
    {
      icon: <ComplianceIcon />,
      title: 'Compliance & Governance',
      description: 'Built-in compliance frameworks ensuring your AI implementations meet industry standards and regulations.',
      image: '/ai4.jpg',
    },
    {
      icon: <MarketplaceIcon />,
      title: 'AI Marketplace',
      description: 'Curated marketplace of vetted AI solutions specifically designed for African businesses and use cases.',
      image: '/ai6.jpg',
    },
    {
      icon: <TechStackIcon />,
      title: 'MVP Tech Stack',
      description: 'Pre-configured technology stack to rapidly prototype and deploy AI solutions with minimal setup.',
      image: '/ai8.jpg',
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#f8fafc',
        position: 'relative',
      }}
    >
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
                color: '#1a1a1a',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textAlign: 'center',
              }}
            >
              Powerful Features for AI Excellence
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Everything you need to successfully implement, manage, and scale AI solutions in your organization
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: 3,
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              image={feature.image}
            />
          ))}
        </Box>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                fontStyle: 'italic',
                fontSize: '1.1rem',
              }}
            >
              "Empowering Kenya's digital transformation through accessible AI technology"
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
