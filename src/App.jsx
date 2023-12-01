
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Card from "./Components/Card";

function App() {
 
  return (
    <>
      <h1>MM Odontólogos</h1>
      <Navbar/>
      <Outlet />
        <Card />
        <Footer />
    </>
  )
}

export default App
