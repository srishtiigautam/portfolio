import React from 'react'

const Button = ({label}) => {
  return (
    <button className='bg-pink-600 py-2 px-4 text-white rounded-md'>
      {label}
    </button>
  )
}

export default Button