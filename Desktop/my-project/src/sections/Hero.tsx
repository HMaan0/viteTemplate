import data from "../../data";
import TypeWriter from "../components/TypeWriter";

const Hero = () => {
  const image = false;
  return (
    <>
      <div className="flex justify-center items-center">
        {!image && (
          <div className="mt-28 text-center flex flex-col justify-center w-full sm:w-1/2 ">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold">
              {data.Hero.name}
            </p>
            <p className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl mt-10">
              {data.Hero.des}
            </p>
            <TypeWriter words={data.Hero.words}></TypeWriter>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
