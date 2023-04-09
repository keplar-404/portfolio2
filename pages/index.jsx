import Expertise from "@/components/Expertise";
import Hero from "@/components/hero section/Hero section";
import Navbar from "@/components/Navbar";

function Home() {
  return (
  <>

  <div className="sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44">
    <div className="sm:bg-black md:bg-orange-300 lg:bg-gray-700 xl:bg-yellow-500 2xl:bg-pink-400">size</div>

  {/* <Navbar/> */}
  <Hero/>
  <Expertise/>
  </div>
  </>
  )
}

export default Home;
