import React from 'react'
import Image from 'next/image'
import RefImage from "./hero-reference.png"

const Hero = () => {
  return (
    <div>
        <Image src={RefImage} height={550} width={1545}/>
    </div>
  )
}

export default Hero