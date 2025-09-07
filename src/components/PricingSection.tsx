import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Check, Star, Business, AccountBalance } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  icon: React.ReactElement;
  buttonText: string;
  buttonVariant: 'outlined' | 'contained';
}

interface PricingCardProps {
  plan: PricingPlan;
  delay: number;
  onButtonClick: (planName: string) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, delay, onButtonClick }) => {
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
          position: 'relative',
          background: '#ffffff',
          border: plan.isPopular ? '4px solid #00AEEF' : '3px solid #000000',
          borderRadius: 0,
          p: { xs: 2, md: 3 },
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: plan.isPopular ? -4 : -3,
            right: plan.isPopular ? -4 : -3,
            bottom: plan.isPopular ? -4 : -3,
            left: plan.isPopular ? -4 : -3,
            backgroundColor: plan.isPopular ? '#000000' : '#f8f9fa',
            zIndex: -1,
            transform: plan.isPopular ? 'translate(12px, 12px)' : 'translate(8px, 8px)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          },
          '&:hover': {
            transform: plan.isPopular ? 'translate(-8px, -8px)' : 'translate(-4px, -4px)',
            '&::before': {
              transform: plan.isPopular ? 'translate(20px, 20px)' : 'translate(12px, 12px)',
              backgroundColor: plan.isPopular ? '#000000' : '#00AEEF',
            },
          },
        }}
      >
        {plan.isPopular && (
          <Box
            sx={{
              position: 'absolute',
              top: -15,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#00AEEF',
              color: '#FFFFFF',
              px: 4,
              py: 1,
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
            }}
          >
            Most Popular
          </Box>
        )}

        <CardContent sx={{ p: '32px !important', textAlign: 'center' }}>
          {/* Plan Icon */}
          <Box
            sx={{
              display: 'inline-block',
              backgroundColor: plan.isPopular ? '#00AEEF' : '#000000',
              color: '#FFFFFF',
              p: 3,
              mb: 4,
              clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)',
            }}
          >
            {plan.icon}
          </Box>

          {/* Plan Name */}
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: 900,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            {plan.name}
          </Typography>

          {/* Plan Description */}
          <Typography
            variant="body2"
            sx={{
              mb: 4,
              color: '#333333',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            {plan.description}
          </Typography>

          {/* Price */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                color: '#000000',
                display: 'inline',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              {plan.price}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666666',
                ml: 1,
                display: 'inline',
                fontWeight: 600,
              }}
            >
              {plan.period}
            </Typography>
          </Box>

          {/* Features List */}
          <List sx={{ mb: 4, textAlign: 'left' }}>
            {plan.features.map((feature, index) => (
              <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)',
                    }}
                  >
                    <Check
                      sx={{
                        color: '#FFFFFF',
                        fontSize: 14,
                      }}
                    />
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.95rem',
                      color: '#333333',
                      fontWeight: 500,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={plan.buttonVariant}
              size="large"
              fullWidth
              onClick={() => onButtonClick(plan.name)}
              sx={{
                py: 2.5,
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderRadius: 0,
                border: '3px solid #000000',
                backgroundColor: plan.buttonVariant === 'contained' ? '#000000' : 'transparent',
                color: plan.buttonVariant === 'contained' ? '#FFFFFF' : '#000000',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: '#00AEEF',
                  borderColor: '#00AEEF',
                  color: '#FFFFFF',
                  transform: 'translate(-2px, -2px)',
                  boxShadow: '2px 2px 0px #000000',
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
              {plan.buttonText}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handlePricingButtonClick = (planName: string) => {
    // Navigate to contact form with plan information
    navigate('/contact', { state: { selectedPlan: planName } });
  };

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 'KES 10,000',
      period: '/month',
      description: 'Perfect for small teams starting their AI journey',
      icon: <Star />,
      features: [
        'Up to 5 team members',
        'Basic AI dashboard',
        'Training modules access',
        'Email support',
        'Basic compliance tools',
        'Community forum access',
      ],
      buttonText: 'Start Free Trial',
      buttonVariant: 'outlined',
    },
    {
      name: 'Business',
      price: 'KES 25,000',
      period: '/month',
      description: 'Ideal for SMEs scaling their AI adoption',
      icon: <AccountBalance />,
      features: [
        'Up to 25 team members',
        'Advanced AI dashboard',
        'Full training hub access',
        'Priority support',
        'Advanced compliance & governance',
        'AI marketplace access',
        'Custom integrations',
        'Performance analytics',
      ],
      isPopular: true,
      buttonText: 'Get Started',
      buttonVariant: 'contained',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For corporates needing full compliance & governance',
      icon: <AccountBalance />,
      features: [
        'Unlimited team members',
        'Enterprise AI dashboard',
        'Custom training programs',
        'Dedicated account manager',
        'Full compliance suite',
        'White-label solutions',
        'API access',
        'Custom MVP tech stack',
        'On-premise deployment',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outlined',
    },
  ];

  return (
    <Box
      id="pricing"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
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
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Header Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
            {/* Geometric Header Accent */}
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 8,
                backgroundColor: '#00AEEF',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
                mb: 4,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 900,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  backgroundColor: '#000000',
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)',
                },
              }}
            >
              Our Pricing
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#333333',
                maxWidth: 600,
                mx: 'auto',
                fontWeight: 500,
                lineHeight: 1.6,
              }}
            >
              Flexible pricing plans designed to grow with your business. Start your AI transformation today.
            </Typography>
          </Box>
        </motion.div>

        {/* Pricing Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: { xs: 3, md: 4 },
            maxWidth: '1200px',
            margin: '0 auto',
            mb: 8,
          }}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              delay={index * 0.2}
              onButtonClick={handlePricingButtonClick}
            />
          ))}
        </Box>

        {/* Footer CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              py: 6,
              px: 4,
              background: '#ffffff',
              border: '3px solid #000000',
              borderRadius: 0,
              position: 'relative',
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
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                fontWeight: 900,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Need a Custom Solution?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: '#333333',
                fontSize: '1.125rem',
                fontWeight: 500,
              }}
            >
              Get in touch with our team to discuss enterprise solutions tailored to your specific requirements.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: 2, md: 3 },
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/contact')}
                  sx={{
                    py: 2,
                    px: 6,
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: 0,
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
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
                  Contact Sales
                </Button>
              </motion.div>
              <motion.img
                src="/looney-arrow.gif"
                alt="Contact Sales Arrow"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                style={{
                  width: '90px',
                  height: '67px',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingSection;
