import React from 'react'
import Image from 'next/image'
import RefImage from './venn-reference.png'



const Venn = () => {
  return (
    <div>
      <section class='pl-16 lg:pl-48'>
        <div className="flex justify-between items-center flex-col sm:flex-row lg:flex-row">
        <div className="left">
        <p class='mt-3 text-3xl'>FROGGYNOMICS:   </p>  
        <p class='mt-10 text-3xl'>Tax: 2/2        </p>
        <p class='mt-3 text-3xl'>30% MARKETING   </p>
        <p class='mt-3 text-3xl'>70% DEVELOPMENT </p>
        <p class='mt-3 text-3xl'>SUPPLY: 200,000 </p>
        <p class='mt-3 text-3xl'>SYMBOL: XERXES  </p>
        <p class='mt-3 text-3xl'>DECIMALS: 7     </p>
        </div>
        <div class='flex'>
        <div class="flex flex-col items-center">
          <Image width={150} height={150} src="/byte.png" alt="Byte" class="w-50 h-50 rounded-full mb-2"/>
          <p class="text-3xl text-white">BYTE</p>
          <p class="mt-2 text-2xl text-white">[GROK's <wbr/> DOG]</p>
          <p class="text-2xl text-white">(ATH: 15M+)</p>
        </div>
        <div class="flex flex-col items-center ml-10 lg:mr-48">
          <Image width={150} height={150} src="/xerxes.png" alt="Xerxes" class="w-50 h-50 rounded-full mb-2"/>
          <p class="text-3xl text-white">XERXES</p>
          <p class="mt-2 text-2xl text-white">[GROK'S <wbr/>FROG]</p>
          <p class="text-2xl text-white">(ATH: ???)</p>
        </div>
        </div>
        </div>

        <div class='flex items-center justify-center'>
          <Image src={'/venn.png'} height={660} width={835}/>
        </div>
      </section>
    {/* <div>
        <Image src={RefImage} height={1214} width={1892} alt='Section Image'/>
    </div> */}
    </div>
  )
}

export default Venn