import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  Facebook,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'AI Dashboard', href: '#' },
        { label: 'Training Hub', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#vision' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Status', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'Data Protection', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <LinkedIn />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <Facebook />, href: '#', label: 'Facebook' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(135deg, 
          rgba(26, 32, 44, 0.95) 0%, 
          rgba(45, 55, 72, 0.95) 100%)`,
        color: 'white',
        pt: { xs: 6, md: 8 },
        pb: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(233, 30, 99, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: '2fr repeat(4, 1fr)',
            },
            gap: { xs: 4, md: 6 },
            mb: { xs: 4, md: 6 },
          }}
        >
          {/* Company Info */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <img
                src="/logomassai.png"
                alt="Massai AIR Logo"
                style={{
                  height: '40px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)', // Makes logo white for dark footer
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  background: theme.palette.gradient.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Massai AIR
              </Typography>
            </Box>
            
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.7,
              }}
            >
              Empowering Kenya's businesses with accessible AI technology. 
              Transform your organization and drive innovation with confidence.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ fontSize: 16, mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  hello@massaiair.co.ke
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ fontSize: 16, mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  +254 700 123 456
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ fontSize: 16, mr: 1, color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Nairobi, Kenya
                </Typography>
              </Box>
            </Box>

            {/* Social Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  sx={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&:hover': {
                      color: theme.palette.primary.main,
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <Box key={section.title}>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                {section.title}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      '&:hover': {
                        color: theme.palette.primary.main,
                        textDecoration: 'none',
                      },
                      transition: 'color 0.3s ease-in-out',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            pt: { xs: 3, md: 4 },
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            © {currentYear} Massai AIR. All rights reserved. Made with ❤️ in Kenya.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Link
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Privacy
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Terms
            </Link>
            <Link
              href="#"
              sx={{
                color: 'rgba(255, 255, 255, 0.6)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
                transition: 'color 0.3s ease-in-out',
              }}
            >
              Sitemap
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
