import intro_img from "../assets/images/bg-pattern-intro-desktop.svg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-img text-White rounded-bl-[4rem] md:rounded-bl-[3rem] pb-8 bg-color   ">
      <div className="   ">
        <Navbar />

        <div className="hero_container flex flex-col justify-center items-center mt-10 text-center">
          <h1 className=" text-3xl  ">A modern publishing platform</h1>
          <p className=" mt-4 text-sm">
            Grow your audience and build your online brand
          </p>
          <div className="btn_container flex gap-x-10 capitalize mt-4">
            <a
              href="#"
              className="py-2 px-3 bg-white rounded-full text-very_light_red text-xs font-bold btn__hover"
            >
              Start for Free
            </a>
            <a
              href="#"
              className="btn border-White rounded-full border-[0.5px] btn_hover2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
