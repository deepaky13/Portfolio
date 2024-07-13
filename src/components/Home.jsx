/* eslint-disable react/no-unescaped-entities */
import { Container, Box, Typography } from "@mui/material";
import profileImage from "../assets/images/ProfileImage.jpg"; // replace with your profile image path
import { ContactButton } from "../assets/wrappers/NavbarWrapper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Expertise from "./Expertise";
const Home = () => {
  const handleContactClick = () => {
    const footerSection = document.getElementById("contact-section");

    if (footerSection) {
      const { top } = footerSection.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + top,
        behavior: "smooth",
      });
    }
  };
  return (
    <Container>
      <Box
        sx={{
          margin: "0px 0px",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          gap: "150px",
          my: 7,
        }}
      >
        <Box sx={{ mt: 10, textAlign: "left" }}>
          <Typography
            style={{
              fontSize: "60px",
              lineHeight: "70px",
              fontWeight: 500,
              color: "black",
              fontFamily: "Satoshi, sans-serif",
            }}
          >
            Hi, I'm Deepak.
          </Typography>
          <Typography
            style={{
              fontSize: "60px",
              lineHeight: "70px",
              fontWeight: 500,
              color: "black",
              fontFamily: "Satoshi, sans-serif",
            }}
            gutterBottom
          >
            I will help your team win customers using design.
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: "36px", fontSize: "22px", color: "#686868" }}
            gutterBottom
          >
            By building value through strategic web design, people-centric
            digital experiences, and developing solutions that drive engagement
            and conversion.
          </Typography>
          <ContactButton
            sx={{ marginTop: "80px" }}
            onClick={handleContactClick}
          >
            <Typography
              sx={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "24px",
                color: "black",
                lineHeight: "26px",
                fontWeight: 550,
              }}
            >
              Contact Me
            </Typography>

            <ArrowForwardIosIcon
              sx={{
                border: "1px solid black",
                borderRadius: "70%",
                lineHeight: "26px",
                verticalAlign: "baseline",
                fontSize: "45px",
                padding: "10px",
                "&:hover": {
                  background: "black",
                  color: "white",
                },
              }}
            />
          </ContactButton>
        </Box>
        <Box>
          <img
            src={profileImage}
            alt="Olga"
            style={{ width: "510px", maxWidth: "1000px", borderRadius: "0px" }}
          />
        </Box>
      </Box>
      {/* <Box sx={{ mt: 26 }}>
        <Expertise />
      </Box> */}
    </Container>
  );
};

export default Home;
