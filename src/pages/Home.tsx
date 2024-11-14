import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import ScrollClue from '../components/ScrollClue';

function Home() {
    return (
    <div>
        <ScrollClue />
        <Hero />
        <Stats />
        <AboutSection />
        <Projects />
        <Services />
        <Testimonial />
    </div>);
}

export default Home;
