import Hero from "../components/MainBody/Hero";
import HomeHeroImg from "../assets/home_bg.jpg"
import HomeInfo from "../components/MainBody/HomeInfo";
import Footer from "../components/Footer/Footer";
// import Navbar from "../components/Navbar/Navbar"
import Navbarf from "../components/Navbar/Navbarf";
const Home = () => {

    return (
        <>
        <Navbarf/>
            <Hero
                cName={'hero'}
                heroImg={HomeHeroImg}
                title={'Explore. Experiment. Discover.'}
                text={'Explore your data with EDA!'}
                btnText={'Get Started'}
                url={'/signin'}
                btnClass={'show'}
            />
            <HomeInfo />
            {/*Optional thing can be added*/}

            <Footer />
        </>
    )
}

export default Home