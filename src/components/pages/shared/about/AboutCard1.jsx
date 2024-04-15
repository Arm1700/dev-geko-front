import React from 'react';

export default function AboutCard1({
  Icon,
  count,
  color,
  title,
  space ,
}) {
  const cardStyles = {
    border: `1px solid ${color}`,
    marginBottom: space,
    color: color,
    ':hover': { 
      border: `1px solid ${color}`,
    },
  };

  return (
    <article
      style={cardStyles} 
      className={`my-2 mid:w-full ${space ? '' : 'mid:mb-10'}  h-[max-content] border-b border-gray-300 rounded-lg transition-all duration-300 p-16 mid:mt-0 mx-3 flex flex-col items-center justify-around gap-2`}
    >
      <Icon
        style={{ fontSize: '4rem', marginBottom: '0.5rem', color: color }} // Apply dynamic styles to Icon
      />
      <span className="text-lg text-5xl">{count}</span>
      <span className="text-md capitalize text-secondaryLight">{title}</span>
    </article>
  );
}
