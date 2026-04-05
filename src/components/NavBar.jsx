import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import {motion} from "motion/react"

const NavBar = ({ theme, setTheme }) => {
  const [sideBarOpen, setSidBarOpen] = useState(false);
  return (
    <motion.div 
    initial={{ opacity:0,y:-50 }}
    animate={{ opacity:1,y:0 }}
    transition={{ duration:0.6,ease:'easeOut' }}
    className="dark:text-white dark:bg-gray-900 flex justify-between items-center px=4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        alt="WebSite Logo.."
        className="w-32 sm:w-40 max-sm:ml-4"
      />
      <div
        className={`text-gray-700 dark:text-white  sm:text-sm ${sideBarOpen ? `max-sm:w-50 max-sm:pl-10`: "max-sm:w-0 overflow-hidden"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white flex max-sm:pt-20 sm:items-center  gap-5 transition-all duration-300 ease-in-out max-sm:z-10`}
      >
        <img
          src={assets.close_icon}
          className="w-5 absolute right-4 top-4 cursor-pointer sm:hidden"
          onClick={()=>setSidBarOpen(false)}
        />

        <a href="#" className="sm:hover:border-b" onClick={()=>setSidBarOpen(false)}>
          Home
        </a>
        <a href="#services" className="sm:hover:border-b"   onClick={()=>setSidBarOpen(false)}>
          Services
        </a>
        <a href="#our_work" className="sm:hover:border-b"  onClick={()=>setSidBarOpen(false)}>
          Our Work
        </a>
        <a href="#contact_us" className="sm:hover:border-b"  onClick={()=>setSidBarOpen(false)}>
          Contact Us
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 max-sm:mr-2">
        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          className="w-8 cursor-pointer sm:hidden mr-4"
          onClick={() => setSidBarOpen(true)}
        />
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2  rounded-full cursor-pointer hover:scale-103 transition-all duration-300 ease-in-out"
        >
          Connect <img src={assets.arrow_icon} width={14} />
        </a>
      </div>
    </motion.div>
  );
};

export default NavBar;
