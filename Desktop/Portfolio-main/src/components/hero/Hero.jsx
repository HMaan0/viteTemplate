import Card from "./Card/Card"
import "./Hero.scss"
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="wrapper">
      <div className="textContainer">
        <div className="center">
        <h2>HARSHDEEP SINGH</h2>
        <h1>Software Developer</h1>
        </div>
        <div className="buttons">
        <Card />
        </div>
        </div>

        <motion.span 
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ duration: 0.5 }}>
            <span>
            <div className="cardContainer">

            </div>
            </span>
            </motion.span>
      </div>
      </div>
    </div>
  )
}
export default Hero
