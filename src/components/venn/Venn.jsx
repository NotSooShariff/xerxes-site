import React from 'react'
import Image from 'next/image'
import RefImage from './venn-reference.png'

// FROGGYNOMICS:
// Tax: 2/2
// 30% MARKETING
// 70% DEVELOPMENT
// SUPPLY: 200,000
// SYMBOL: XERXES
// DECIMALS: 7

const Venn = () => {
  return (
    <div>
        <Image src={RefImage} height={1214} width={1892} alt='Section Image'/>
    </div>
  )
}

export default Venn