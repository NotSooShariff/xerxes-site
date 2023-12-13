import React from 'react'
import Image from 'next/image'
import RefImage from './about-reference.png'

const About = () => {
  return (
    <div>
        <Image src={RefImage} height={954} width={1892} alt='Section'/>
    </div>
  )
}

export default About