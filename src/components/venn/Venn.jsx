import React from 'react'
import Image from 'next/image'
import RefImage from './venn-reference.png'

const Venn = () => {
  return (
    <div>
        <Image src={RefImage} height={1214} width={1892} alt='Section Image'/>
    </div>
  )
}

export default Venn