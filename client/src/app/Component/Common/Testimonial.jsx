import React from 'react'
import { Link } from 'react-router-dom'

const Testimonial = ({img, title, url}) => {
  return (
    <div>
        <main className="w-full max-w-[26vw] h-16vw relative overflow-hidden">
      <Link to={url} className="w-full relative block">
        <div className="image-container">
          <img src={img} alt={title} className="w-full" />
          <h1 className="font-medium text-white absolute bottom-2vw left-2vw text-[1.5vw]">{title}</h1>
        </div>
      </Link>
    </main>
    </div>
  )
}

export default Testimonial