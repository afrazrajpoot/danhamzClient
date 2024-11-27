import React from 'react'
import { Icon } from '@iconify/react'
const Loader = () => {
  return (
  <div className="w-full h-screen flex justify-center items-center">
    <Icon className={`w-[3.5vw] h-[3.5vw] animate-spin text-amber-600`} icon="bx:loader-circle" />
  </div>
  )
}

export default Loader