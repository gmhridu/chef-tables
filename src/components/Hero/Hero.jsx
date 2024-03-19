import heroImg from "../../assets/bg.png";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto my-3">
        <div
          className="hero w-full rounded-3xl md:min-w-full lg:min-w-[1320px] lg:min-h-[600px]"
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-35 rounded-3xl"></div>
          <div className="hero-content text-center">
            <div>
              <h1 className="mb-5 text-white text-xl md:text-3xl lg:text-5xl font-bold">
                Discover an exceptional cooking
                <br />
                class tailored for you!
              </h1>
              <p className="mb-5 text-white text-sm md:text-base lg:text-xl font-normal line-clamp-2 md:line-clamp-none">
                Learn and Master Basic Programming, Data Structures, Algorithm,
                OOP, Database and solve 500+ coding
                <br />
                problems to become an exceptionally well world-class Programmer.
              </p>
              <div className="flex items-center justify-center gap-6">
                <PrimaryBtn>Explore Now</PrimaryBtn>
                <button className="bg-transparent border border-white text-white  text-xl font-semibold rounded-full px-3 py-2 md:px-6 md:py-3">
                  Our Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
