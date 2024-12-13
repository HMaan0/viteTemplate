import './App.scss'
import Contact from './components/Contact/Contact'
import Parallax from './components/Parallax/Parallax'
import Portfolio from './components/Portfolio/Portfolio'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
  <>
  <section id="Homepage">
    <Navbar />
    <Hero />
    </section>
  <section id="Portfolio">
    <Parallax />
    </section>
    <Portfolio />
  <section id="Contact">
    <Contact />
    </section>
  </>
  )
}

export default App
