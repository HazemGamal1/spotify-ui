import React from 'react'
import billie from '../public/billie.jpg'
import weeknd from '../public/weeknd.jpeg'
import toliver from '../public/toliver.jpg'
import dua from '../public/dua.jpg'
import metro from '../public/metro.jpg'
import ArtistCard from './ArtistCard'
const ArtistsSlide = () => {
  return (
    <div className='mt-5 overflow-hidden w-[350px] md:w-full'>
        <h1 className='text-2xl font-bold mb-4'>Your favorite artists</h1>
        <div className='py-2 flex gap-2 justify-between lg:flex-row'>
            <ArtistCard artistImg={billie} artistName='Billie Eilish'/>
            <ArtistCard artistImg={weeknd} artistName='The Weeknd'/>
            <ArtistCard artistImg={toliver} artistName='Don Toliver'/>
            <ArtistCard artistImg={dua} artistName='Dua Lipa'/>
            <ArtistCard artistImg={metro} artistName='Metro Boomin'/>
            <ArtistCard artistImg={weeknd} artistName='The Weeknd'/>
            <ArtistCard artistImg={weeknd} artistName='The Weeknd'/>
        </div>
    </div>
  )
}

export default ArtistsSlide
