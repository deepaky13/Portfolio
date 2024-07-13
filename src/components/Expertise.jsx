/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

const expertiseItems = [
  {
    title: "Strategic design",
    description:
      "I help teams align on primary business challenges and focus design efforts to solve them. I design to drive businesses forward.",
  },
  {
    title: "UX/UI design",
    description:
      "UX / UI - finding creative and practical solutions to solve the users’ problems. I help people seamlessly experience digital design.",
  },
  {
    title: "Website development",
    description:
      "Using the latest technology, I take websites to the next level by creating digital experiences that convince customers. I build websites that are beautiful in design, and strong in performance.",
  },
  {
    title: "BackEnd development",
    description:
      "I develop robust and scalable backend systems using modern technologies. My backend solutions ensure seamless integration, high performance, and security for your applications.",
  },
];

const Expertise = forwardRef((_props, ref) => {
  return (
    <Container ref={ref} id="expertise-section">
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{ color: "black", mb: 8 }}
      >
        My Expertise
      </Typography>
      <Grid container spacing={4}>
        {expertiseItems.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box borderBottom={1} pb={6} mb={4}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ color: "black", fontSize: "28px", mb: 3 }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ color: "gray", fontSize: "17px", lineHeight: "30px" }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
});

export default Expertise;
