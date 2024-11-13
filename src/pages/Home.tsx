import AboutSection from "../components/AboutSection";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";

function Home() {
    return (
    <div>
        <Hero />
        <Stats />
        <AboutSection />
        <Projects />
        <Services />
        <Testimonial />
        <Contact />
    </div>);
}

export default Home;
