import { Box, styled, Typography } from "@mui/material";

export const CustomAppbar = styled(Box)({
  height: "80px",
  padding: "25px 45px 20px 60px",
  background:
    "linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
  position: "sticky",
  top: 0,
  "@media (max-width: 600px)": {},
});
export const CustomButton = styled(Typography)({
  color: "black",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  border: "none",
  fontSize: "18px",
  fontWeight: 500,
  textDecoration: "none solid rgb(104, 104, 104)",
  textAlign: "left",
  lineHeight: "20px",
  position: "relative", // Position relative for pseudo-element positioning
  display: "inline-block", // Ensures inline-block layout
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: "-3px", // Adjust this value to control the underline position
    width: "0%",
    height: "1px", // Adjust this value to control the underline thickness
    backgroundColor: "black",
    transition: "width 0.3s ease-out", // Smooth width transition
  },
  "&:hover::before": {
    width: "100%", // Expand width to 100% on hover
  },
  "@media (max-width: 600px)": {},
});
export const NavLinkBox = styled(Typography)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  fontFamily: "Satoshi, sans-serif",
  "@media (max-width: 600px)": {},
});

export const ContactButton = styled("a")({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  // 
  padding: "10px",
  textDecoration: "none", // Remove underline from anchor tag
  color: "black",
  // width: "209px",
  position: "relative", // Add position relative to contain absolutely positioned pseudo-element
  "&:hover": {
    "& > :nth-child(2)": {
      // Target the second child element (ArrowForwardIosIcon)
      backgroundColor: "black",
      color: "white",
    },
    "&::after": {
      width: "100%", // Ensure the line stretches the full width on hover
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "0%", // Start with 0% width
    height: "2px",
    backgroundColor: "black",
    transition: "width 0.3s ease-out", // Smooth transition for width change
  },
  "@media (max-width: 600px)": {},
});
