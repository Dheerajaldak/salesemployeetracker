import React from 'react'
import GalaxyLandingPage from '../components/GalaxyLandingPage'
import ShuffleHero from '../components/SuffleHero'
import UnoloWebApp from '../components/UnoloWebApp'
import WhyChooseUs from './WhyChooseUs'
import ScrollEffect from '../components/ScrollEffect/ScrollEffect'
// import FieldWorkerManagement from './FieldWorkManagemnet'

const HomePage = () => {
  return (
    <>
       <GalaxyLandingPage/>
       <ShuffleHero/>
         <UnoloWebApp/>
         <ScrollEffect/>
         <WhyChooseUs/>
     
       {/* <FieldWorkerManagement/> */}
    
    </>
  )
}

export default HomePage