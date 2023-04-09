import { motion, useScroll, useTransform } from "framer-motion";
function Hero() {
  let { scrollY } = useScroll();
  let y = useTransform(scrollY, [100, 0], ["0%", "50%"]);
  return (
    <>
      <div
        className="w-full h-screen flex
       justify-center items-center overflow-hidden"
      >
        <div className="w-2/3">
          <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl txt">
            Hy! I AM
          </p>
          <p className="txt sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl gradientTxt w-fit">
            Shehub Hossen
          </p>
          <br />
          <p className="globalTxt sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base txt2">
            Full stack developer from Bangladesh with proficient in front-end
            and back-end development,
            <span>
              with expertise in designing and implementing scalable and robust
              applications.
            </span>
          </p>
          <div className="flex mt-8">
            <div className="navBtn py-3 px-12 rounded-2xl cursor-pointer">
              <p className="navbarfont globalTxt font-bold sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base text-white">
                Say hi
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen md:w-1/3 lg:w-5/12 xl:w-5/12 2xl:w-5/12  flex justify-end items-center">
          <img
            src="./me.png"
            alt="pic"
            className="w-auto sm:h-64 md:h-80 lg:h-96 xl:h-96 2xl:h-2/3"
          />
          {/* code png */}
          <div className="absolute">
            <motion.img
              style={{ y }}
              src="./code.png"
              alt="code"
              className=" 
          w-auto sm:h-4 md:h-6 lg:h-7 xl:h-8 2xl:h-9
          
          sm:mb-56 md:mb-72 lg:mb-80 xl:mb-80 2xl:mb-96 2xl:-mt-24 
          
          sm:mr-28 md:mr-36 lg:mr-44 xl:mr-44 2xl:mr-64"
            />
          </div>

          {/* monotor png */}
          <div className="absolute">
            <motion.img
              style={{ y }}
              src="./monitor.png"
              alt="code"
              className=" w-auto sm:h-5 md:h-6 lg:h-8 xl:h-9 2xl:h-11 sm:mb-32 md:mb-44 lg:mb-52 xl:mb-44 2xl:mb-52 2xl:-mt-24 sm:mr-32 md:mr-44 lg:mr-60 xl:mr-60 2xl:mr-72"
            />
          </div>

          {/* codepan png */}
          <div className="absolute">
            <motion.img
              style={{ y }}
              src="./codepan.png"
              alt="code"
              className=" w-auto sm:h-6 md:h-7 lg:h-9 xl:h-10 2xl:h-11 

          sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0  

          sm:mr-28 md:mr-36 lg:mr-44 xl:mr-52 2xl:mr-64"
            />
          </div>

          {/* git png */}
          <div className="absolute">
            <motion.img
              style={{ y }}
              src="./git.png"
              alt="code"
              className=" w-auto 
          sm:h-7 md:h-8 lg:h-10 xl:h-12 2xl:h-16 

          sm:mb-44 md:mb-56 lg:mb-64 xl:mb-72 2xl:mb-96 

          sm:mr-3 md:mr-5 lg:mr-7 xl:mr-6 2xl:mr-4"
            />
          </div>

          {/* vs png */}
          <div className="absolute">
            <motion.img
              style={{ y }}
              src="./vs.png"
              alt="code"
              className=" w-auto 
          sm:h-7 md:h-8 lg:h-10 xl:h-12 2xl:h-16 

          sm:mb-0 sm:mt-10 md:mb-0 lg:mb-0 xl:mb-0 xl:mt-16 2xl:mb-0 

          sm:mr-3 md:mr-5 lg:mr-3 xl:mr-1 2xl:mr-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
