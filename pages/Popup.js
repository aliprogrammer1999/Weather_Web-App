import React from 'react'
import { MdOutlineLocationOff } from 'react-icons/md'
import { motion } from 'framer-motion'


function Popup(props) {

  return (
    <div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.5 }}
      transition={{ duration: 3}}
      className='absolute flex flex-col gap-5 justify-center font-bold items-center top-[20%] w-[60%] lg:w-1/2 left-1/2 translate-x-[-50%] h-[200px] bg-white rounded-md shadow'>
      <h1 className='flex justify-center items-center gap-2'>
        <MdOutlineLocationOff className='text-3xl text-red-700 ' /> We cannt found your loaction pleace try again
      </h1>
      <button onClick={props.close} className='bg-yellow-400 p-2 rounded-md'>try again</button>
    </div>
  )
}

export default Popup