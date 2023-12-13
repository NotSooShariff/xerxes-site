import React from 'react'
import Image from 'next/image'
import RefImage from './footer-reference.png'

const Footer = () => {
  return (
    <nav class="text-4xl md:ml-auto md:mr-auto flex flex-wrap items-center justify-center py-32">
      <a class="mr-10 hover:rotate-3 hover:scale-110 transition-all duration-500 hover:cursor-pointer"><img src="/navlogo.png" class="h-20" alt="Logo" /></a>
      <a class="mr-5 hover:text-green-500 hover:cursor-pointer">CHART</a>
      <a class="mr-5 hover:text-green-500 hover:cursor-pointer">TG</a>
      <a class="mr-5 hover:text-green-500 hover:cursor-pointer">X</a>
      <div className="bg-white px-5 py-2 hover:bg-green-400 hover:scale-110 transition-all duration-500 cursor-pointer">
      <a class="mr-5 text-black hover:cursor-pointer">BUY NOW!</a>
      </div>  
    </nav>
  )
}

export default Footer