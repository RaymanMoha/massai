import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const VisionSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="vision"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="xl">
        {/* Our client promise: Innovating to Impact section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 400,
              lineHeight: 1.2,
              color: '#000000',
              mb: 4,
              maxWidth: '800px',
            }}
          >
            Our client promise: Innovating to Impact
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Typography
            className="body-large"
            sx={{
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#666666',
              mb: 4,
              maxWidth: '600px',
            }}
          >
            Mass.AI increases the potential for innovation to happen, creating experiences
            that can enrich every business. See what our global team of innovators and
            integrators can do for you.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outlined"
            sx={{
              fontSize: '1rem',
              fontWeight: 500,
              py: 2,
              px: 4,
              borderColor: '#000000',
              color: '#000000',
              borderRadius: 0,
              textTransform: 'none',
              borderWidth: '2px',
              mb: 6,
              '&:hover': {
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderWidth: '2px',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Find out more →
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#666666',
              mb: 8,
              maxWidth: '800px',
            }}
          >
            Our work drives impact at the convergence of artificial intelligence, technology and
            African consulting.
          </Typography>
        </motion.div>

        {/* Work Examples Section - Dentsu Style */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 4,
            mb: 8,
          }}
        >
          {[
            'MASS.AI CREATIVE Kenya: KFC Re:Store',
            'More Than That with Gia Peppers', 
            'The Everything Book',
            'Foot Locker'
          ].map((project, index) => (
            <motion.div
              key={project}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    '& .project-title': {
                      textDecoration: 'underline',
                    },
                  },
                }}
              >
                <Typography
                  className="project-title"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: '#000000',
                    lineHeight: 1.4,
                    transition: 'text-decoration 0.2s ease',
                  }}
                >
                  {project}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outlined"
            sx={{
              fontSize: '1rem',
              fontWeight: 500,
              py: 2,
              px: 4,
              borderColor: '#000000',
              color: '#000000',
              borderRadius: 0,
              textTransform: 'none',
              borderWidth: '2px',
              '&:hover': {
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderWidth: '2px',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Discover more of our work →
          </Button>
        </motion.div>

        {/* Insights Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#666666',
              mt: 8,
              maxWidth: '600px',
            }}
          >
            Get the latest insights from across Mass.AI:
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default VisionSection;
