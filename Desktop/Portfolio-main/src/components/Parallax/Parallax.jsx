import { useRef } from "react";
import "./Parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = () => {
  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ["start start", "end start"]
  })


  const scroll = useTransform(scrollYProgress, [0,1], ["0%", "20%"])

  return (
    <div className="parallax" 
    ref={ref}
    style={{ 
      background: "linear-gradient(180deg, #111132, #505064)" 
      }}>

      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div style={{x: scroll}} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
