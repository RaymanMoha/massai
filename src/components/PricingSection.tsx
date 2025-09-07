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
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, delay }) => {
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
          background: plan.isPopular
            ? `linear-gradient(145deg, 
                rgba(255, 255, 255, 0.95) 0%, 
                rgba(248, 250, 252, 0.9) 100%)`
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: plan.isPopular
            ? `2px solid ${theme.palette.primary.main}`
            : '1px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '24px',
          p: { xs: 2, md: 3 },
          transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
          '&:hover': {
            transform: plan.isPopular ? 'scale(1.08)' : 'scale(1.03)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          },
          transition: 'all 0.3s ease-in-out',
        }}
      >
        {plan.isPopular && (
          <Chip
            label="Most Popular"
            sx={{
              position: 'absolute',
              top: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              background: theme.palette.gradient.primary,
              color: 'white',
              fontWeight: 600,
              '& .MuiChip-label': {
                px: 2,
              },
            }}
          />
        )}

        <CardContent sx={{ p: '32px !important', textAlign: 'center' }}>
          {/* Plan Icon */}
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: plan.isPopular
                ? theme.palette.gradient.primary
                : `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              '& .MuiSvgIcon-root': {
                fontSize: 40,
                color: 'white',
              },
            }}
          >
            {plan.icon}
          </Box>

          {/* Plan Name */}
          <Typography
            variant="h4"
            sx={{
              mb: 1,
              fontWeight: 700,
              color: theme.palette.text.primary,
            }}
          >
            {plan.name}
          </Typography>

          {/* Plan Description */}
          <Typography
            variant="body2"
            sx={{
              mb: 3,
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
            }}
          >
            {plan.description}
          </Typography>

          {/* Price */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                background: theme.palette.gradient.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline',
              }}
            >
              {plan.price}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                ml: 1,
                display: 'inline',
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
                  <Check
                    sx={{
                      color: theme.palette.primary.main,
                      fontSize: 20,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.95rem',
                      color: theme.palette.text.secondary,
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
              sx={{
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                background: plan.buttonVariant === 'contained'
                  ? theme.palette.gradient.primary
                  : 'transparent',
                borderColor: plan.buttonVariant === 'outlined'
                  ? theme.palette.primary.main
                  : 'transparent',
                '&:hover': {
                  background: plan.buttonVariant === 'contained'
                    ? theme.palette.gradient.secondary
                    : 'rgba(33, 150, 243, 0.05)',
                },
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
        py: { xs: 8, md: 12 },
        background: `linear-gradient(135deg, 
          rgba(33, 150, 243, 0.03) 0%, 
          rgba(255, 255, 255, 1) 50%, 
          rgba(233, 30, 99, 0.03) 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(33, 150, 243, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(233, 30, 99, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(33, 150, 243, 0.03) 0%, transparent 50%)
          `,
        }}
      />

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
                background: theme.palette.gradient.primary,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              Choose Your AI Journey
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Flexible pricing plans designed to grow with your business. 
              Start your AI transformation today.
            </Typography>
          </Box>
        </motion.div>

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
          }}
        >
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              delay={index * 0.1}
            />
          ))}
        </Box>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
              }}
            >
              All plans include 30-day money-back guarantee
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                fontStyle: 'italic',
              }}
            >
              Need a custom solution? Contact our team for enterprise pricing.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PricingSection;
