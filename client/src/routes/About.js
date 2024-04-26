import Hero from "../components/MainBody/Hero";
import AboutHero from '../assets/homeHero.jpg'
import Footer from "../components/Footer/Footer";
import AboutUs from "../components/About/AboutUs";
// import Navbar from "../components/Navbar/Navbar"
import Navbarf from "../components/Navbar/Navbarf";
const About = () => {
    return (
        <>
        <Navbarf/>
            <Hero
                cName={'hero-mid'}
                heroImg={AboutHero}
                title={'About Us'}
                btnClass={'hide'}
            />
            <AboutUs />
            <Footer />
        </>
    )
}

export default About

