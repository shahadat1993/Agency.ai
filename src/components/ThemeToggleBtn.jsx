import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme,setTheme}) => {

    

    useEffect(()=>{
        if(theme === "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme",theme);
    },[theme])
  return (
    <>
    {/* <button>{theme === "dark" ? (
        <img onClick={()=> setTheme('light')} src={assets.sun_icon} alt="Sun Icon.." className='size-8.5 p-1.5 border border-gray-500 rounded-full' />
    ): (
        <img onClick={()=> setTheme('dark')} src={assets.moon_icon} alt="Moon Icon.." className='size-8.5 p-1.5 border border-gray-500 rounded-full' />
    )}</button> */}

    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative overflow-hidden p-1.5 border border-gray-500 rounded-full size-8.5 flex items-center justify-center" 
    >
      {/* এখানে আমরা একটি সহজ CSS transition ব্যবহার করছি যাতে আইকনটি 
        একটু ফেড ইন-আউট (Fade) হয়।
      */}
      <img 
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon} 
        alt="Theme Icon" 
        className="w-full h-full transition-all duration-500 transform rotate-0 dark:rotate-[360deg]" 
      />
    </button>
    </>
  )
}

export default ThemeToggleBtn