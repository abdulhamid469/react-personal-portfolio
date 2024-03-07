import About from "../../components/About";
import Banner from "../../components/Banner";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Services from "../../components/Services";

const Home = () => {
  return (
    <div className="w-full">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Banner />
    </div>
  )
}

export default Home;