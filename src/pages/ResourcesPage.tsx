import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  People,
  Security,
  Business,
  School,
  Code,
  Analytics,
  Psychology,
  Engineering,
  AutoAwesome,
} from '@mui/icons-material';

const ResourcesPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          py: { xs: 12, md: 16 },
          background: `linear-gradient(135deg, 
            rgba(33, 150, 243, 0.05) 0%, 
            rgba(255, 255, 255, 0.95) 35%, 
            rgba(233, 30, 99, 0.05) 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                mb: 3,
                background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900,
              }}
            >
              AI Resources Hub
            </Typography>
            
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                color: theme.palette.text.primary,
                mb: 4,
                fontWeight: 600,
              }}
            >
              Artificial Intelligence Resources for Africa
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: 1.7,
                mb: 6,
              }}
            >
              Just like Human Resources manages people, <strong>Mass.AI AIR</strong> manages your artificial intelligence assets. 
              Get comprehensive insights into AI careers, industry trends, and opportunities specifically tailored for the African market.
            </Typography>

            <Box sx={{ textAlign: 'center' }}>
              <Chip 
                label="Mass.AI - Scaling African Innovation Through Smarter Automation"
                sx={{ 
                  background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                  color: 'white',
                  fontWeight: 600,
                  px: 2,
                  py: 0.5,
                }}
              />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Evolution of AI Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 6,
                background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
              }}
            >
              The Evolution of AI in Africa
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, mb: 8 }}>
              <Box sx={{ flex: 1 }}>
                <Box
                  component="img"
                  src="/ai1.jpg"
                  alt="AI Evolution in Africa"
                  sx={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.1) brightness(1.05)',
                  }}
                />
              </Box>
              
              <Box sx={{ flex: 1 }}>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Originally coined in the 1950s, artificial intelligence has evolved dramatically. In Africa, AI represents 
                  unprecedented opportunities for <strong>leapfrog innovation</strong>. Mass.AI recognizes that AI isn't just 
                  about technology—it's about <strong>scaling African innovation through smarter automation</strong>.
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  From Kenya's M-Pesa revolution to Nigeria's fintech boom, Africa has always been at the forefront of 
                  technological adoption. Now, with AI, we're positioned to solve uniquely African challenges while 
                  contributing to global innovation.
                </Typography>
                
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                  <strong>Mass.AI AIR</strong> (Artificial Intelligence Resources) manages AI talent, tools, and transformation 
                  just like HR manages human capital—ensuring African businesses can harness AI's power responsibly and effectively.
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Where is AI Headed Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'rgba(248, 250, 252, 0.5)' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            Where is AI Headed in Africa?
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 4,
              mb: 8,
            }}
          >
            {[
              {
                title: 'Healthcare & Life Sciences',
                image: '/ai3.jpg',
                icon: <Psychology />,
                description: 'AI-powered diagnostic tools, telemedicine platforms, and precision medicine are revolutionizing healthcare delivery across Africa, making quality healthcare accessible in remote areas.',
              },
              {
                title: 'Agriculture & Food Security',
                image: '/ai4.jpg',
                icon: <AutoAwesome />,
                description: 'Smart farming solutions, crop monitoring via satellite imagery, and AI-driven supply chain optimization are addressing food security challenges across the continent.',
              },
              {
                title: 'Financial Services',
                image: '/ai6.jpg',
                icon: <Business />,
                description: 'AI-powered credit scoring, fraud detection, and mobile banking solutions are expanding financial inclusion and creating new economic opportunities.',
              },
              {
                title: 'Energy & Infrastructure',
                image: '/ai7.jpg',
                icon: <Engineering />,
                description: 'Smart grid management, renewable energy optimization, and predictive maintenance are building sustainable infrastructure for Africa\'s growing population.',
              },
            ].map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    },
                    transition: 'all 0.3s ease-in-out',
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
                      src={sector.image}
                      alt={sector.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        imageRendering: 'crisp-edges',
                        filter: 'contrast(1.1) brightness(1.05)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, 
                          rgba(33, 150, 243, 0.3) 0%, 
                          rgba(233, 30, 99, 0.2) 100%)`,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                      }}
                    >
                      {React.cloneElement(sector.icon, { sx: { fontSize: 40 } })}
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                      {sector.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                      {sector.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* AI Careers in Africa Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
            }}
          >
            AI Careers & Opportunities in Africa
          </Typography>

          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
              The African AI job market is projected to grow by <strong>45% annually</strong> through 2030. 
              Mass.AI AIR helps you navigate these opportunities and build the skills needed for success.
            </Typography>

            {/* Success Animation */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                component="img"
                src="/dazzle-success.gif"
                alt="AI Career Success"
                sx={{
                  width: { xs: '180px', md: '220px' },
                  height: { xs: '140px', md: '170px' },
                  objectFit: 'contain',
                  mx: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                }}
              />
            </motion.div>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 4,
            }}
          >
            {[
              {
                title: 'AI Solutions Architect',
                icon: <Code />,
                salary: 'KES 2.5M - 4.5M',
                skills: ['Python/R', 'Cloud Platforms', 'ML Frameworks', 'System Design'],
                description: 'Design end-to-end AI solutions for African businesses, focusing on scalable and cost-effective implementations.',
              },
              {
                title: 'Data Scientist (Africa Focus)',
                icon: <Analytics />,
                salary: 'KES 1.8M - 3.2M',
                skills: ['Statistics', 'Machine Learning', 'Data Visualization', 'Domain Knowledge'],
                description: 'Extract insights from African datasets, understanding local context and cultural nuances.',
              },
              {
                title: 'AI Ethics & Governance Lead',
                icon: <Security />,
                salary: 'KES 2.0M - 3.8M',
                skills: ['Ethics Frameworks', 'Policy Development', 'Risk Assessment', 'Stakeholder Management'],
                description: 'Ensure responsible AI deployment across African markets, addressing unique cultural and regulatory considerations.',
              },
              {
                title: 'Machine Learning Engineer',
                icon: <Engineering />,
                salary: 'KES 2.2M - 4.0M',
                skills: ['MLOps', 'Model Deployment', 'Software Engineering', 'Performance Optimization'],
                description: 'Build and deploy ML models optimized for African infrastructure and connectivity constraints.',
              },
              {
                title: 'AI Training Specialist',
                icon: <School />,
                salary: 'KES 1.5M - 2.8M',
                skills: ['Curriculum Development', 'Adult Learning', 'Technical Communication', 'Project Management'],
                description: 'Develop and deliver AI training programs for African organizations and professionals.',
              },
              {
                title: 'AI Product Manager',
                icon: <Business />,
                salary: 'KES 2.8M - 5.0M',
                skills: ['Product Strategy', 'Market Research', 'Agile Methodologies', 'Stakeholder Management'],
                description: 'Lead AI product development with deep understanding of African market needs and constraints.',
              },
            ].map((career, index) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: '20px',
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                        }}
                      >
                        {React.cloneElement(career.icon, { sx: { color: 'white', fontSize: 24 } })}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {career.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                          {career.salary}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
                      {career.description}
                    </Typography>
                    
                    <Divider sx={{ mb: 2 }} />
                    
                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                      Key Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {career.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(33, 150, 243, 0.1)',
                            color: theme.palette.primary.main,
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
        </Container>
      </Box>

      {/* Ethics in AI Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'rgba(248, 250, 252, 0.5)' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6, alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                }}
              >
                Ethics in AI for Africa
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                As AI transforms African societies, <strong>Mass.AI</strong> is committed to ensuring ethical AI development 
                that respects African values, promotes inclusion, and addresses historical inequities.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Our approach to AI ethics considers unique African contexts: linguistic diversity, cultural values, 
                economic disparities, and the need for technology that serves all communities.
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Learn More About AI Ethics
                </Button>
              </Box>
            </Box>
            
            <Box sx={{ flex: 1 }}>
              <Box
                component="img"
                src="/ai5.jpg"
                alt="AI Ethics in Africa"
                sx={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  imageRendering: 'crisp-edges',
                  filter: 'contrast(1.1) brightness(1.05)',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" sx={{ mb: 4, fontWeight: 700 }}>
              Ready to Scale Your AI Journey?
            </Typography>
            
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.9, lineHeight: 1.7 }}>
              Join Mass.AI's community of African innovators and access the tools, training, and opportunities 
              you need to succeed in the AI revolution.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Explore AI Careers
              </Button>
              
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.primary.main,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                Get Started Today
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default ResourcesPage;
