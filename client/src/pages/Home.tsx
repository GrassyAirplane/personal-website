import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

const Home = () => {
    return (
        <>  
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
            <Contact />
            <Footer />
        </>
    )
}

export default Home