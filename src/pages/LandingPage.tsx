import React from 'react';
import { Box } from '@mui/material';
import {
  Navbar,
  HeroSection,
  GeometricShowcase,
  PricingSection,
  Footer,
} from '../components';

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <GeometricShowcase />
      <PricingSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
