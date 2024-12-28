import React from 'react'

const Button = ({label, className="bg-pink-600 text-white"}) => {
  return (
    <button className={`py-2 px-4 rounded-md ${className}`}>
      {label}
    </button>
  )
}

export default Button