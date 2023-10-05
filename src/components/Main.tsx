import ArtistsSlide from './ArtistsSlide'
import LandingRecs from './LandingRecs'
import SongsSlide from './SongsSlide'
import { useState } from 'react'
const Main = () => {
  return (
    <div className='ml-[320px] mt-2 p-18 w-full h-screen  bg-black rounded-xl lg:ml-[440px] min-w-max'>
      <div className='w-full h-[calc(100% + 50%)] bg-[#121212] py-[4.5rem] px-5 text-white rounded-xl '>
        <LandingRecs />
        <ArtistsSlide />  
        <SongsSlide />
      </div>
    </div>
  )
}

export default Main
