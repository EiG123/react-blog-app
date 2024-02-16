import Home from "./components/Home.js";
import About from "./components/About.js";
import Blogs from "./components/Blogs.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar.js";
import NotFound from "./components/NotFound.js";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route> 
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
