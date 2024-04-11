import React from 'react'

export default function AboutCard2({ title, desc, image }) {
  return (
    <article className="mx-5 relative my-5 mid:w-full  w-[350px] gap-3  min-h-[200px] bg-none  overflow-hidden flex flex-col justify-center items-start">
      <img src={image} alt="article" />
        <h1 className="text-xl font-roboto-slab font-bold text-primeryDark">
          {title}
        </h1>
        <p className="text-md text-left text-secondaryLight">{desc}</p>
    </article>
  )
}
