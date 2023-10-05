import {useState} from 'react'
import billie from '/billie.jpg'
import {AiFillPlayCircle} from 'react-icons/ai'

interface Props{
    artistImg: string,
    artistName: string
}
const ArtistCard = (props:Props) => {
    const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='bg-[#1a1a1a] p-4 rounded-lg cursor-pointer hover:bg-[#393939] max-w-max' onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
        <div className='relative'>
            <div className='relative mb-6'>
                {
                isVisible? <div className='absolute right-0 bottom-0'>
                    <AiFillPlayCircle className="text-6xl text-[#1ED760]"/>
                </div>:null
                }
                <div className='grid place-content-center w-[140px] h-[140px] rounded-full overflow-hidden'>
                    <img src={props.artistImg} alt="" width={140} className='object-contain'/>
                </div>
            </div>
        </div>
        <div>
            <p className='text-lg font-bold'>{props.artistName}</p>
            <p className='text-[#A8A8A8]'>Artist</p>
        </div>
    </div>
  )
}

export default ArtistCard
