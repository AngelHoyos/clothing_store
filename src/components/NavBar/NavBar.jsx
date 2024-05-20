import React from 'react'
import LogoZara from "../../assets/logoZara.png"
export const NavBar = ({children}) => {
  return (
    <nav className='w-full h-24 flex bg-black justify-between items-center'>
        <div className='w-20 h-full my-2 ml-9 flex items-center'>
            <img src={LogoZara} alt=""  className='rounded-full w-full'/>
            <p className='font-Yellowtail text-5xl ml-10 text-ColorOfText_2-0'>Zara</p>
        </div>
        <ul className='flex w-3/6 justify-center items-center'>
            {children}
        </ul>
    </nav>
)
}
