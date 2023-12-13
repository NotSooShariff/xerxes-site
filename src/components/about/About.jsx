import React from 'react'
import Image from 'next/image'
import RefImage from './about-reference.png'

const About = () => {
  return (
    <div class='py-16 lg:pl-60'>
        <h2 class='tracking-widest text-center lg:text-left text-3xl lg:text-5xl lg:pl-16 lg:pb-8'>
          THE ENCHANTED
        </h2>
        <h1 class='tracking-widest text-center lg:text-left text-5xl pl-2 lg:text-8xl'>
          AMPHIBIAN
        </h1>
        <h1 class='tracking-widest text-center lg:text-left text-5xl pl-2 lg:pt-10 lg:pl-32 lg:text-8xl'>
          COMPANION
        </h1>
        <Image src={"/ownedbygrok.png"} class="lg:pt-10 mx-auto" height={200} width={500} alt='owned by grok'/>
        <p class='pt-16 text-2xl text-center'>RIBBIT-RIDICULOUS ADVENTURES <wbr/> AWAIT WITH XERXES THE XOOPER!</p>
        <p class='pt-3 pb-32 text-2xl text-center'>CROAK WITN LAUGHTER. AND JOIN <wbr/> THE FROG OWNED BY GROK!</p>
    </div>
  )
}

export default About