import React from 'react'
import Image from 'next/image'
import RefImage from './footer-reference.png'

const Footer = () => {
  return (
    <div>
        <Image src={RefImage} height={392} width={1894} alt='Section Image'/>
    </div>
  )
}

export default Footer