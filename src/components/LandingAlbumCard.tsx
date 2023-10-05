import React from 'react'
import afterHours from '/afterHours.png'
import {useState} from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'
interface Props {
    albumImg: string, 
    albumName: string,
}
const LandingAlbumCard = (props: Props) => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='relative cursor-pointer flex bg-[#2a2a2a] w-[300px] lg:w-[460px] rounded-md items-center gap-4 lg:gap-4 mb-3 hover:bg-[#393939] duration-700' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        <img src={props.albumImg} alt="" width={80} className='rounded-sm'/>
        <p className='font-bold'>{props.albumName}</p>
        {isVisible?
        <div className='absolute right-5'>
            <AiFillPlayCircle className="text-[3.5rem] text-[#1ED760] drop-shadow-2xl"/>
        </div>:null
        }
    </div>
  )
}

export default LandingAlbumCard
