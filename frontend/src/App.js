import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import NavBar from "./components/Navbar";
import { Box, useColorModeValue } from "@chakra-ui/react";

//Rendering all components and pages
function App() {
  return (
    <Box
      backgroundImage={useColorModeValue(
        "https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg",
        "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      )}
    >
      <NavBar />
      <Homepage />
    </Box>
  );
}

export default App;
