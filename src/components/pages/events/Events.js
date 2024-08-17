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
      <main className="px-5 max-w-[1200px] mx-auto py-20 flex flex-col ">
          <h1 className="text-3xl font-roboto-slab font-bold text-primaryDark">
              Events
          </h1>
          <div className="flex justify-center mb-4 border-b w-full flex-wrap">
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
          <div className="text-start pt-5 ">
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
                                  id={id}
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
