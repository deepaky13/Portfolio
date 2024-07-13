/* eslint-disable react/no-unescaped-entities */
import { Container, Box, Typography } from "@mui/material";
import profileImage from "../assets/images/ProfileImage.jpg"; // replace with your profile image path
import { ContactButton } from "../assets/wrappers/NavbarWrapper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMui,
} from "react-icons/si";
// import Expertise from "./Expertise";
const About = () => {
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
    <Container id="about-section">
      <Typography
        align="left"
        gutterBottom
        sx={{ color: "black", mb: 0, fontSize: "48px" }}
      >
        About me
      </Typography>
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
        <Box>
          <img
            src={profileImage}
            alt="Olga"
            style={{ width: "510px", maxWidth: "1000px", borderRadius: "0px" }}
          />
        </Box>
        <Box sx={{ mt: 4, textAlign: "left" }}>
          <Typography
            style={{
              fontSize: "60px",
              lineHeight: "70px",
              fontWeight: 500,
              color: "black",
              fontFamily: "Satoshi, sans-serif",
            }}
          >
            I'm a Full Stack Developer
          </Typography>
          <Typography
            style={{
              fontSize: "60px",
              lineHeight: "70px",
              fontWeight: 500,
              color: "black",
              fontFamily: "Satoshi, sans-serif",
            }}
          >
            &
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
            Expertise in MERN Stack
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: "36px",
              fontSize: "22px",
              color: "#686868",
              display: "grid",
            }}
            gutterBottom
          >
            <span>Hello again!</span>
            <span>
              I love creating, designing, and developing wow projects that drive
              businesses forward.
            </span>
            <div
              style={{
                fontSize: "30px",
                display: "flex",
                gap: "25px",
                marginTop: "50px",
              }}
            >
              <span className="bannerIcon">
                <SiMongodb />
              </span>
              <span className="bannerIcon">
                <SiExpress />
              </span>
              <span className="bannerIcon">
                <SiReact />
              </span>
              <span className="bannerIcon">
                <SiNodedotjs />
              </span>
              <span className="bannerIcon">
                <SiRedux />
              </span>
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiMui />
              </span>
            </div>
          </Typography>
          <ContactButton
            onClick={handleContactClick}
            sx={{ marginTop: "50px" }}
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
      </Box>
      <style>{`
        .bannerIcon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: background-color .5s ease, color 0.3s ease;
        }
        .bannerIcon:hover {
          background-color: #cccccc90;
          color: black;

        }
      `}</style>
    </Container>
  );
};

export default About;
