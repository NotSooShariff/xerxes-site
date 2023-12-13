import Image from "next/image";
import React from 'react'
import NavRefImage from './navbar-reference.png'
const Navbar = () => {
  return (
    <div>
        <Image src={NavRefImage} height={215} width={1545} alt='Navbar'/>
    </div>
  )
}

export default Navbar