import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Tab,
  Tabs,
  Avatar,
  Rating,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  Speed,
  AutoAwesome,
  BusinessCenter,
  ContactPhone,
  Email,
  Assessment,
  Hub,
  Timer,
  MonetizationOn,
  People,
  Analytics,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`automation-tabpanel-${index}`}
      aria-labelledby={`automation-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const BusinessAutomation: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const automationWorkflows = [
    {
      title: 'Lead Generation & Qualification',
      description: 'Automatically capture, score, and qualify leads from multiple channels',
      features: [
        'Multi-channel lead capture (website, social media, email)',
        'AI-powered lead scoring and qualification',
        'Automated lead nurturing sequences',
        'Real-time lead notifications and routing',
      ],
      metrics: { conversion: '340%', time: '75%', leads: '250%' },
      image: '/ai5.jpg',
    },
    {
      title: 'Sales Pipeline Automation',
      description: 'Streamline your entire sales process from prospect to customer',
      features: [
        'Automated follow-up sequences based on behavior',
        'Smart deal progression and stage management',
        'Personalized proposal generation',
        'Contract automation and e-signature integration',
      ],
      metrics: { closure: '2x faster', accuracy: '95%', revenue: '180%' },
      image: '/ai6.jpg',
    },
    {
      title: 'Customer Success & Retention',
      description: 'Proactive customer engagement and retention automation',
      features: [
        'Automated onboarding workflows',
        'Proactive support ticket creation',
        'Customer health scoring and alerts',
        'Renewal and upselling automation',
      ],
      metrics: { retention: '85%', satisfaction: '92%', upsell: '150%' },
      image: '/ai7.jpg',
    },
  ];

  const industryUseCases = [
    {
      industry: 'E-commerce',
      icon: <BusinessCenter />,
      automations: [
        'Abandoned cart recovery sequences',
        'Product recommendation engines',
        'Inventory management alerts',
        'Customer segmentation and targeting',
      ],
      result: '3x conversion rate increase',
    },
    {
      industry: 'Professional Services',
      icon: <People />,
      automations: [
        'Client onboarding automation',
        'Project milestone tracking',
        'Invoice and payment processing',
        'Resource allocation optimization',
      ],
      result: '60% reduction in admin time',
    },
    {
      industry: 'Healthcare',
      icon: <Assessment />,
      automations: [
        'Patient appointment scheduling',
        'Prescription refill reminders',
        'Insurance verification workflows',
        'Treatment follow-up sequences',
      ],
      result: '40% improvement in patient care',
    },
    {
      industry: 'Financial Services',
      icon: <MonetizationOn />,
      automations: [
        'Loan application processing',
        'Risk assessment automation',
        'Compliance monitoring',
        'Customer KYC workflows',
      ],
      result: '70% faster processing time',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mwangi',
      role: 'CEO, TechStart Kenya',
      company: 'Nairobi-based fintech startup',
      rating: 5,
      testimonial: 'Mass.AI transformed our lead generation process. We went from manually processing 50 leads per week to automatically qualifying 500+ leads daily.',
      avatar: '/api/placeholder/60/60',
    },
    {
      name: 'David Ochieng',
      role: 'Operations Director',
      company: 'Lagos e-commerce platform',
      rating: 5,
      testimonial: 'The automation workflows saved us 40 hours per week on repetitive tasks. Our team can now focus on strategic growth initiatives.',
      avatar: '/api/placeholder/60/60',
    },
    {
      name: 'Amina Hassan',
      role: 'Marketing Manager',
      company: 'Kampala digital agency',
      rating: 5,
      testimonial: 'ROI increased by 300% within 3 months. The AI-powered lead scoring helped us focus on high-value prospects.',
      avatar: '/api/placeholder/60/60',
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        'Up to 1,000 automated actions/month',
        'Basic CRM integration',
        'Email automation sequences',
        '24/7 support',
        'Standard reporting',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses scaling their operations',
      features: [
        'Up to 10,000 automated actions/month',
        'Advanced CRM & tool integrations',
        'Multi-channel automation',
        'AI-powered lead scoring',
        'Advanced analytics & reporting',
        'Custom workflow builder',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited automated actions',
        'Custom AI model development',
        'White-label solutions',
        'Dedicated success manager',
        'Advanced security & compliance',
        'Priority support & training',
      ],
      recommended: false,
    },
  ];

  return (
    <Box
      id="business-automation"
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
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: { xs: 8, md: 12 },
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
                width: 120,
                height: 8,
                backgroundColor: '#00AEEF',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
                mb: 4,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                color: '#000000',
                mb: 3,
                lineHeight: 1.1,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 100,
                  height: 4,
                  backgroundColor: '#000000',
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)',
                },
              }}
            >
              Stop Losing Leads to{' '}
              <Box component="span" sx={{ color: '#00AEEF' }}>
                Slow Follow-ups
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#333333',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: 1.6,
                mb: 6,
                fontWeight: 500,
              }}
            >
              Transform prospects into customers with AI-powered automation that works 24/7. 
              Capture, qualify, and convert leads while you sleep.
            </Typography>

            {/* Growth Animation */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 4,
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="/growth.gif"
                  alt="Business Growth with AI"
                  sx={{
                    width: { xs: '200px', md: '250px' },
                    height: { xs: '150px', md: '180px' },
                    objectFit: 'contain',
                    borderRadius: '12px',
                  }}
                />
              </motion.div>
            </Box>

            <Box
              sx={{
                background: '#FFFFFF',
                borderRadius: '12px',
                p: 4,
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, color: '#000000' }}>
                Get Your Free Automation Audit
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '1fr auto' },
                  gap: 2,
                }}
              >
                <Box
                  component="input"
                  placeholder="Enter your business email"
                  sx={{
                    p: 2,
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    outline: 'none',
                    '&:focus': {
                      borderColor: '#00AEEF',
                    },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    background: '#00AEEF',
                    px: 4,
                    py: 2,
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    '&:hover': {
                      background: '#0099D4',
                    },
                  }}
                >
                  Get Free Audit
                </Button>
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* Workflow Tabs */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#000000',
                textAlign: 'center',
                mb: 6,
              }}
            >
              Automation Workflows That Drive Results
            </Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant={isMobile ? 'scrollable' : 'fullWidth'}
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    color: '#666666',
                    '&.Mui-selected': {
                      color: '#00AEEF',
                    },
                  },
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#00AEEF',
                  },
                }}
              >
                {automationWorkflows.map((workflow, index) => (
                  <Tab key={index} label={workflow.title} />
                ))}
              </Tabs>
            </Box>

            {automationWorkflows.map((workflow, index) => (
              <TabPanel key={index} value={tabValue} index={index}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
                    gap: 6,
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 3,
                        fontWeight: 600,
                        color: '#000000',
                      }}
                    >
                      {workflow.title}
                    </Typography>
                    
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 4,
                        color: '#666666',
                        lineHeight: 1.6,
                      }}
                    >
                      {workflow.description}
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      {workflow.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: '#00AEEF',
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{ color: '#333333', fontWeight: 500 }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                        gap: 3,
                        mt: 4,
                      }}
                    >
                      {Object.entries(workflow.metrics).map(([key, value]) => (
                        <Box key={key} sx={{ textAlign: 'center' }}>
                          <Typography
                            variant="h3"
                            sx={{
                              fontSize: '2rem',
                              fontWeight: 700,
                              color: '#00AEEF',
                              mb: 1,
                            }}
                          >
                            {value}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#666666',
                              textTransform: 'capitalize',
                            }}
                          >
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Box
                      component="img"
                      src={workflow.image}
                      alt={workflow.title}
                      sx={{
                        width: '100%',
                        height: '400px',
                        objectFit: 'cover',
                        borderRadius: '16px',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                  </Box>
                </Box>
              </TabPanel>
            ))}
          </Box>
        </motion.div>

        {/* Industry Use Cases */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#000000',
                textAlign: 'center',
                mb: 8,
              }}
            >
              Industry-Specific Solutions
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {industryUseCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      p: 4,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        borderColor: '#00AEEF',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 3,
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #00AEEF 0%, #0099D4 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          '& .MuiSvgIcon-root': {
                            fontSize: 32,
                            color: 'white',
                          },
                        }}
                      >
                        {useCase.icon}
                      </Box>
                      
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: '#000000',
                            mb: 1,
                          }}
                        >
                          {useCase.industry}
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#00AEEF',
                            fontWeight: 600,
                          }}
                        >
                          {useCase.result}
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      {useCase.automations.map((automation, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: '#00AEEF',
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{ color: '#333333' }}
                          >
                            {automation}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#000000',
                textAlign: 'center',
                mb: 8,
              }}
            >
              Success Stories from African Businesses
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: '#FFFFFF',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      p: 4,
                    }}
                  >
                    <Box sx={{ mb: 3 }}>
                      <Rating value={testimonial.rating} readOnly />
                    </Box>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333333',
                        lineHeight: 1.6,
                        mb: 4,
                        fontStyle: 'italic',
                      }}
                    >
                      "{testimonial.testimonial}"
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 50, height: 50 }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#000000',
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: '#666666' }}
                        >
                          {testimonial.role}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: '#00AEEF', fontWeight: 500 }}
                        >
                          {testimonial.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: '#000000',
                textAlign: 'center',
                mb: 8,
              }}
            >
              Choose Your Automation Plan
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: plan.recommended ? '#00AEEF' : '#FFFFFF',
                      color: plan.recommended ? 'white' : '#000000',
                      border: plan.recommended ? 'none' : '1px solid #E5E7EB',
                      borderRadius: '12px',
                      p: 4,
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {plan.recommended && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -12,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: '#FFFFFF',
                          color: '#00AEEF',
                          px: 3,
                          py: 1,
                          borderRadius: '20px',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                        }}
                      >
                        RECOMMENDED
                      </Box>
                    )}

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: plan.recommended ? 'white' : '#000000',
                      }}
                    >
                      {plan.name}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h2"
                        component="span"
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 700,
                          color: plan.recommended ? 'white' : '#000000',
                        }}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{
                          color: plan.recommended ? 'rgba(255,255,255,0.8)' : '#666666',
                        }}
                      >
                        {plan.period}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        color: plan.recommended ? 'rgba(255,255,255,0.9)' : '#666666',
                        lineHeight: 1.6,
                      }}
                    >
                      {plan.description}
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      {plan.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: plan.recommended ? 'white' : '#00AEEF',
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color: plan.recommended ? 'white' : '#333333',
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                      }}
                    >
                      <Button
                        variant={plan.recommended ? 'contained' : 'outlined'}
                        fullWidth
                        size="large"
                        onClick={() => navigate('/contact')}
                        sx={{
                          background: plan.recommended ? '#FFFFFF' : 'transparent',
                          color: plan.recommended ? '#00AEEF' : '#00AEEF',
                          borderColor: plan.recommended ? 'transparent' : '#00AEEF',
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 600,
                          borderRadius: '8px',
                          '&:hover': {
                            background: plan.recommended ? '#F8F9FA' : 'rgba(0, 174, 239, 0.05)',
                          },
                        }}
                      >
                        Get Started
                      </Button>
                      <motion.img
                        src="/looney-arrow.gif"
                        alt="Action Arrow"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        style={{
                          width: '60px',
                          height: '45px',
                          objectFit: 'contain',
                        }}
                      />
                    </Box>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: '#ffffff',
              border: '4px solid #000000',
              borderRadius: 0,
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -4,
                right: -4,
                bottom: -4,
                left: -4,
                backgroundColor: '#000000',
                zIndex: -1,
                transform: 'translate(12px, 12px)',
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 900,
                mb: 3,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Stop Losing Money to Manual Processes
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 6,
                color: '#333333',
                maxWidth: '600px',
                margin: '0 auto 48px',
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Every day you wait is revenue lost. Get your free automation audit and discover 
              how much time and money you could be saving.
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
                    background: '#00AEEF',
                    color: '#FFFFFF',
                    px: 6,
                    py: 3,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    borderRadius: 0,
                    border: '3px solid #00AEEF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      background: '#000000',
                      borderColor: '#000000',
                      transform: 'translate(-4px, -4px)',
                      boxShadow: '4px 4px 0px #00AEEF',
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
                  Get Your Free Audit Now
                </Button>
              </motion.div>
              <motion.img
                src="/looney-arrow.gif"
                alt="Action Arrow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.7 }}
                style={{
                  width: '100px',
                  height: '75px',
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

export default BusinessAutomation;
