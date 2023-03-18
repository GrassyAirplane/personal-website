import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Build from "../components/Build"
import Interests from "../components/Interests"

const Home = () => {
    return (
        <>  
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
            <Build />
            {/* <Interests /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default Home