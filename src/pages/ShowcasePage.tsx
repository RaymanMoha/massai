import React from 'react';
import { Box } from '@mui/material';
import {
  Navbar,
  HeroSection,
  GeometricShowcase,
  Footer,
} from '../components';

const ShowcasePage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <GeometricShowcase />
      <Footer />
    </Box>
  );
};

export default ShowcasePage;
