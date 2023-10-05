import React from 'react'
import SongCard from './SongCard'
import sos from '../public/sos.jpg'
import afterHours from '../public/afterHours.png'
import delicateWeapon from '../public/delicateWeapon.jpg'

const SongsSlide = () => {
  return (
    <div className='mt-8 w-[350px] md:w-full overflow-hidden'>
        <h1 className='text-2xl font-bold mb-6'>Jump back in</h1>
        <div className='py-2 flex gap-2 justify-between'>
            <SongCard songImg={sos} songName='Kill Bill' artistName='SZA'/>
            <SongCard songImg={afterHours} songName='After Hours' artistName='The Weeknd'/>
            <SongCard songImg={delicateWeapon} songName='Delicate Weapon' artistName='Grimes'/>
            <SongCard songImg={sos} songName='Kill Bill' artistName='SZA'/>
            <SongCard songImg={sos} songName='Kill Bill' artistName='SZA'/>
            <SongCard songImg={sos} songName='Kill Bill' artistName='SZA'/>
            <SongCard songImg={sos} songName='Kill Bill' artistName='SZA'/>
        </div>
    </div>
  )
}

export default SongsSlide
