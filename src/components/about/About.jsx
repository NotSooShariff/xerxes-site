import React from 'react'
import Image from 'next/image'
import RefImage from './about-reference.png'

const About = () => {
  return (
    <div class='py-16 lg:pl-60'>
        <h2 class='tracking-widest text-3xl lg:text-5xl lg:pl-16 lg:pb-8'>
          THE ENCHANTED
        </h2>
        <h1 class='tracking-widest text-5xl pl-2 lg:text-8xl'>
          AMPHIBIAN
        </h1>
        <h1 class='tracking-widest text-6xl pl-2 lg:pt-10 lg:pl-32 lg:text-8xl'>
          COMPANION
        </h1>
        <Image src={"/ownedbygrok.png"} class="lg:pt-10 mx-auto" height={200} width={500} alt='owned by grok'/>
    </div>
  )
}

export default About