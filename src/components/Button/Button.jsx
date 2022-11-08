import React from 'react'
import './Button.css'


const buttonTypes = {
  primary : 'bg-amber-400 text-black',
  success : 'bg-lime-700 text-white',
  danger : 'bg-red-700 text-black',
  transparent: 'bg-transparent text-black border-2 border-black'
}

export default function Button({children, type, backgroundColor, types, onClick}) {
  let mode = buttonTypes[types]

  return (
    <button type={type} className={`mx-1.5 min-w-max  px-2.5  h-9 cursor-pointer rounded-lg hover:shadow-lg ${mode} ${backgroundColor} `}  onClick={(event) => onClick(event)}>
      {children}
    </button>
  )
}
