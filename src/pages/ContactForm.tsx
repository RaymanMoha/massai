import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Alert,
  Snackbar,
  useTheme,
  useMediaQuery,
  Divider,
  Avatar,
} from '@mui/material';
import {
  Business as BusinessIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  companySize: string;
  industry: string;
  budget: string;
  timeline: string;
  projectType: string;
  message: string;
  newsletter: boolean;
  terms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  companySize?: string;
  industry?: string;
  budget?: string;
  timeline?: string;
  projectType?: string;
  message?: string;
  newsletter?: string;
  terms?: string;
}

const ContactForm: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    companySize: '',
    industry: '',
    budget: '',
    timeline: '',
    projectType: '',
    message: '',
    newsletter: false,
    terms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees',
  ];

  const industries = [
    'Technology',
    'Healthcare',
    'Finance',
    'Retail',
    'Manufacturing',
    'Education',
    'Media & Entertainment',
    'Real Estate',
    'Transportation',
    'Other',
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    '$500,000+',
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Just researching',
  ];

  const projectTypes = [
    'AI Strategy Consulting',
    'Machine Learning Implementation',
    'Data Analytics Platform',
    'Automation Solutions',
    'Custom AI Development',
    'AI Integration',
    'Other',
  ];

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSelectChange = (field: keyof FormData) => (
    event: any
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleCheckboxChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.checked,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project';
    if (!formData.terms) newErrors.terms = 'You must accept the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        companySize: '',
        industry: '',
        budget: '',
        timeline: '',
        projectType: '',
        message: '',
        newsletter: false,
        terms: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: '#f8f9fa',
          borderBottom: '3px solid #000000',
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/')}
              sx={{
                color: '#000000',
                border: '2px solid #000000',
                borderRadius: 0,
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: '#000000',
                  color: '#ffffff',
                },
              }}
            >
              Back to Home
            </Button>
          </Box>

          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 7 }}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 300,
                    color: '#000000',
                    mb: 2,
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                  }}
                >
                  Let's Build Something
                  <Box component="span" sx={{ color: '#00AEEF', display: 'block' }}>
                    Extraordinary Together
                  </Box>
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    color: '#666666',
                    mb: 4,
                    fontWeight: 400,
                    maxWidth: '600px',
                  }}
                >
                  Tell us about your vision, and we'll help you transform it into reality with cutting-edge AI solutions.
                </Typography>
              </motion.div>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '400px',
                    mx: 'auto',
                    borderRadius: '8px',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src="/gif2.gif"
                    alt="AI Innovation in Action"
                    sx={{
                      width: '100%',
                      height: '350px',
                      objectFit: 'cover',
                      display: 'block',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {/* Form Section */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                sx={{
                  border: '2px solid #000000',
                  borderRadius: 0,
                  boxShadow: 'none',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -4,
                    right: -4,
                    bottom: -4,
                    left: -4,
                    backgroundColor: '#00AEEF',
                    zIndex: -1,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 500,
                      color: '#000000',
                      mb: 4,
                      textAlign: 'center',
                    }}
                  >
                    Project Details
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      {/* Personal Information */}
                      <Grid size={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#000000',
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          <PersonIcon /> Personal Information
                        </Typography>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange('firstName')}
                          error={!!errors.firstName}
                          helperText={errors.firstName}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 0,
                              '& fieldset': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Last Name"
                          value={formData.lastName}
                          onChange={handleInputChange('lastName')}
                          error={!!errors.lastName}
                          helperText={errors.lastName}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 0,
                              '& fieldset': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          error={!!errors.email}
                          helperText={errors.email}
                          InputProps={{
                            startAdornment: <EmailIcon sx={{ mr: 1, color: '#666666' }} />,
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 0,
                              '& fieldset': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Phone (Optional)"
                          value={formData.phone}
                          onChange={handleInputChange('phone')}
                          InputProps={{
                            startAdornment: <PhoneIcon sx={{ mr: 1, color: '#666666' }} />,
                          }}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 0,
                              '& fieldset': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      {/* Company Information */}
                      <Grid size={12}>
                        <Divider sx={{ my: 2, borderColor: '#000000', borderWidth: 1 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: '#000000',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                            }}
                          >
                            <BusinessIcon /> Company Information
                          </Typography>
                          <Box
                            component="img"
                            src="/gif1.gif"
                            alt="Professional Business"
                            sx={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              opacity: 0.8,
                            }}
                          />
                        </Box>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Company Name"
                          value={formData.company}
                          onChange={handleInputChange('company')}
                          error={!!errors.company}
                          helperText={errors.company}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 0,
                              '& fieldset': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Job Title"
                          value={formData.jobTitle}
                          onChange={handleInputChange('jobTitle')}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 0,
                              '& fieldset': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel sx={{ color: '#000000', fontWeight: 500 }}>
                            Company Size
                          </InputLabel>
                          <Select
                            value={formData.companySize}
                            onChange={handleSelectChange('companySize')}
                            sx={{
                              borderRadius: 0,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            }}
                          >
                            {companySizes.map((size) => (
                              <MenuItem key={size} value={size}>
                                {size}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel sx={{ color: '#000000', fontWeight: 500 }}>
                            Industry
                          </InputLabel>
                          <Select
                            value={formData.industry}
                            onChange={handleSelectChange('industry')}
                            sx={{
                              borderRadius: 0,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            }}
                          >
                            {industries.map((industry) => (
                              <MenuItem key={industry} value={industry}>
                                {industry}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      {/* Project Details */}
                      <Grid size={12}>
                        <Divider sx={{ my: 2, borderColor: '#000000', borderWidth: 1 }} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            color: '#000000',
                            mb: 2,
                          }}
                        >
                          Project Details
                        </Typography>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel sx={{ color: '#000000', fontWeight: 500 }}>
                            Project Type
                          </InputLabel>
                          <Select
                            value={formData.projectType}
                            onChange={handleSelectChange('projectType')}
                            sx={{
                              borderRadius: 0,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            }}
                          >
                            {projectTypes.map((type) => (
                              <MenuItem key={type} value={type}>
                                {type}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel sx={{ color: '#000000', fontWeight: 500 }}>
                            Budget Range
                          </InputLabel>
                          <Select
                            value={formData.budget}
                            onChange={handleSelectChange('budget')}
                            sx={{
                              borderRadius: 0,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            }}
                          >
                            {budgets.map((budget) => (
                              <MenuItem key={budget} value={budget}>
                                {budget}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel sx={{ color: '#000000', fontWeight: 500 }}>
                            Timeline
                          </InputLabel>
                          <Select
                            value={formData.timeline}
                            onChange={handleSelectChange('timeline')}
                            sx={{
                              borderRadius: 0,
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            }}
                          >
                            {timelines.map((timeline) => (
                              <MenuItem key={timeline} value={timeline}>
                                {timeline}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid size={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={4}
                          label="Tell us about your project"
                          value={formData.message}
                          onChange={handleInputChange('message')}
                          error={!!errors.message}
                          helperText={errors.message}
                          placeholder="Describe your goals, challenges, and what you're looking to achieve..."
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 0,
                              '& fieldset': {
                                borderColor: '#000000',
                                borderWidth: '2px',
                              },
                              '&:hover fieldset': {
                                borderColor: '#00AEEF',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#00AEEF',
                                borderWidth: '3px',
                              },
                            },
                          }}
                        />
                      </Grid>

                      {/* Consent */}
                      <Grid size={12}>
                        <Divider sx={{ my: 2, borderColor: '#000000', borderWidth: 1 }} />
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={formData.newsletter}
                                onChange={handleCheckboxChange('newsletter')}
                                sx={{
                                  color: '#000000',
                                  '&.Mui-checked': {
                                    color: '#00AEEF',
                                  },
                                }}
                              />
                            }
                            label="I'd like to receive updates about AI trends and Mass.AI insights"
                          />

                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={formData.terms}
                                onChange={handleCheckboxChange('terms')}
                                sx={{
                                  color: '#000000',
                                  '&.Mui-checked': {
                                    color: '#00AEEF',
                                  },
                                }}
                              />
                            }
                            label={
                              <Typography variant="body2">
                                I agree to the{' '}
                                <Box component="span" sx={{ color: '#00AEEF', cursor: 'pointer' }}>
                                  Terms of Service
                                </Box>{' '}
                                and{' '}
                                <Box component="span" sx={{ color: '#00AEEF', cursor: 'pointer' }}>
                                  Privacy Policy
                                </Box>
                              </Typography>
                            }
                          />
                          {errors.terms && (
                            <Typography variant="body2" sx={{ color: '#d32f2f', ml: 4 }}>
                              {errors.terms}
                            </Typography>
                          )}
                        </Box>
                      </Grid>

                      {/* Submit Button */}
                      <Grid size={12}>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent: 'center', 
                          alignItems: 'center',
                          gap: 3,
                          mt: 4,
                          flexDirection: { xs: 'column', md: 'row' }
                        }}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            endIcon={<SendIcon />}
                            sx={{
                              py: 2,
                              px: 6,
                              backgroundColor: '#000000',
                              color: '#FFFFFF',
                              borderRadius: 0,
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              border: '2px solid #000000',
                              fontSize: '1.1rem',
                              minWidth: '200px',
                              '&:hover': {
                                backgroundColor: '#00AEEF',
                                borderColor: '#00AEEF',
                                transform: 'translate(-2px, -2px)',
                                boxShadow: '2px 2px 0px #000000',
                              },
                              '&:disabled': {
                                backgroundColor: '#cccccc',
                                color: '#666666',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </Button>

                          {/* Looney Arrow GIF */}
                          <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          >
                            <Box
                              component="img"
                              src="/looney-arrow.gif"
                              alt="Send your message"
                              sx={{
                                width: { xs: '80px', md: '100px' },
                                height: { xs: '60px', md: '75px' },
                                objectFit: 'contain',
                                display: { xs: 'none', md: 'block' }
                              }}
                            />
                          </motion.div>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box sx={{ position: 'sticky', top: 100 }}>
                {/* Contact Info */}
                <Card
                  sx={{
                    mb: 4,
                    border: '2px solid #000000',
                    borderRadius: 0,
                    boxShadow: 'none',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#000000',
                        mb: 3,
                        textAlign: 'center',
                      }}
                    >
                      Get in Touch
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: '#00AEEF', width: 40, height: 40 }}>
                          <EmailIcon />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ color: '#666666' }}>
                            Email
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            hello@mass.ai
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: '#00AEEF', width: 40, height: 40 }}>
                          <PhoneIcon />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ color: '#666666' }}>
                            Phone
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            +1 (555) 123-4567
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: '#00AEEF', width: 40, height: 40 }}>
                          <LocationIcon />
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ color: '#666666' }}>
                            Location
                          </Typography>
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            San Francisco, CA
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                {/* What to Expect */}
                <Card
                  sx={{
                    border: '2px solid #000000',
                    borderRadius: 0,
                    boxShadow: 'none',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: '#000000',
                        mb: 3,
                        textAlign: 'center',
                      }}
                    >
                      What to Expect
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <CheckCircleIcon sx={{ color: '#00AEEF', mt: 0.5 }} />
                        <Typography variant="body2">
                          Response within 24 hours
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <CheckCircleIcon sx={{ color: '#00AEEF', mt: 0.5 }} />
                        <Typography variant="body2">
                          Free initial consultation
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <CheckCircleIcon sx={{ color: '#00AEEF', mt: 0.5 }} />
                        <Typography variant="body2">
                          Custom project proposal
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                        <CheckCircleIcon sx={{ color: '#00AEEF', mt: 0.5 }} />
                        <Typography variant="body2">
                          NDA protection available
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{
            borderRadius: 0,
            border: '2px solid #000000',
            fontWeight: 500,
          }}
        >
          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
