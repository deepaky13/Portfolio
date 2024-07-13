/* eslint-disable react/no-unescaped-entities */
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      id="contact-section"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 8,
        borderTop: "1px solid #333",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} sx={{ display: "grid", gap: "14px" }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
              I'm always happy to chat about:
            </Typography>
            <Typography variant="body1">Web Design</Typography>
            <Typography variant="body1">UX/UI</Typography>
            <Typography variant="body1">Strategy</Typography>
            <Typography variant="body1">Backend Logics</Typography>
            <Typography variant="body1">Education/Upskilling</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mb={5} sx={{ display: "grid", gap: "20px" }}>
              <Typography variant="h6" gutterBottom>
                Get in touch
              </Typography>
              <Typography variant="body1">deepakyuvaraj34@gamil.com</Typography>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                Connect
              </Typography>
              <Link
                href="www.linkedin.com/in/deepak-y-13a66a267"
                target="_blank"
                color="inherit"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <LinkedInIcon sx={{ mr: 1 }} />
                <Typography variant="body1">LinkedIn</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} sx={{ borderTop: "1px solid #333", pt: 2 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={12} md={4}>
              <Typography variant="body2">
                Designed and developed by Deepak
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <Typography variant="body2">© 2024</Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="right">
              {/* <Link
                href="https://www.webflow.com"
                target="_blank"
                color="inherit"
              >
                <Typography variant="body2">Powered by Webflow</Typography>
              </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
