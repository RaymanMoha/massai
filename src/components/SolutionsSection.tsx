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
  Chip,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  AutoAwesome,
  TrendingUp,
  Speed,
  Security,
  IntegrationInstructions,
  Analytics,
  AutoFixHigh,
  Business,
  Psychology,
  Science,
  ExpandMore,
  CheckCircle,
  ArrowForward,
  Rocket,
  Timeline,
  Group,
} from '@mui/icons-material';

const SolutionsSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedAccordion, setExpandedAccordion] = useState<string | false>(false);

  const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedAccordion(isExpanded ? panel : false);
  };

  const coreServices = [
    {
      icon: <AutoAwesome />,
      title: 'AI Development & Integration',
      description: 'Custom AI solutions tailored for African businesses, including intelligent chatbots, automation tools, and seamless platform integrations.',
      features: ['Custom AI Chatbots', 'Process Automation', 'API Integrations', 'ML Model Development'],
      image: '/ai1.jpg',
    },
    {
      icon: <TrendingUp />,
      title: 'Lead Generation Automation',
      description: 'AI-powered lead qualification and nurturing systems that convert prospects into customers automatically.',
      features: ['Smart Lead Scoring', 'Automated Follow-ups', 'Conversion Optimization', 'Pipeline Management'],
      image: '/ai2.jpg',
    },
    {
      icon: <Business />,
      title: 'CRM & Workflow Automation',
      description: 'Streamline client relationships with intelligent CRM solutions that automate repetitive tasks and enhance productivity.',
      features: ['Contact Management', 'Sales Pipeline', 'Task Automation', 'Performance Analytics'],
      image: '/ai3.jpg',
    },
    {
      icon: <Analytics />,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics that drive informed decision-making.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Performance Metrics', 'Custom Reports'],
      image: '/ai4.jpg',
    },
  ];

  const automationSolutions = [
    {
      title: 'Marketing Automation',
      description: 'Automate your entire marketing funnel from lead capture to conversion',
      icon: <Rocket />,
      benefits: ['80% time saved on repetitive tasks', 'Triple your lead conversion rates', 'Personalized customer journeys'],
    },
    {
      title: 'Sales Process Optimization',
      description: 'Streamline your sales pipeline with intelligent automation',
      icon: <Timeline />,
      benefits: ['Faster deal closure', 'Automated lead qualification', 'Smart follow-up sequences'],
    },
    {
      title: 'Customer Success Automation',
      description: 'Enhance customer experience with proactive engagement systems',
      icon: <Group />,
      benefits: ['Improved retention rates', 'Automated onboarding', 'Predictive support'],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current processes, identify bottlenecks, and map optimization opportunities.',
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Custom AI automation solutions tailored to your specific business needs and goals.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Seamless integration with your existing systems and comprehensive team training.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, refinement, and scaling of your automated processes.',
    },
  ];

  const resultsMetrics = [
    { metric: '300%', label: 'Average ROI Increase' },
    { metric: '85%', label: 'Time Saved on Admin Tasks' },
    { metric: '250%', label: 'Lead Generation Boost' },
    { metric: '95%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <Box
      id="solutions"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#FFFFFF',
      }}
    >
      <Container maxWidth="xl">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 12 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                fontWeight: 700,
                color: '#000000',
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Optimize. Automate.{' '}
              <Box component="span" sx={{ color: '#00AEEF' }}>
                Elevate.
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#666666',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.6,
                mb: 6,
                fontWeight: 400,
              }}
            >
              Transform your business with AI-powered automation solutions that eliminate repetitive tasks, 
              accelerate growth, and amplify your impact across Africa.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                mb: 8,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  flexDirection: { xs: 'column', sm: 'row' },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: '#00AEEF',
                    color: 'white',
                    px: 4,
                    py: 2,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    '&:hover': {
                      background: '#0099D4',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                  endIcon={<ArrowForward />}
                >
                  Start Your Transformation
                </Button>
                <motion.img
                  src="/looney-arrow.gif"
                  alt="Transformation Arrow"
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  style={{
                    width: '70px',
                    height: '52px',
                    objectFit: 'contain',
                  }}
                />
              </Box>
              
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#00AEEF',
                  color: '#00AEEF',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  '&:hover': {
                    background: 'rgba(0, 174, 239, 0.05)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Case Studies
              </Button>
            </Box>

            {/* Results Metrics */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
                gap: 4,
                mt: 8,
              }}
            >
              {resultsMetrics.map((result, index) => (
                <motion.div
                  key={result.label}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 700,
                        color: '#00AEEF',
                        mb: 1,
                      }}
                    >
                      {result.metric}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666666',
                        fontWeight: 500,
                      }}
                    >
                      {result.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Core Services */}
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
                mb: 2,
              }}
            >
              Our Solutions
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#666666',
                textAlign: 'center',
                maxWidth: '600px',
                margin: '0 auto 64px',
                lineHeight: 1.6,
              }}
            >
              Comprehensive AI automation services designed to transform African businesses
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 4,
              }}
            >
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.title}
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
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.1)',
                        borderColor: '#00AEEF',
                      },
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={service.image}
                        alt={service.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          width: 56,
                          height: 56,
                          borderRadius: '12px',
                          background: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                          '& .MuiSvgIcon-root': {
                            fontSize: 28,
                            color: '#00AEEF',
                          },
                        }}
                      >
                        {service.icon}
                      </Box>
                    </Box>
                    
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: '#000000',
                        }}
                      >
                        {service.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#666666',
                          lineHeight: 1.6,
                          mb: 3,
                        }}
                      >
                        {service.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {service.features.map((feature) => (
                          <Chip
                            key={feature}
                            label={feature}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(0, 174, 239, 0.1)',
                              color: '#00AEEF',
                              border: '1px solid rgba(0, 174, 239, 0.2)',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Automation Solutions */}
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
              Say Goodbye to Manual Work
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
                gap: 4,
              }}
            >
              {automationSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      background: '#F8FAFC',
                      border: 'none',
                      borderRadius: '16px',
                      p: 3,
                      '&:hover': {
                        background: '#FFFFFF',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #00AEEF 0%, #0099D4 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        '& .MuiSvgIcon-root': {
                          fontSize: 32,
                          color: 'white',
                        },
                      }}
                    >
                      {solution.icon}
                    </Box>
                    
                    <Typography
                      variant="h5"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: '#000000',
                      }}
                    >
                      {solution.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666666',
                        lineHeight: 1.6,
                        mb: 3,
                      }}
                    >
                      {solution.description}
                    </Typography>

                    <Box>
                      {solution.benefits.map((benefit, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 1,
                          }}
                        >
                          <CheckCircle sx={{ fontSize: 20, color: '#00AEEF' }} />
                          <Typography
                            variant="body2"
                            sx={{ color: '#333333', fontWeight: 500 }}
                          >
                            {benefit}
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

        {/* Process Steps */}
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
              Our Proven Process
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                gap: 4,
              }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #00AEEF 0%, #0099D4 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                      }}
                    >
                      {step.step}
                    </Box>
                    
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                        color: '#000000',
                      }}
                    >
                      {step.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666666',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #00AEEF 0%, #0099D4 100%)',
              borderRadius: '20px',
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Ready to Transform Your Business?
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 6,
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto 48px',
                lineHeight: 1.6,
              }}
            >
              Join hundreds of African businesses that have automated their way to success. 
              Let's discuss how Mass.AI can revolutionize your operations.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: '#FFFFFF',
                  color: '#00AEEF',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  '&:hover': {
                    background: '#F8F9FA',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                endIcon={<ArrowForward />}
              >
                Schedule Free Consultation
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                View Our Portfolio
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SolutionsSection;
