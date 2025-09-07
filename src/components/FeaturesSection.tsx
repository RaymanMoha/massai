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

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, delay, image }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <Card
        sx={{
          height: '100%',
          background: '#FFFFFF',
          border: 'none',
          boxShadow: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            '& img': {
              transform: 'scale(1.05)',
            },
            '& .feature-title': {
              color: '#00AEEF',
            },
            transform: 'translateY(-4px)',
          },
        }}
      >
        {/* Image */}
        {image && (
          <Box
            sx={{
              height: 300,
              overflow: 'hidden',
              mb: 3,
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
                transition: 'transform 0.3s ease',
              }}
            />
          </Box>
        )}
        
        <CardContent sx={{ p: 0 }}>
          <Typography
            variant="h4"
            className="feature-title"
            sx={{
              mb: 2,
              fontWeight: 700,
              color: '#000000',
              fontSize: '1.5rem',
              lineHeight: 1.3,
              transition: 'color 0.3s ease',
            }}
          >
            {title}
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: '#666666',
              lineHeight: 1.6,
              fontSize: '1rem',
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
      title: 'Strategic Intelligence',
      description: 'Advanced analytics that transform data into decisive action. Real-time insights that drive competitive advantage and operational excellence.',
      image: '/ai3.jpg',
    },
    {
      icon: <TrainingIcon />,
      title: 'Capability Development',
      description: 'Comprehensive AI education programs that build internal expertise. Transform your workforce into AI-native professionals.',
      image: '/ai1.jpg',
    },
    {
      icon: <ComplianceIcon />,
      title: 'Responsible Implementation',
      description: 'Ethical AI frameworks that ensure sustainable growth. Governance models that build trust and drive long-term value.',
      image: '/ai4.jpg',
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 10, md: 15 },
        background: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#666666',
              mb: 4,
            }}
          >
            Who we are
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mb: 8,
              color: '#000000',
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2,
              maxWidth: '800px',
              letterSpacing: '-0.02em',
            }}
          >
            Scaling Intelligence Across Africa
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            },
            gap: { xs: 6, md: 8 },
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

        {/* Description Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: { xs: 10, md: 15 }, maxWidth: '600px' }}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                color: '#000000',
                fontWeight: 600,
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.3,
              }}
            >
              Our client promise: Innovating to Impact
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                lineHeight: 1.6,
                fontSize: '1.125rem',
                mb: 4,
              }}
            >
              Mass.AI increases the potential for innovation to happen, creating experiences 
              that can enrich every business. See what our global team of innovators and 
              integrators can do for you.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                lineHeight: 1.6,
                fontSize: '1rem',
              }}
            >
              Our work drives impact at the convergence of marketing, technology and 
              consulting across the African continent.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
