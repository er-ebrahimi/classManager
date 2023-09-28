import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";


import ResponsiveAppBar from "./Component/NavBarMui";
import Home from "./page/Home";
import Footer from "./Component/footer";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./Theme/Theme";
import SignUp from "./page/SignUp"
import Login from "./page/Login"
import About from "./page/About";
// import Menu from './Component/Menu'



function App() {
  return (
    <>

      <ThemeProvider theme={theme}>
        <Router>
          <ResponsiveAppBar></ResponsiveAppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ThemeProvider>

      <Footer></Footer>
    </>
  );
}

export default App;
