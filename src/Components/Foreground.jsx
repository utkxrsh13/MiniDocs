import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null)

  const data =[ 
    {
    description: "This is the color of the background",
    filesize: ".6mb",
    close: true,
    tag:{isOpen: true, tagtitle: "Download Now", tagColor:"green"},
  },
    {
    description: "This is the color of the background",
    filesize: ".6mb",
    close: true,
    tag:{isOpen: false, tagtitle: "Download Now", tagColor:"green"},
  },
    {
    description: "This is the color of the background",
    filesize: ".6mb",
    close: true,
    tag:{isOpen: true, tagtitle: "load Now", tagColor:"blue"},
  },
];

  return (
    <div ref = {ref} className='w-full h-full fixed z-[3] top-0 left-0 flex flex-wrap gap-10 p-5'>
      {data.map((item, index)=>(
        <Card data = {item} reference = {ref}/>
      ))}
    </div>
  )
}

export default Foreground