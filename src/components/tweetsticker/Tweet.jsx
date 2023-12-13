import React from 'react'
import Image from 'next/image'
import RefImage from './tweet-reference.png'

const Tweet = () => {
  return (
    <div class="-rotate-3 px-8 md:px-16 py-8 md:py-16 flex justify-center items-center">
      <Image src="/tweetsticker.png" width={800} height={594}/>
    </div>

  )
}

export default Tweet