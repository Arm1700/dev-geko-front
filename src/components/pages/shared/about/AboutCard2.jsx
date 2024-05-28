import React from 'react'

export default function AboutCard2({ title, desc, image }) {
  return (
    <article className=" relative my-5 gap-3  min-h-[200px] bg-none  overflow-hidden flex flex-col justify-center items-start">
      <img src={image} alt="article" />
        <h1 className="text-xl font-roboto-slab font-bold text-primaryDark">
          {title}
        </h1>
        <p className="text-md text-left text-secondaryLight">{desc}</p>
    </article>
  )
}
