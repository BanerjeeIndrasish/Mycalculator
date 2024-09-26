import React from 'react'

export default function Button({value, handleClick}) {
  return (
    <button className='w-16 h-16 bg-white m-1 text-center text-2xl rounded-md'
    onClick={handleClick}>
      {value}
    </button>
  )
}
