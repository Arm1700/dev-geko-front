import React from 'react';

export default function Course({ image, text }) {
  return (
    <article className="cursor-pointer img-wrapper mx-5 relative w-[200px] h-[200px] bg-primary rounded-lg overflow-hidden flex flex-col justify-center items-center">
      <img className="inner-img absolute inset-0 w-full h-full object-cover" src={image} alt="Course" style={{ filter: 'brightness(50%)' }} />
      <p className="absolute font-bold text-pseudo hover:text-primary text-lg top-[43%] left-[33%] transform translate(-50%, -50%) z-50">{text}</p>
    </article>
  );
}
