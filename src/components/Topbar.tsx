import React from 'react'
// import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md'
import {AiOutlineBell} from 'react-icons/ai'
import {IoPeopleOutline} from 'react-icons/io5'

interface Props{
  hasColor:boolean
}
const Topbar = (props: Props) => {
  return (
    <div className={`fixed ml-[320px] lg:ml-[440px] top-0 w-[77%] px-5 pt-6 pb-3 z-50 ${ props.hasColor? "bg-black": null} duration-150`}>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2'>
                <div className='p-1.5 bg-[black] rounded-full'>
                  <MdArrowBackIosNew className="text-xl text-white"/>
                </div>
                <div className='p-1.5 bg-[black] rounded-full'>
                  <MdArrowForwardIos className="text-xl text-white"/>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='bg-white rounded-2xl px-3 py-1 font-semibold text-sm'>Explore Premium</div>
                <div className='bg-[#121212] text-white p-1 rounded-full'><AiOutlineBell className="text-2xl"/></div>
                <div className='bg-[#121212] text-white p-1 rounded-full'><IoPeopleOutline className="text-2xl"/></div>
                <div className='bg-[#121212] text-white p-1 rounded-full'><AiOutlineBell className="text-2xl"/></div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
