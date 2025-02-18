import About from "./components/About"
import Contact from "./components/Contact/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Skills from "./components/Skills"
function App() {

  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Services />
      <Projects />
      <Skills />
      <Footer />
      {/* <Contact /> */}
    </>
  )
}

export default App
