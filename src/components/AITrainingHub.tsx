import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
  TextField,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Security,
  LocalHospital,
  FlightTakeoff,
  ElectricBolt,
  Search,
  Work,
  Psychology,
  Code,
  Analytics,
} from '@mui/icons-material';

const AITrainingHub: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchQuery, setSearchQuery] = useState('');

  const careerPaths = [
    {
      title: 'Data Scientists',
      description: 'Handle and process data, translating information and extracting meaningful insights for AI systems.',
      skills: ['Mathematics', 'Computer Science', 'Data Analysis', 'Programming Languages', 'Machine Learning', 'Statistical Modeling'],
      salary: '$100,560 USD',
      icon: <Analytics />,
      image: '/ai3.jpg',
    },
    {
      title: 'Machine Learning Engineer',
      description: 'Design and produce AI systems that automate predictive models and create learning algorithms.',
      skills: ['Mathematics', 'Statistics', 'Data Science', 'Programming Languages', 'ML Frameworks', 'Software Architecture'],
      salary: '$145,604 USD',
      icon: <Code />,
      image: '/ai4.jpg',
    },
    {
      title: 'AI & ML Architect',
      description: 'Create machine learning models and develop full-scale AI architecture solutions for clients.',
      skills: ['AI Architecture', 'Pipeline Planning', 'Data Management', 'Software Engineering', 'DevOps', 'Industry Knowledge'],
      salary: '$117,713 USD',
      icon: <Psychology />,
      image: '/ai5.jpg',
    },
    {
      title: 'Business Intelligence Developer',
      description: 'Analyze data sets, recognize trends, and serve as liaison between management and IT departments.',
      skills: ['Data Analysis', 'Business Analysis', 'Data Translation', 'Troubleshooting'],
      salary: '$100,361 USD',
      icon: <Work />,
      image: '/ai6.jpg',
    },
  ];

  const industryApplications = [
    {
      title: 'Healthcare/Life Sciences',
      description: 'AI assists practitioners in detecting medical issues, predicting treatments, and enabling precision medicine.',
      icon: <LocalHospital />,
      image: '/ai7.jpg',
      jobs: ['AI Health Developer', 'Bioinformatician', 'Medical AI Specialist'],
    },
    {
      title: 'Transportation/Aerospace',
      description: 'Autonomous vehicles, real-time decision making, and long-duration space travel capabilities.',
      icon: <FlightTakeoff />,
      image: '/ai8.jpg',
      jobs: ['ML Engineer (Autonomous Driving)', 'Security Engineer', 'Behavior Prediction Engineer'],
    },
    {
      title: 'Energy Sector',
      description: 'Power load forecasting, smart grid control, and renewable energy integration for climate impact.',
      icon: <ElectricBolt />,
      image: '/ai1.jpg',
      jobs: ['Renewable Energy Engineer', 'Smart Grid Specialist', 'Energy AI Analyst'],
    },
    {
      title: 'Cybersecurity',
      description: 'AI detects threats, responds to cyber attacks, and protects Industrial IoT systems.',
      icon: <Security />,
      image: '/ai2.jpg',
      jobs: ['Security Engineer', 'Information Security Analyst', 'AI Security Lead'],
    },
  ];

  const ethicsPoints = [
    'Accuracy and reliability in AI systems',
    'Explainability and interpretability of AI decisions',
    'Privacy protection and data security',
    'Bias mitigation and fairness',
    'Safety and resilience to attacks',
    'Human dignity and social responsibility',
  ];

  return (
    <Box
      id="training-hub"
      sx={{
        py: { xs: 10, md: 15 },
        background: '#FFFFFF',
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
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
            Solutions
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
            AI Training Hub
          </Typography>
        </motion.div>

        {/* Industry Applications */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 12 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 6,
                color: '#000000',
                fontWeight: 600,
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.3,
              }}
            >
              Transforming Industries Through Intelligence
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'repeat(2, 1fr)',
                },
                gap: { xs: 6, md: 8 },
              }}
            >
              {industryApplications.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ cursor: 'pointer' }}>
                    <Box
                      sx={{
                        height: 300,
                        overflow: 'hidden',
                        mb: 3,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          '& img': {
                            transform: 'scale(1.02)',
                          },
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={industry.image}
                        alt={industry.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </Box>
                    
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        fontWeight: 700,
                        color: '#000000',
                        fontSize: '1.5rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {industry.title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#666666',
                        lineHeight: 1.6,
                        fontSize: '1rem',
                      }}
                    >
                      {industry.description}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Career Paths */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: 12 }}>
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                color: '#000000',
                fontWeight: 600,
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.3,
              }}
            >
              AI Industry & Careers Forecast
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 8,
                color: '#666666',
                fontSize: '1.125rem',
                lineHeight: 1.6,
                maxWidth: '600px',
              }}
            >
              The global AI market is estimated to increase by 38.1% within the next decade. 
              Jobs in computer and information science are expected to increase 21% by 2031.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  lg: 'repeat(2, 1fr)',
                },
                gap: { xs: 6, lg: 8 },
              }}
            >
              {careerPaths.map((career, index) => (
                <motion.div
                  key={career.title}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ cursor: 'pointer' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                      <Box
                        sx={{
                          width: { xs: '100%', sm: '200px' },
                          height: { xs: '200px', sm: '150px' },
                          overflow: 'hidden',
                          flexShrink: 0,
                        }}
                      >
                        <Box
                          component="img"
                          src={career.image}
                          alt={career.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </Box>
                      
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            mb: 1,
                            fontWeight: 600,
                            color: '#000000',
                            fontSize: '1.25rem',
                          }}
                        >
                          {career.title}
                        </Typography>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 2,
                            color: '#FF6B00',
                            fontWeight: 500,
                            fontSize: '1rem',
                          }}
                        >
                          Average: {career.salary}
                        </Typography>
                        
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#666666',
                            lineHeight: 1.6,
                            fontSize: '0.9rem',
                          }}
                        >
                          {career.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'left', maxWidth: '600px' }}>
            <Typography
              variant="h3"
              sx={{
                mb: 4,
                fontWeight: 600,
                color: '#000000',
                fontSize: { xs: '1.75rem', md: '2rem' },
                lineHeight: 1.3,
              }}
            >
              Ready to Build Your AI Career?
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 6,
                color: '#666666',
                fontSize: '1.125rem',
                lineHeight: 1.6,
              }}
            >
              Join Mass.AI and scale African innovation through smarter automation. 
              Our work drives impact at the convergence of artificial intelligence, 
              technology and African innovation.
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                py: 2,
                px: 4,
                backgroundColor: '#000000',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#333333',
                },
              }}
            >
              Start Learning Today
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AITrainingHub;
