import { LogoBehance, LogoDeviantart, LogoDribbble, LogoFigma, LogoGithub } from "react-ionicons";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="hero w-full h-screen flex items-center justify-center md:px-[250px] px-5 relative">
        <Navbar />
        <div className="flex w-full flex-col gap-8 z-50 text-center items-center justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-3">
            <span className="md:text-4xl text-3xl font-semibold text-orange-100">Hi, I'm Abdul Hamid</span>
            <span className="md:text-7xl text-6xl font-semibold text-orange-200">Frontend Developer</span>
            <p className="text-gray-200 md:max-w-[600px] max-w-[450px] leading-7 text-center"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum qui, iusto dolores eligendi animi quia, eaque unde tempora asperiores dolor temporibus provident dolorum architecto voluptate, <br/> fuga obcaecati est id sed. </p>
            <div className="flex w-full text-sm justify-center gap-5">
                <LogoDribbble color={"#fff"} width={"30px"} height={"30px"} />
                <LogoDeviantart color={"#fff"} width={"30px"} height={"30px"} />
                <LogoBehance color={"#fff"} width={"30px"} height={"30px"} />
                <LogoFigma color={"#fff"} width={"30px"} height={"30px"} />
                <LogoGithub color={"#fff"} width={"30px"} height={"30px"} />
            </div>
            <div className="flex w-full items-center justify-center gap-4">
                <button className="text-white rounded-full bg-orange-400 hover:bg-orange-500 transition-all duration-300 w-fit px-5 py-3 font-medium"> Contact with me</button>
                <button className="text-white rounded-full animate-bounce border-2 border-orange-400 hover:bg-orange-500 transition-all duration-300 w-fit px-5 py-3 font-medium"> See my work</button>
            </div>
        </div>
        <div className="flex w-full h-full z-10 bg-[#120800] opacity-[0.82] absolute top-0 left-0"></div>
    </div>
  );
};

export default Hero;