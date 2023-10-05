import { useState } from 'react'
import {AiFillPlayCircle} from 'react-icons/ai'

interface Props {
    songImg: string,
    songName: string,
    artistName: string,
}
const SongCard = (props: Props) => {
    const[isVisible, setIsVisible] = useState(false)
  return (
    <div className='bg-[#1a1a1a] p-4 rounded-lg cursor-pointer hover:bg-[#393939]' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        <div className='relative'>
            <div className='relative mb-4 w-[150px] h-[150px]'>
                {
                isVisible? <div className='absolute right-0 bottom-0'>
                    <AiFillPlayCircle className="text-6xl text-[#1ED760]"/>
                </div>:null
                }
                <div className='grid place-content-center rounded-lg overflow-hidden'>
                    <img src={props.songImg} alt="" width={150}/>
                </div>
            </div>
        </div>
        <div className='py-1'>
            <p className='text-lg font-bold'>{props.songName}</p>
            <p className='text-[#A8A8A8]'>{props.artistName}</p>
        </div>
    </div>
  )
}

export default SongCard
