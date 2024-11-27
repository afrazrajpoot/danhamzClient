import React from 'react'

const Banner = ({title, info, bg_color, title_color, info_color}) => {
  return (
    <div>
        <section className="w-full">
            <main className={`${bg_color} col-center w-full p-3vw`}>
                <h1 className={`${title_color} text-[2.5vw] font-medium`}>{title}</h1>
                <p className={`${info_color} mt-0.5vw text-[1.3vw] text-center w-full max-w-[50vw] font-medium`}>{info}</p>
            </main>
        </section>
    </div>
  )
}

export default Banner