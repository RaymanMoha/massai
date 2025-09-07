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
  Badge,
  useMediaQuery,
  useTheme,
  Divider,
  Avatar,
  Link,
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Photo as PhotoIcon,
  Business as BusinessIcon,
  Psychology as PsychologyIcon,
  ArrowForward,
  Launch,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      label: 'About Mass.AI', 
      id: 'features', 
      type: 'scroll',
      icon: HomeIcon,
      description: 'Learn about our AI solutions'
    },
    { 
      label: 'Our Work', 
      id: 'vision', 
      type: 'scroll',
      icon: WorkIcon,
      description: 'Explore our projects'
    },
    { 
      label: 'Gallery', 
      id: '/gallery', 
      type: 'navigate',
      icon: PhotoIcon,
      description: 'AI innovation showcase',
      badge: 'New'
    },
    { 
      label: 'Solutions', 
      id: 'training-hub', 
      type: 'scroll',
      icon: BusinessIcon,
      description: 'Business automation'
    },
    { 
      label: 'Insights', 
      id: 'pricing', 
      type: 'scroll',
      icon: PsychologyIcon,
      description: 'AI thought leadership'
    },
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

  const handleNavigation = (item: any) => {
    if (item.type === 'navigate') {
      navigate(item.id);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => scrollToSection(item.id), 100);
      } else {
        scrollToSection(item.id);
      }
    }
    setMobileOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
        position: 'relative',
      }}
    >
      {/* Header */}
      <Box sx={{ 
        position: 'relative', 
        zIndex: 2,
        p: 3,
        borderBottom: '3px solid #000000',
        backgroundColor: '#ffffff',
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src="/massai-logo.svg"
              alt="Mass.AI Logo"
              sx={{ 
                width: 40, 
                height: 40, 
                mr: 2,
                objectFit: 'contain',
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Mass.AI
            </Typography>
          </Box>
          <IconButton 
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#00AEEF',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Navigation */}
      <Box sx={{ position: 'relative', zIndex: 2, p: 2 }}>
        <List sx={{ p: 0 }}>
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ListItem 
                disablePadding
                sx={{ mb: 1 }}
              >
                <Box
                  onClick={() => handleNavigation(item)}
                  sx={{
                    width: '100%',
                    p: 3,
                    backgroundColor: '#ffffff',
                    border: '2px solid #000000',
                    borderRadius: 0,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      right: -2,
                      bottom: -2,
                      left: -2,
                      backgroundColor: '#00AEEF',
                      zIndex: -1,
                      transform: 'translate(4px, 4px)',
                      transition: 'transform 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'translate(-2px, -2px)',
                      '&::before': {
                        transform: 'translate(6px, 6px)',
                      },
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: '#000000',
                        color: '#FFFFFF',
                        p: 1.5,
                        clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <item.icon sx={{ fontSize: 20 }} />
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 700,
                            color: '#000000',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontSize: '0.95rem',
                          }}
                        >
                          {item.label}
                        </Typography>
                        {item.badge && (
                          <Badge
                            badgeContent={item.badge}
                            sx={{
                              '& .MuiBadge-badge': {
                                backgroundColor: '#FF6B35',
                                color: '#FFFFFF',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                px: 1,
                                borderRadius: 0,
                              },
                            }}
                          />
                        )}
                        {item.type === 'navigate' && (
                          <Launch sx={{ fontSize: 16, color: '#666666' }} />
                        )}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666666',
                          fontSize: '0.8rem',
                          mt: 0.5,
                          fontWeight: 500,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </ListItem>
            </motion.div>
          ))}
        </List>

        <Divider sx={{ my: 3, borderColor: '#000000', borderWidth: 1 }} />
        
        {/* CTA Section */}
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            endIcon={<ArrowForward />}
            onClick={() => navigate('/contact')}
            sx={{
              py: 2,
              backgroundColor: '#000000',
              color: '#FFFFFF',
              borderRadius: 0,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              border: '2px solid #000000',
              '&:hover': {
                backgroundColor: '#00AEEF',
                borderColor: '#00AEEF',
                transform: 'translate(-2px, -2px)',
                boxShadow: '2px 2px 0px #000000',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Global Navigation Bar - Like Dentsu */}
      <Box
        sx={{
          backgroundColor: '#f5f5f5',
          borderBottom: '1px solid #e0e0e0',
          py: 1,
          fontSize: '0.875rem',
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontSize: '0.875rem', color: '#666666' }}>
              Global (English)
            </Typography>
            <Typography sx={{ fontSize: '0.875rem', color: '#666666' }}>
              Mass.AI Group ( <Link href="#" sx={{ color: '#000000', textDecoration: 'none' }}>English</Link> | <Link href="#" sx={{ color: '#000000', textDecoration: 'none' }}>Kiswahili</Link> )
            </Typography>
          </Box>
        </Container>
      </Box>

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: isScrolled ? '#FFFFFF' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: isScrolled ? 'none' : 'blur(10px)',
          borderBottom: isScrolled ? '3px solid #000000' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 2, minHeight: '80px' }}>
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <Box
                  component="img"
                  src="/MaSS.Ai.png"
                  alt="Mass.AI Logo"
                  sx={{ 
                    width: 65, 
                    height: 65, 
                    mr: 2,
                    objectFit: 'contain',
                  }}
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 900,
                    color: '#000000',
                    fontSize: '1.8rem',
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      width: '100%',
                      height: 3,
                      backgroundColor: '#00AEEF',
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 100%, 6px 100%)',
                    },
                  }}
                >
                  Mass.AI
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Button
                      onClick={() => handleNavigation(item)}
                      sx={{
                        color: '#000000',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        px: 3,
                        py: 2,
                        mx: 0.5,
                        borderRadius: 0,
                        border: '2px solid transparent',
                        position: 'relative',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -2,
                          right: -2,
                          bottom: -2,
                          left: -2,
                          backgroundColor: hoveredItem === item.id ? '#00AEEF' : 'transparent',
                          zIndex: -1,
                          transform: hoveredItem === item.id ? 'translate(4px, 4px)' : 'translate(0, 0)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        },
                        '&:hover': {
                          backgroundColor: '#FFFFFF',
                          borderColor: '#000000',
                          transform: 'translate(-2px, -2px)',
                        },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {item.label}
                        {item.badge && (
                          <Badge
                            badgeContent={item.badge}
                            sx={{
                              '& .MuiBadge-badge': {
                                backgroundColor: '#FF6B35',
                                color: '#FFFFFF',
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                px: 0.5,
                                borderRadius: 0,
                                right: -8,
                                top: -8,
                              },
                            }}
                          />
                        )}
                        {item.type === 'navigate' && (
                          <Launch sx={{ fontSize: 14, ml: 0.5 }} />
                        )}
                      </Box>
                    </Button>
                  </motion.div>
                ))}
                
                {/* CTA Button */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/contact')}
                    sx={{
                      ml: 2,
                      py: 1.5,
                      px: 4,
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      borderRadius: 0,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      border: '2px solid #000000',
                      '&:hover': {
                        backgroundColor: '#00AEEF',
                        borderColor: '#00AEEF',
                        transform: 'translate(-2px, -2px)',
                        boxShadow: '2px 2px 0px #000000',
                      },
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Box>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: '#000000',
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #000000',
                  borderRadius: 0,
                  '&:hover': {
                    backgroundColor: '#00AEEF',
                    color: '#FFFFFF',
                  },
                }}
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
