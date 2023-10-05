import AfterHours from '../public/afterHours.png'
import {AiOutlineHeart} from 'react-icons/ai'
const AlbumDesc = () => {
  return (
    <div className='flex items-center text-white gap-4'>
            <img src={AfterHours} alt="" width={55} className='rounded-lg'/>
            <div className='flex flex-col'>
                <p className='text-sm font-semibold'>After Hours</p>
                <p className='text-[0.75rem] text-[#A8A8A8]'>The Weeknd</p>
            </div>
            <AiOutlineHeart className="ml-1 text-lg"/>
        </div>
  )
}

export default AlbumDesc
