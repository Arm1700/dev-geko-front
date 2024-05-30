import React from 'react';

export default function ContactInfo({ Icon, title, description, color }) {
  const dynamicStyles = {
    border: `1px solid ${color}`,
    borderBottom: `4px solid ${color}`,

  };

  return (
    <div
      className={`flex px-5 py-10 w-full md:w-[300px] mid:aspect-square aspect-auto m-4 border-gray-300 hover:border-b rounded-lg transition-all duration-300 flex-col items-center gap-4`}
      style={dynamicStyles }
    >
      <Icon className={`text-4xl`}  style={{color}}/>
      <b className="text-bold text-xl">{title}</b>
      <p className="text-color60 text-custom-15 text-center">{description}</p>
    </div>
  );
}
