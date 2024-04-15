import React, { useState } from 'react'
import eventsArray from '../../../entities/eventsArray'
import Event from '../shared/event/Event'

export default function Events() {
  const [activeTab, setActiveTab] = useState('happening')

  const tabs = [
    { title: 'happening', id: 1 },
    { title: 'upcoming', id: 2 },
    { title: 'expired', id: 3 },
  ]

  return (
    <main className="flex lg:px-20 px-5 py-5 flex-col items-center">
      <div className="flex justify-center mb-4 border-b w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab === tab.title
                ? 'border-b-2 border-primary  text-primary'
                : 'text-gray-500 '
            } focus:outline-none font-roboto-slab font-bold text-xl mx-10 pb-2 capitalize `}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="text-start min-h-[60vh] lg:px-20 px-5 pt-5 ">
        {eventsArray.map(
          ({
            id,
            status,
            day,
            month,
            title,
            hour,
            place,
            description,
            image,
          }) => {
            return (
              status === activeTab && (
                <Event
                  key={id}
                  day={day}
                  month={month}
                  title={title}
                  hour={hour}
                  place={place}
                  description={description}
                  image={image}
                />
              )
            )
          },
        )}
      </div>
    </main>
  )
}
