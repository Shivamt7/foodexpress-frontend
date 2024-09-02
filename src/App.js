import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./Component/Navbar/Navbar";
import { darkTheme } from "./Themes/Theme";
import Home from "./Component/Homepage/Home"
// import RestaurantDetails from "./Component/Restaurant/RestaurantDetails";
// import Profile from "./Component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";
// import Cart from "./Component/Cart/Cart";


function App() {
  return (
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline/>
      <Navbar />
      <Home />
      <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
