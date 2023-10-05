import {BiLibrary} from 'react-icons/bi'
import {BsPlusLg} from 'react-icons/bs'
import {AiOutlineArrowRight, AiOutlineUnorderedList, AiFillPushpin} from 'react-icons/ai'
import {FiSearch} from 'react-icons/fi'
import likedSongsImg from '../public/likedSongs.jpg'

const Library = () => {
  return (
    <div className='mt-2 bg-[#121212] h-[790px] flex-1 rounded-xl'>
            <div className='flex justify-between items-center py-4 px-6'>
                <div className='flex gap-2 text-[#B3B3B3] items-center hover:text-white duration-300 cursor-pointer'>
                    <BiLibrary className="text-[1.7rem]"/>
                    <p className='font-bold'>Your Library</p>
                </div>
                <div className='flex gap-3'>
                    <div className='rounded-full p-1 cursor-pointer text-[#B3B3B3] hover:bg-[#252525] hover:text-white'>
                        <BsPlusLg className="text-[1.3rem]"/>
                    </div>
                    <div className=' rounded-full p-1 text-[#B3B3B3] cursor-pointer hover:bg-[#252525] hover:text-white'>
                        <AiOutlineArrowRight className="text-[1.3rem]"/>
                    </div>
                </div>
            </div>

            <div className='px-5 mt-1'>
                <div className='bg-[#252525] text-white py-1.5 px-3 max-w-max rounded-2xl'>
                    <p className='text-sm font-semibold'>Playlists</p>
                </div>
                <div className='mt-3 py-1 px-2 flex justify-between items-center'>
                    <FiSearch className="text-[1.15rem] text-[#B3B3B3]"/>
                    <div className='flex gap-2 text-[#B3B3B3] items-center'>
                        <p className='text-sm'>Recents</p>
                        <AiOutlineUnorderedList className="text-xl"/>
                    </div>
                </div>
                {/* Liked Songs */}
                <div className='flex items-center gap-3 mt-4'>
                        <img src={likedSongsImg} alt="" width={50} className='rounded-md'/>
                        <div>
                            <p className='text-white font-semibold'>Liked Songs</p>
                            <p className='text-[#B3B3B3]'><div className='flex items-center gap-2'><AiFillPushpin className="text-[#1ED760]"/> Playlist . 0 songs</div></p>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Library
