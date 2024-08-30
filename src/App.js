import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Component/Navbar/Navbar";
import { darkTheme } from "./Themes/Theme";
import Home from "./Component/Homepage/Home"


function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <Navbar />
      <Home />
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
