import React from 'react';
import { Box } from '@mui/material';
import { Navbar, ImageGallery, Footer } from '../components';

const ImageShowcasePage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <ImageGallery />
      <Footer />
    </Box>
  );
};

export default ImageShowcasePage;
