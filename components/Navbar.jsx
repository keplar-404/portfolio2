import Image from "next/image";
import logo from "../public/s-logo.png";
import btn from "../public/bgbtn1.png"
import { useRef, useState } from "react";
function Navbar() {
  const data = useRef(null)
  const data2 = useRef(null)
  const [home, setHome] = useState("")
  const clkfn = () => {
    const home = document.getElementById("home")
    const services = document.getElementById("services")
    const about = document.getElementById("about")
    const portfolio = document.getElementById("portfolio")
    let data_ = data.current.innerText
    let data_2 = data2.current.innerText
    console.log(data_)
    console.log(data_2)
    // if(data_ === "Services"){
    //   services.classList.add("home")
    //   services.classList.remove("navbartext")
    //   home.classList.remove("home")
    //   home.classList.add("navbartext")
    //   about.classList.remove("home")
    //   about.classList.add("navbartext")
    //   portfolio.classList.remove("home")
    //   portfolio.classList.add("navbartext")

    // }
    // else if (data_ === "Home"){
    //   // home.classList.add("home")
    //   // home.classList.remove("navbartext")
    //   // services.classList.remove("home")
    //   // services.classList.add("navbartext")
    //   // about.classList.remove("home")
    //   // about.classList.add("navbartext")
    //   // portfolio.classList.remove("home")
    //   // portfolio.classList.add("navbartext")
    //   console.log("home")
    // }
    // else if (data_ === "About"){
    //   about.classList.remove("navbartext")
    //   about.classList.add("home")
    //   home.classList.remove("home")
    //   services.classList.remove("home")
    //   portfolio.classList.remove("home")
    // }
    // else if (data_ === "Portfolio"){
    //   portfolio.classList.remove("navbartext")
    //   portfolio.classList.add("home")
    //   home.classList.remove("home")
    //   services.classList.remove("home")
    //   about.classList.remove("home")
    // }
}
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="flex justify-start items-start">
          <Image src={logo} height={512} width={512} className="w-auto h-16 cursor-pointer" />
        </div>
        <div className="flex justify-center items-center 2xl:gap-x-14">
            <p className="home navbarfont cursor-pointer 2xl:text-base" onClick={clkfn} id="home" ref={data2}>Home</p>
            <p className="navbartext navbarfont  cursor-pointer 2xl:text-base" id="services" onClick={clkfn} ref={data} value="services">Services</p>
            <p className="navbartext navbarfont cursor-pointer  2xl:text-base" onClick={clkfn} id="about" >About</p>
            <p className="navbartext navbarfont cursor-pointer 2xl:text-base" onClick={clkfn} id="portfolio" >Portfolio</p>
        </div>
        <div className="flex justify-end items-center text ">
          <div className="navBtn py-3 px-10 rounded-2xl cursor-pointer">
            <p className="navbarfont font-bold 2xl:text-base text-white">Contact me</p> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
