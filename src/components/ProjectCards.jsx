/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ContactButton } from "../assets/wrappers/NavbarWrapper";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function ProjectCards({
  img,
  content,
  link,
  section1,
  section2,
}) {
  return (
    <Card sx={{ maxWidth: 1200 }}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <CardMedia sx={{ height: "600px" }} image={img} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              color: "black",
              fontSize: "18px",
              display: "flex",
              gap: "40px",
              mb: 5,
              mt: 5,
            }}
          >
            <span>{section1}</span>
            <span>{section2}</span>
          </Typography>
          <Typography
            sx={{
              color: "black",
              lineHeight: "34px",
              fontSize: "26px",
              width: "500px",
              textAlign: "left",
            }}
          >
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <ContactButton href={link}>
            <Typography
              sx={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: "24px",
                color: "black",
                lineHeight: "26px",
                fontWeight: 500,
              }}
            >
              View Project
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
        </CardActions>
      </a>
    </Card>
  );
}
