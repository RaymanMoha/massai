import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { dentsuTheme } from './theme/dentsuTheme';
import LandingPage from './pages/LandingPage';
import ShowcasePage from './pages/ShowcasePage';
import ImageShowcasePage from './pages/ImageShowcasePage';
import ContactForm from './pages/ContactForm';
import { preloadImages, CRITICAL_IMAGES, observeImagePerformance } from './utils/imageOptimization';

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    observeImagePerformance();
    
    // Preload critical images
    preloadImages(CRITICAL_IMAGES).then(() => {
      console.log('Critical images preloaded');
    });
  }, []);

  return (
    <ThemeProvider theme={dentsuTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/gallery" element={<ImageShowcasePage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
