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
  Instagram,
  Facebook,
  LinkedIn,
  Twitter,
  YouTube,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'About Mass.AI',
      links: [
        { label: 'About Mass.AI', href: '#' },
        { label: 'Our agencies', href: '#' },
        { label: 'Our leadership', href: '#' },
        { label: 'Mass.AI Global Services', href: '#' },
      ],
    },
    {
      title: 'Our work',
      links: [
        { label: 'Our work', href: '#' },
      ],
    },
    {
      title: 'Specialized Practices',
      links: [
        { label: 'Mass.AI BX (Business Transformation)', href: '#' },
        { label: 'Mass.AI entertainment', href: '#' },
        { label: 'Mass.AI gaming', href: '#' },
        { label: 'Mass.AI health', href: '#' },
        { label: 'Identity Solutions', href: '#' },
        { label: 'AI Maturity Assessment', href: '#' },
        { label: 'Mass.AI B2B', href: '#' },
      ],
    },
    {
      title: 'Our thinking',
      links: [
        { label: 'Our latest thinking', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Sustainability', href: '#' },
        { label: 'Media & Investors', href: '#' },
      ],
    },
    {
      title: 'Additional Links',
      links: [
        { label: 'Careers', href: '#' },
        { label: 'Contact us', href: '#' },
        { label: 'Our policies', href: '#' },
        { label: 'Privacy notices', href: '#' },
        { label: 'Cookie notice', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Sitemap', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram />, href: 'https://www.instagram.com/massai_air/', label: 'Instagram' },
    { icon: <Facebook />, href: 'https://www.facebook.com/massaiair', label: 'Facebook' },
    { icon: <LinkedIn />, href: 'https://www.linkedin.com/company/massai/', label: 'LinkedIn' },
    { icon: <Twitter />, href: 'https://twitter.com/massai_global', label: 'Twitter' },
    { icon: <YouTube />, href: 'https://www.youtube.com/channel/massaiair', label: 'YouTube' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000',
        color: '#ffffff',
        pt: { xs: 6, md: 10 },
        pb: { xs: 4, md: 6 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 8,
          backgroundColor: '#00AEEF',
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)',
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
            gap: { xs: 4, md: 6 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {footerSections.map((section) => (
            <Box key={section.title}>
              <Typography
                variant="h6"
                sx={{
                  mb: 3,
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 3,
                    backgroundColor: '#00AEEF',
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 100%, 4px 100%)',
                  },
                }}
              >
                {section.title}
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    sx={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      lineHeight: 1.4,
                      fontWeight: 500,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        color: '#00AEEF',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Social Media Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            mb: { xs: 4, md: 6 },
            justifyContent: { xs: 'center', md: 'flex-start' },
            flexWrap: 'wrap',
          }}
        >
          {socialLinks.map((social) => (
            <Box
              key={social.label}
              sx={{
                backgroundColor: '#ffffff',
                border: '2px solid #ffffff',
                borderRadius: 0,
                p: 1.5,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#00AEEF',
                  borderColor: '#00AEEF',
                  transform: 'translate(-2px, -2px)',
                  boxShadow: '2px 2px 0px #ffffff',
                },
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                {social.icon}
              </Link>
            </Box>
          ))}
        </Box>

        {/* Bottom Section */}
        <Box
          sx={{
            pt: { xs: 3, md: 4 },
            borderTop: '3px solid #333333',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 3,
          }}
        >
          {/* Logo and Copyright */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  color: '#FFFFFF',
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                Mass.AI
              </Typography>
            </Box>
            
            <Typography
              variant="body2"
              sx={{
                color: '#cccccc',
                fontSize: '0.875rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              © {currentYear} Mass.AI. All rights reserved.
            </Typography>
          </Box>

          {/* Additional Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
          >
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((linkText) => (
              <Link
                key={linkText}
                href="#"
                sx={{
                  color: '#cccccc',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    color: '#00AEEF',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {linkText}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
