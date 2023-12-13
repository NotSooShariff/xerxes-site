import Image from 'next/image'
import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import Tweet from '@/components/tweetsticker/Tweet'
import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import Venn from '@/components/venn/Venn'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tweet/>
      <About/>
      <Venn/>
      <Footer/>
    </div>
  )
}

