import React from 'react'
import {GoHomeFill} from 'react-icons/go'
import {FiSearch} from 'react-icons/fi'
import Library from '../components/Library'
const Sidebar = () => {
  return (
    <div className='fixed  w-[320px] h-screen bg-black overflow-hidden z-50 lg:w-[440px]'>
      <div className='w-full p-2'>
        <div className='w-full bg-[#121212] p-4 px-6 rounded-lg flex flex-col gap-5'>
            <div className='flex gap-4 text-white items-center'>
                <GoHomeFill className="text-3xl"/>
                <p className='font-semibold'>Home</p>
            </div>
            <div className='flex gap-4 items-center text-[#B3B3B3] hover:text-white duration-300 cursor-pointer'>
                <FiSearch className="text-[1.6rem]"/>
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='h-full'>
            <Library />
        </div>
      </div>
      <div className='w-full p-3'>

      </div>
    </div>
  )
}

export default Sidebar
