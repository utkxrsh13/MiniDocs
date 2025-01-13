import React, { useRef, useState } from 'react'
import Card from './Card'
import { BackgroundBeamsWithCollision } from './BgwithBeams';

function Foreground() {
  const ref = useRef(null)
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleAddCard = () => {
    if (text.trim() !== "") {
      setData([...data, text]);
      setText("");
    }
  };

  // const data = [
  //   {
  //     description: "This is the color of the background",
  //     filesize: ".6mb",
  //     close: true,
  //     tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green" },
  //   },
  //   {
  //     description: "This is the color of the background",
  //     filesize: ".6mb",
  //     close: true,
  //     tag: { isOpen: true, tagtitle: "Download Now", tagColor: "green" },
  //   },
  //   {
  //     description: "This is the color of the background",
  //     filesize: ".6mb",
  //     close: true,
  //     tag: { isOpen: true, tagtitle: "load Now", tagColor: "blue" },
  //   },
  // ];

  return (
    <>
      <BackgroundBeamsWithCollision
      />
      <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex flex-wrap gap-10 p-5'>
        <div>
        <input
        className='px-2 text-black font-semibold text-xl'
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text"
        />
        <button className='text-white border ml-2 px-2 font-semibold' onClick={handleAddCard}>Add Card</button>
        </div>
        {data.map((item, index) => (
          <Card data={item} key={index} reference={ref} />
        ))}
      </div>

    </>
  )
}

export default Foreground