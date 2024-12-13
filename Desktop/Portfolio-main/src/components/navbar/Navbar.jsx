//import Sidebar from "./Sidebar/sidebar";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
        <div className="wrapper">
            <div className="social">
            <a href='https://www.linkedin.com/in/harshdeepsingh9828' target="_blank"><img src="/LinkedIn.jpg" alt="" /></a>
            <a href='https://github.com/Harsh-deepsingh' target="_blank"><img src="/GitHub.png" alt="" /></a>
            <a href='https://twitter.com/Harsh_maan0' target="_blank"><img src="/X.jpeg" alt="" /></a>
            <a href='https://www.youtube.com/@HarshMaan-wc6cm' target="_blank"><img src="/youtube.png" alt="youtube" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
