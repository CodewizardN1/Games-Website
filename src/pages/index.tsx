import Footer from '@/components/footer'
import Main from '@/components/main'
import Mdnavbar from '@/components/mdnavbar'
import Navbar from '@/components/navbar'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Games</title>
        <meta name="description" content="Generated by   next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        <link rel="icon" href='data:image/png;base64,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' />
        
        
      </Head>


      <Navbar  />


      <Mdnavbar /> 


      <main>

      <Main /> 
      </main>


      <footer>
        {/* <Footer /> */}
      </footer>
      
    </>
  )
}
