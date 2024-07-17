import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"



function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 10}} className='relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/70 text-white py-8 px-5 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm leading-tight font-semibold mt-5'>{data.description}</p>

      <div className='footer absolute bottom-0 left-0 w-full'>
        <div className='flex items-center justify-between mb-2 py-3 px-8'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close? <IoIosCloseCircle size="1em" color='white'/>:<LuDownload size=".7em" color='black'/>}
            
            </span>
        </div>

        {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor ==="blue"? "bg-blue-600":"bg-green-600"} flex justify-center items-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
          </div>
        )}  
        

      </div>
      </motion.div>
  )
}

export default Card