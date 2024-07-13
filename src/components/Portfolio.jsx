import { Box, Container, Typography } from "@mui/material";
import ProjectCards from "./ProjectCards";
import project1 from "../assets/images/Project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

const cardDetails = [
  {
    id: 1,
    img: project1,
    link: "https://campus-voices-3l2m.onrender.com",
    section1: "Web design",
    section2: "development",
    content:
      "Design of a Web application that surveys the staff in college based on students' ratings",
  },
  {
    id: 2,
    img: project3,
    link: "#",
    section1: "branding",
    section2: "development",
    content:
      " Featuring an engaging and responsive layout to attract food lovers and showcase our culinary delights.",
  },
  {
    id: 3,
    img: project2,
    link: "https://github.com/deepaky13/Jobify",
    section1: "branding",
    section2: "development",
    content:
      " Featuring an engaging and responsive layout to attract food lovers and showcase our culinary delights.",
  },
];

const Portfolio = () => {
  return (
    <Container id="portfolio-section">
      <Typography sx={{ fontSize: "48px", color: "black", mb: 5 }}>
        Past Projects
      </Typography>
      <Box sx={{ display: "grid", gap: "150px" }}>
        {cardDetails.map((items) => (
          <ProjectCards
            key={items.id}
            img={items.img}
            link={items.link}
            section1={items.section1}
            section2={items.section2}
            content={items.content}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Portfolio;
