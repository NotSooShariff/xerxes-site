import React from 'react'
import Image from 'next/image'
import RefImage from './tweet-reference.png'
const Tweet = () => {
  return (
    <div>
        <Image src={RefImage} width={1892} height={594}/>
    </div>
  )
}

export default Tweet