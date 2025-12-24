import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from"./components/Navbar";
import {Route,Routes} from "react-router-dom";
import Home from"./pages/Home"
import About from"./pages/About"
import Contact from "./pages/Contact"
import Service from "./pages/Service"
import useState from "./pages/userState"
const App = () => {
   return(
    <>
    {/* <Header/>
     <Footer/>*/}
    <Navbar/>
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/services" element={<Service/>}/>
      <Route path="/useState" element={<useState/>}/>
    </Routes>
    </>
  );
}
export default App





