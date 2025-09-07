import React from 'react';
import { Box } from '@mui/material';
import {
  Navbar,
  HeroSection,
  FeaturesSection,
  VisionSection,
  ImageGallery,
  AITrainingHub,
  PricingSection,
  Footer,
} from '../components';

const LandingPage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <VisionSection />
      <ImageGallery />
      <AITrainingHub />
      <PricingSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;
