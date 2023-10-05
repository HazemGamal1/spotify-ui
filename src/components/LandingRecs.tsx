import React from 'react'
import afterHours from '../public/afterHours.png'
import liked from '../public/likedSongs.jpg'
import metro from '../public/hv.png'
import bbtm from '../public/bbtm.png'
import bid from '../public/BID.jpg'
import sos from '../public/sos.jpg'
import LandingAlbumCard from '../components/LandingAlbumCard'

const LandingRecs = () => {
  return (
    <div className=''>
      <h1 className='text-3xl font-bold mb-4'>Good evening</h1>
        <div className='flex flex-col gap-2 lg:justify-between md:flex-row xl:flex-row '>
          <div>
            <LandingAlbumCard albumImg={liked} albumName='Liked Songs'/>
            <LandingAlbumCard albumImg={afterHours} albumName='AFTER HOURS'/>
          </div>
          <div>
            <LandingAlbumCard albumImg={metro} albumName='HEROES & VILLAINS'/>
            <LandingAlbumCard albumImg={bbtm} albumName='BEAUTY BEHIND THE MADNESS'/>
          </div>
          <div>
            <LandingAlbumCard albumImg={bid} albumName='BEAUTY IN DEATH'/>
            <LandingAlbumCard albumImg={sos} albumName='SOS'/>
          </div>
        </div>
    </div>
  )
}

export default LandingRecs
