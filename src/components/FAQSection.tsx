import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore } from '@mui/icons-material';

const FAQSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = useState<string | false>('faq0');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What is AI automation, and how does it work for African businesses?",
      answer: "AI automation uses artificial intelligence to perform tasks that typically require human intelligence. For African businesses, this means automating customer service through chatbots, streamlining supply chain management, automating financial processes, and optimizing agricultural operations. Mass.AI connects these solutions with local infrastructure and mobile-first platforms that work across the continent."
    },
    {
      question: "How can AI automate jobs and improve productivity in Kenya and East Africa?",
      answer: "AI automation enhances productivity by handling repetitive tasks like data entry, customer inquiries, inventory management, and report generation. In Kenya's growing tech sector, this means sales teams can focus on relationship building while AI handles lead qualification, customer support teams can manage more inquiries through intelligent routing, and agricultural businesses can optimize crop monitoring and yield predictions."
    },
    {
      question: "What are examples of AI automation for small businesses in Africa?",
      answer: "Common applications include: automated customer service for M-Pesa and mobile banking, inventory management for retail businesses, automated social media marketing for local brands, lead generation and qualification for B2B services, automated invoice processing and accounting, and predictive analytics for supply chain optimization. Mass.AI specializes in solutions that work with limited internet connectivity and mobile-first workflows."
    },
    {
      question: "What services does Mass.AI provide for African enterprises?",
      answer: "Mass.AI offers end-to-end AI automation services including: custom AI agent development, workflow automation design, integration with existing systems (SAP, Microsoft, local ERPs), training and change management, ongoing support and optimization, and compliance with local data protection regulations. We focus on solutions that work within Africa's unique technological and infrastructure landscape."
    },
    {
      question: "How much does AI automation cost for businesses in Kenya?",
      answer: "Our pricing is tailored to African market conditions with flexible payment options including mobile money integration. Costs vary based on complexity and scale, typically starting from $500/month for basic automation up to enterprise solutions. We offer ROI-focused pricing where you only pay as you see measurable productivity gains and cost savings."
    },
    {
      question: "What are the best AI automation tools for small businesses in Africa?",
      answer: "Mass.AI recommends tools that work reliably with local infrastructure: WhatsApp Business API for customer service automation, mobile-optimized CRM systems, cloud-based accounting automation that syncs with local banks, and lightweight AI tools that work on basic smartphones. We prioritize solutions that don't require expensive hardware or constant high-speed internet."
    },
    {
      question: "Why choose Mass.AI for automation in Kenya and East Africa?",
      answer: "Mass.AI understands the unique challenges of operating in Africa: inconsistent internet connectivity, mobile-first user behavior, diverse languages and cultures, integration with M-Pesa and mobile banking, compliance with local regulations, and cost-effective solutions. We've built our platform specifically for these conditions, ensuring your automation works reliably across the continent."
    },
    {
      question: "What makes Mass.AI the best choice for African small businesses?",
      answer: "Our deep understanding of African markets combined with cutting-edge AI technology. We provide: local language support (Swahili, Amharic, etc.), mobile money integration, offline-capable solutions, affordable pricing in local currencies, dedicated support in African time zones, and partnerships with local telecommunications providers for reliable connectivity."
    },
    {
      question: "Can small businesses benefit from AI automation without technical expertise?",
      answer: "Absolutely! Mass.AI designs user-friendly solutions that require no coding knowledge. Our platform uses visual workflow builders, pre-built templates for common African business processes, step-by-step setup guides in local languages, dedicated customer success managers, and comprehensive training programs. You focus on your business while we handle the technical complexity."
    },
    {
      question: "How can Mass.AI's automation consultants help my Kenyan company?",
      answer: "Our consultants provide: comprehensive business process analysis, identification of automation opportunities specific to your industry, custom solution design that integrates with your existing systems, implementation support and staff training, ongoing optimization and performance monitoring, and strategic guidance on scaling your automation as your business grows."
    },
    {
      question: "Where is Mass.AI based and what markets do we serve?",
      answer: "Mass.AI is headquartered in Nairobi, Kenya, with operations across East Africa including Uganda, Tanzania, Rwanda, and Ethiopia. We serve the broader African market with particular expertise in: fintech and mobile banking, agriculture and supply chain, retail and e-commerce, healthcare and telemedicine, education and e-learning, and government and public sector automation."
    },
    {
      question: "Can Mass.AI build AI agents and implement agentic AI solutions?",
      answer: "Yes! Mass.AI specializes in building intelligent AI agents that can perform real actions, not just generate responses. We create custom AI agents that integrate with your business systems to: automate customer service workflows, qualify and route sales leads, process invoices and payments, monitor and respond to system alerts, manage inventory and supply chain, and provide predictive analytics. Our agents are designed to work within Africa's technological infrastructure while delivering enterprise-grade capabilities."
    }
  ];

  return (
    <Box
      id="faq"
      sx={{
        py: { xs: 8, md: 12 },
        background: '#f8fafc',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                color: '#1a1a1a',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Frequently Asked Questions
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Everything you need to know about AI automation for African businesses
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Accordion
                  expanded={expanded === `faq${index}`}
                  onChange={handleChange(`faq${index}`)}
                  sx={{
                    mb: 2,
                    borderRadius: '12px !important',
                    border: '1px solid #e2e8f0',
                    boxShadow: 'none',
                    '&:before': {
                      display: 'none',
                    },
                    '&.Mui-expanded': {
                      margin: '0 0 16px 0',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      borderColor: '#00AEEF',
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMore 
                        sx={{ 
                          color: expanded === `faq${index}` ? '#00AEEF' : '#64748b',
                          transition: 'all 0.3s ease',
                        }} 
                      />
                    }
                    sx={{
                      minHeight: 72,
                      px: 3,
                      py: 2,
                      '&.Mui-expanded': {
                        minHeight: 72,
                      },
                      '& .MuiAccordionSummary-content': {
                        margin: '12px 0',
                        '&.Mui-expanded': {
                          margin: '12px 0',
                        },
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: expanded === `faq${index}` ? '#00AEEF' : '#1a1a1a',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      px: 3,
                      pb: 3,
                      pt: 0,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#64748b',
                        lineHeight: 1.7,
                        fontSize: '1rem',
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 6, md: 8 } }}>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: '#1a1a1a',
                fontWeight: 600,
              }}
            >
              Still have questions?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#64748b',
                mb: 3,
              }}
            >
              Our team is here to help you understand how AI automation can transform your African business
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box
                component="button"
                sx={{
                  background: 'linear-gradient(135deg, #00AEEF 0%, #0099D4 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 174, 239, 0.3)',
                  },
                }}
              >
                Contact Our Experts
              </Box>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQSection;
