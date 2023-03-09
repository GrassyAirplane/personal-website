import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import About from "../components/About"
import Experience from "../components/Experience"

const Home = () => {
    return (
        <>  
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
        </>
    )
}

export default Home