import { Container, Grid, Typography, Box } from "@mui/material";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "My first step is to identify the core challenges that stand in the way of business growth and success. It results in understanding the need and scope of the required solution.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Set up project goals. Research the personas, competitors, and best industry practices. Create the informational architecture. Plan the visual direction. Present the project roadmap.",
  },
  {
    number: "03",
    title: "Wireframing",
    description:
      "Design the low-fidelity wireframes which help with the approval of the content structure and the core functionality of a website/digital product.",
  },
  {
    number: "04",
    title: "Design",
    description:
      "Craft the visual design and ensure it aligns with the brand identity and project goals.",
  },
  {
    number: "05",
    title: "Development",
    description:
      "Convert the designs into a fully functional and responsive website using the latest technologies.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Deploy the website, perform final testing, and ensure everything works seamlessly before going live.",
  },
];

const Process = () => {
  return (
    <Container id="process-section">
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ color: "black", mb: 8 }}
      >
        My web design process
      </Typography>
      <Grid container>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              textAlign="left"
              borderRight={index % 3 !== 2 ? 1 : 0}
              borderBottom={index < steps.length - 3 ? 1 : 0}
              borderColor="grey.300"
              padding={4} // Increased padding
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="340px" // Increased height
            >
              <Typography
                variant="h4"
                sx={{ fontSize: "50px", mt: -2 }}
                color="textSecondary"
              >
                {step.number}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "black", mt: 1 }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  lineHeight: "30px",
                  mt: 3,
                  fontSize: "18px",
                  color: "gray",
                }}
              >
                {step.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Process;
