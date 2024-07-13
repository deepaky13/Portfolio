/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Toolbar } from "@mui/material";
import {
  CustomAppbar,
  CustomButton,
  NavLinkBox,
} from "../assets/wrappers/NavbarWrapper";
import logo from "../assets/images/Logo1.png";

const Navbar = ({}) => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 130; // Set your offset value here
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <CustomAppbar>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ marginLeft: "0px", height: "40px" }}
          />
        </Box>
        <NavLinkBox sx={{ flexGrow: 0.3 }}>
          <CustomButton
            onClick={() => handleScrollToSection("expertise-section")}
          >
            Expertise
          </CustomButton>
          <CustomButton
            onClick={() => handleScrollToSection("portfolio-section")}
            color="inherit"
            href="/portfolio"
          >
            Portfolio
          </CustomButton>
          {/* <CustomButton
            onClick={() => handleScrollToSection("testimonials-section")}
            color="inherit"
            href="/testimonials"
          >
            Testimonials
          </CustomButton> */}
          <CustomButton
            onClick={() => handleScrollToSection("process-section")}
            color="inherit"
            href="/process"
          >
            Process
          </CustomButton>
          <CustomButton
            onClick={() => handleScrollToSection("about-section")}
            color="inherit"
            href="/about"
          >
            About
          </CustomButton>
          <CustomButton
            sx={{
              width: "150px",
              background: "black",
              padding: "17px",
              textAlign: "center",
              color: "white",
              fontFamily: "Satoshi, sans-serif",
            }}
            onClick={() => handleScrollToSection("contact-section")}
          >
            Let's talk
          </CustomButton>
        </NavLinkBox>
      </Toolbar>
    </CustomAppbar>
  );
};

export default Navbar;
