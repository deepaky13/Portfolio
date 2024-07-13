import Navbar from "./components/Navbar";
import Expertise from "./components/Expertise";
import { CssBaseline, ThemeProvider, createTheme, Box } from "@mui/material";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import About from "./components/About";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          <Home />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto", mt: 24 }}>
          <Expertise />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto", mt: 24 }}>
          <Portfolio />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto", mt: 24 }}>
          <Process />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto", mt: 24 }}>
          <About />
        </Box>
        <Box sx={{ flexGrow: 1, overflowY: "auto", mt: 24 }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
