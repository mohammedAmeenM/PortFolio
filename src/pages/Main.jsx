import About from "../components/About"
import Contact from "../components/Contact"
import Experince from "../components/Experince"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Profile from "../components/Profile"
import Project from "../components/Project"

const Main = () => {
  return (
    <div>
        <NavBar />
      <Profile />
      <About />
      <Experince />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main
