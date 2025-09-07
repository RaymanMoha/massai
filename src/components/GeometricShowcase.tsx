import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  AutoAwesome,
  TrendingUp,
  Hub,
  Analytics,
  Speed,
  Assessment,
  Timeline,
  CheckCircle,
  ArrowForward,
  ContactMail,
  Phone,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const GeometricShowcase: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const statsData = [
    { value: '300%', label: 'Average ROI Increase', icon: TrendingUp },
    { value: '85%', label: 'Time Saved on Admin Tasks', icon: Speed },
    { value: '250%', label: 'Lead Generation Boost', icon: Assessment },
    { value: '95%', label: 'Client Satisfaction Rate', icon: CheckCircle },
  ];

  const solutionsData = [
    {
      title: 'AI Development & Integration',
      description: 'Custom AI solutions tailored for African businesses, including intelligent chatbots, automation tools, and seamless platform integrations.',
      features: ['Custom AI Chatbots', 'Process Automation', 'API Integrations', 'ML Model Development'],
      icon: AutoAwesome,
      color: '#00AEEF',
    },
    {
      title: 'Lead Generation Automation',
      description: 'AI-powered lead qualification and nurturing systems that convert prospects into customers automatically.',
      features: ['Smart Lead Scoring', 'Automated Follow-ups', 'Conversion Optimization', 'Pipeline Management'],
      icon: TrendingUp,
      color: '#FF6B35',
    },
    {
      title: 'CRM & Workflow Automation',
      description: 'Streamline client relationships with intelligent CRM solutions that automate repetitive tasks and enhance productivity.',
      features: ['Contact Management', 'Sales Pipeline', 'Task Automation', 'Performance Analytics'],
      icon: Hub,
      color: '#7B68EE',
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics that drive informed decision-making.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Performance Metrics', 'Custom Reports'],
      icon: Analytics,
      color: '#32CD32',
    },
  ];

  const automationData = [
    {
      title: 'Marketing Automation',
      description: 'Automate your entire marketing funnel from lead capture to conversion',
      stats: ['80% time saved on repetitive tasks', 'Triple your lead conversion rates', 'Personalized customer journeys'],
      color: '#00AEEF',
    },
    {
      title: 'Sales Process Optimization',
      description: 'Streamline your sales pipeline with intelligent automation',
      stats: ['Faster deal closure', 'Automated lead qualification', 'Smart follow-up sequences'],
      color: '#FF6B35',
    },
    {
      title: 'Customer Success Automation',
      description: 'Enhance customer experience with proactive engagement systems',
      stats: ['Improved retention rates', 'Automated onboarding', 'Predictive support'],
      color: '#7B68EE',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current processes, identify bottlenecks, and map optimization opportunities.',
    },
    {
      number: '02',
      title: 'Solution Design',
      description: 'Custom AI automation solutions tailored to your specific business needs and goals.',
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Seamless integration with your existing systems and comprehensive team training.',
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, refinement, and scaling of your automated processes.',
    },
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Hero Section with Geometric Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              py: { xs: 8, md: 12 },
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Geometric Header Accent */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 2, md: 6 },
                left: '50%',
                transform: 'translateX(-50%)',
                width: 120,
                height: 12,
                backgroundColor: '#00AEEF',
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 12px 100%)',
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                fontWeight: 900,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                mb: 4,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  bottom: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 200,
                  height: 6,
                  backgroundColor: '#000000',
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)',
                },
              }}
            >
              Optimize. Automate. Elevate.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: '#333333',
                maxWidth: '900px',
                mx: 'auto',
                fontWeight: 500,
                lineHeight: 1.4,
                mb: 6,
              }}
            >
              Transform your business with AI-powered automation solutions that eliminate repetitive tasks, 
              accelerate growth, and amplify your impact across Africa.
            </Typography>

            {/* Business Transformation GIF */}
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <img
                  src="/gif3.gif"
                  alt="Business automation in action"
                  style={{
                    width: '600px',
                    height: 'auto',
                    maxWidth: '100%',
                    display: 'block',
                  }}
                />
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* Stats Section with Geometric Layout */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: 4,
              mb: 12,
            }}
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    backgroundColor: '#ffffff',
                    border: '4px solid #000000',
                    borderRadius: 0,
                    p: 4,
                    textAlign: 'center',
                    position: 'relative',
                    height: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      bottom: -4,
                      left: -4,
                      backgroundColor: index % 2 === 0 ? '#00AEEF' : '#000000',
                      zIndex: -1,
                      transform: 'translate(8px, 8px)',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translate(-4px, -4px)',
                      '&::before': {
                        transform: 'translate(12px, 12px)',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-block',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      p: 2,
                      mb: 3,
                      alignSelf: 'center',
                      clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)',
                    }}
                  >
                    <stat.icon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 900,
                      color: '#00AEEF',
                      mb: 1,
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#333333',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      fontSize: '0.875rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        {/* AI Innovation Gallery */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 12 }}>
            <Box
              sx={{
                textAlign: 'center',
                mb: 8,
                position: 'relative',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  color: '#000000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  mb: 3,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 120,
                    height: 4,
                    backgroundColor: '#00AEEF',
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)',
                  },
                }}
              >
                AI Innovation Showcase
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#333333',
                  maxWidth: '700px',
                  mx: 'auto',
                  fontWeight: 500,
                }}
              >
                Cutting-edge artificial intelligence transforming business operations
              </Typography>
            </Box>

            {/* Featured AI Images Grid */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
                gap: 4,
                mb: 8,
              }}
            >
              {[
                { src: '/ai1.jpg', title: 'Neural Networks', subtitle: 'Deep Learning Systems' },
                { src: '/ai3.jpg', title: 'Data Processing', subtitle: 'Intelligent Analytics' },
                { src: '/ai4.jpg', title: 'Automation Hub', subtitle: 'Process Intelligence' },
                { src: '/ai5.jpg', title: 'AI Infrastructure', subtitle: 'Scalable Solutions' },
                { src: '/ai6.jpg', title: 'Machine Learning', subtitle: 'Predictive Models' },
                { src: '/ai7.jpg', title: 'Digital Innovation', subtitle: 'Future Technology' },
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      backgroundColor: '#ffffff',
                      border: '4px solid #000000',
                      borderRadius: 0,
                      overflow: 'hidden',
                      height: '350px',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        bottom: -4,
                        left: -4,
                        backgroundColor: index % 3 === 0 ? '#00AEEF' : index % 3 === 1 ? '#FF6B35' : '#7B68EE',
                        zIndex: -1,
                        transform: 'translate(8px, 8px)',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translate(-4px, -4px)',
                        '&::before': {
                          transform: 'translate(12px, 12px)',
                        },
                        '& img': {
                          transform: 'scale(1.05)',
                        },
                        '& .overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={image.src}
                      alt={image.title}
                      sx={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        filter: 'contrast(1.1) brightness(0.9)',
                      }}
                    />
                    
                    {/* Image Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 100,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 3,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: '#FFFFFF',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            mb: 1,
                          }}
                        >
                          {image.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#CCCCCC',
                            fontWeight: 500,
                          }}
                        >
                          {image.subtitle}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Content Box */}
                    <Box
                      sx={{
                        p: 3,
                        backgroundColor: '#ffffff',
                        height: '100px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 900,
                          color: '#000000',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                          mb: 1,
                        }}
                      >
                        {image.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666666',
                          fontWeight: 500,
                        }}
                      >
                        {image.subtitle}
                      </Typography>
                    </Box>

                    {/* Geometric accent */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 15,
                        right: 15,
                        width: 30,
                        height: 30,
                        backgroundColor: index % 3 === 0 ? '#00AEEF' : index % 3 === 1 ? '#FF6B35' : '#7B68EE',
                        clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
                      }}
                    />
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 12 }}>
            <Box
              sx={{
                textAlign: 'center',
                mb: 8,
                position: 'relative',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  color: '#000000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  mb: 3,
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 120,
                    height: 4,
                    backgroundColor: '#00AEEF',
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)',
                  },
                }}
              >
                Our Solutions
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#333333',
                  maxWidth: '700px',
                  mx: 'auto',
                  fontWeight: 500,
                }}
              >
                Comprehensive AI automation services designed to transform African businesses
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 6,
              }}
            >
              {solutionsData.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      border: '4px solid #000000',
                      borderRadius: 0,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        bottom: -4,
                        left: -4,
                        backgroundColor: solution.color,
                        zIndex: -1,
                        transform: 'translate(12px, 12px)',
                        opacity: 0.8,
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'translate(-6px, -6px)',
                        '&::before': {
                          transform: 'translate(18px, 18px)',
                        },
                      },
                    }}
                  >
                    {/* Background Image */}
                    <Box
                      component="img"
                      src={`/ai${index + 1}.jpg`}
                      alt={solution.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.1,
                        zIndex: 0,
                        filter: 'grayscale(100%)',
                      }}
                    />

                    <Box sx={{ p: 6, position: 'relative', zIndex: 1 }}>
                      {/* Header with Icon */}
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 3,
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: '#000000',
                            color: '#FFFFFF',
                            p: 2,
                            mr: 3,
                            clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
                          }}
                        >
                          <solution.icon sx={{ fontSize: 28 }} />
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 900,
                            color: '#000000',
                            textTransform: 'uppercase',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {solution.title}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#333333',
                          lineHeight: 1.6,
                          mb: 4,
                          fontWeight: 500,
                        }}
                      >
                        {solution.description}
                      </Typography>

                      {/* Features Grid */}
                      <Box
                        sx={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: 2,
                        }}
                      >
                        {solution.features.map((feature, featureIndex) => (
                          <Box
                            key={featureIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <Box
                              sx={{
                                width: 8,
                                height: 8,
                                backgroundColor: solution.color,
                                clipPath: 'polygon(0 0, calc(100% - 2px) 0, 100% 100%, 2px 100%)',
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#333333',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Automation Showcase */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 12 }}>
            <Box
              sx={{
                textAlign: 'center',
                mb: 8,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  color: '#000000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  mb: 3,
                }}
              >
                Say Goodbye to Manual Work
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, 1fr)' },
                gap: 6,
              }}
            >
              {automationData.map((automation, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      border: '3px solid #000000',
                      borderRadius: 0,
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 6,
                        backgroundColor: automation.color,
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)',
                      },
                    }}
                  >
                    {/* Featured Image Section */}
                    <Box
                      sx={{
                        position: 'relative',
                        height: '200px',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        component="img"
                        src={`/ai${index + 6}.jpg`}
                        alt={automation.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'contrast(1.1) brightness(0.9)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(45deg, ${automation.color}22 0%, transparent 50%)`,
                        }}
                      />

                      {/* Color Accent */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 15,
                          right: 15,
                          width: 40,
                          height: 40,
                          backgroundColor: automation.color,
                          clipPath: 'polygon(0 0, 100% 0, 100% 75%, 75% 100%, 0 100%)',
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 5 }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 900,
                          color: '#000000',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                          mb: 3,
                          fontSize: '1.5rem',
                        }}
                      >
                        {automation.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: '#333333',
                          lineHeight: 1.6,
                          mb: 4,
                          fontWeight: 500,
                        }}
                      >
                        {automation.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {automation.stats.map((stat, statIndex) => (
                          <Box
                            key={statIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 2,
                            }}
                          >
                            <Box
                              sx={{
                                width: 12,
                                height: 12,
                                backgroundColor: automation.color,
                                clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 100%, 3px 100%)',
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#333333',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                fontSize: '0.875rem',
                              }}
                            >
                              {stat}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 12 }}>
            <Box
              sx={{
                textAlign: 'center',
                mb: 8,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 900,
                  color: '#000000',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em',
                  mb: 3,
                }}
              >
                Our Proven Process
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 6,
              }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#ffffff',
                      border: '4px solid #000000',
                      borderRadius: 0,
                      p: 6,
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        bottom: -4,
                        left: -4,
                        backgroundColor: index % 2 === 0 ? '#00AEEF' : '#FF6B35',
                        zIndex: -1,
                        transform: 'translate(10px, 10px)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: '#000000',
                          color: '#FFFFFF',
                          p: 2,
                          mr: 3,
                          minWidth: 60,
                          textAlign: 'center',
                          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)',
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 900,
                            fontSize: '1.5rem',
                          }}
                        >
                          {step.number}
                        </Typography>
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 900,
                          color: '#000000',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {step.title}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: '#333333',
                        lineHeight: 1.6,
                        fontWeight: 500,
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
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              px: 6,
              background: '#ffffff',
              border: '6px solid #000000',
              borderRadius: 0,
              position: 'relative',
              mb: 8,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -6,
                right: -6,
                bottom: -6,
                left: -6,
                backgroundColor: '#000000',
                zIndex: -1,
                transform: 'translate(16px, 16px)',
              },
            }}
          >
            {/* Business Transformation GIF */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src="/gif1.gif"
                  alt="AI technology transformation"
                  style={{
                    width: '480px',
                    height: 'auto',
                    maxWidth: '100%',
                    display: 'block',
                  }}
                />
              </motion.div>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 900,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                mb: 6,
              }}
            >
              Ready to Transform Your Business?
            </Typography>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  py: 3,
                  px: 8,
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderRadius: 0,
                  backgroundColor: '#00AEEF',
                  color: '#FFFFFF',
                  border: '4px solid #00AEEF',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    backgroundColor: '#000000',
                    borderColor: '#000000',
                    transform: 'translate(-6px, -6px)',
                    boxShadow: '6px 6px 0px #00AEEF',
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
                Start Your Transformation
              </Button>
            </motion.div>
          </Box>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              border: '4px solid #000000',
              borderRadius: 0,
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              position: 'relative',
              mt: 8,
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
              },
            }}
          >
            {/* Growth GIF */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img
                  src="/growth.gif"
                  alt="Business growth and success"
                  style={{
                    width: '450px',
                    height: 'auto',
                    maxWidth: '100%',
                    display: 'block',
                  }}
                />
              </motion.div>
            </Box>

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
              Ready to Accelerate Your Growth?
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                mb: 6,
                color: '#333333',
                maxWidth: '700px',
                margin: '0 auto 48px',
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Join hundreds of African businesses already transforming their operations with AI. 
              Get your free consultation and discover how Mass.AI can drive your success.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ContactMail />}
                  onClick={() => navigate('/contact')}
                  sx={{
                    background: '#000000',
                    color: '#FFFFFF',
                    px: 6,
                    py: 3,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    borderRadius: 0,
                    border: '3px solid #000000',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      background: '#00AEEF',
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
                  Get Free Consultation
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Phone />}
                  sx={{
                    color: '#000000',
                    borderColor: '#000000',
                    px: 6,
                    py: 3,
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    borderRadius: 0,
                    border: '3px solid #000000',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    '&:hover': {
                      background: '#000000',
                      borderColor: '#000000',
                      color: '#FFFFFF',
                      transform: 'translate(-2px, -2px)',
                      boxShadow: '2px 2px 0px #00AEEF',
                    },
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  Schedule Call
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default GeometricShowcase;
