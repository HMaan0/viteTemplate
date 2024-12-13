import { useRef } from "react"
import "./Portfolio.scss"
import { useSpring, motion, useScroll, useTransform } from "framer-motion";


const items= [
    {
        id: 1,
        title: "E-commerce",
        img: "Ecommerce .png",
        desc: "E-commerce website using Redux toolkit and fetching data from json file server with 404 page, Cart, Checkout, Forgot password, Login, order and user profile.",
        gitLink: "https://github.com/Harsh-deepsingh/E-commerce-",
        demo: "https://youtu.be/RoxxPXNC6vA"
    },
    {
        id: 2,
        title: "Ironman AI",
        img: "IronMan.png",
        desc: "Ironman AI build using React js and Express js by fetching Chat GPT API. Trained AI by giving custom prompts and securing the API key in .env file.",
        gitLink: "https://github.com/Harsh-deepsingh/Iron-Man",
        demo: "https://youtu.be/mDf91B86tCI"
    },
    {
        id: 3,
        title: "Job Tracker",
        img: "job.png",
        desc: "Simple but powerful tool build in JavaScript Web scraping the Position, company's Icon, Applicants, saving url in the image and saving all the data in Local Storage in browser.",
        gitLink: "https://github.com/Harsh-deepsingh/Chrome-Extension",
        demo: "https://youtu.be/u4bHGiFaf5I"
    }
]

const Single = ({item}) => {
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                <img src={item.img} alt="" />
                </div>
                <div className="textContainer">
                    <h2>{item.title}</h2>
                    <div className="desc">
                    <p>{item.desc}</p>
                    </div>
                    <button><a href={item.gitLink} target="_blank">GitHub</a></button>
                    <button><a href={item.demo} target="_blank">See Demo</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })


  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{scaleX}} className="progressbar"></motion.div>
        </div>
      {items.map(item => (
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio
