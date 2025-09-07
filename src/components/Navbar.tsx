import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'Who we are', id: 'features' },
    { label: 'Our work', id: 'vision' },
    { label: 'Solutions', id: 'training-hub' },
    { label: 'Our thinking', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', pr: 2, pb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText
              primary={item.label}
              onClick={() => scrollToSection(item.id)}
              sx={{
                textAlign: 'center',
                cursor: 'pointer',
                py: 2,
                fontSize: '1.125rem',
                fontWeight: 400,
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#FFFFFF',
          borderBottom: isScrolled ? '1px solid #E5E5E5' : 'none',
          transition: 'all 0.2s ease',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2, minHeight: '80px' }}>
            {/* Logo */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: '#000000',
                  fontSize: '2rem',
                  letterSpacing: '-0.02em',
                }}
              >
                mass.ai
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    sx={{
                      color: '#000000',
                      fontWeight: 400,
                      fontSize: '1rem',
                      textTransform: 'none',
                      padding: '8px 0',
                      minWidth: 'auto',
                      '&:hover': {
                        backgroundColor: 'transparent',
                        color: '#FF6B00',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: '#000000' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100vw',
            backgroundColor: '#FFFFFF',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
