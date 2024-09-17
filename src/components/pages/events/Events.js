import React, {useEffect, useState} from 'react'
import Event from '../shared/event/Event'
import {useTranslation} from 'react-i18next';

export default function Events() {
    const [activeTab, setActiveTab] = useState('happening')

    const tabs = [
        {title: 'happening', id: 1},
        {title: 'upcoming', id: 2},
        {title: 'completed', id: 3},
    ]

    const {t, i18n} = useTranslation();
    const language = i18n.language;
    const [eventsArray, setEventsArray] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`https://dev.gekoeducation.com/api/events/?language=${language}`);
                const data = await response.json();
                console.log(data);
                setEventsArray(data); // Сохранение курсов в состояние
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, [language]);
    return (
        <main className="px-5 max-w-[1200px] mx-auto py-20 flex flex-col ">
            <h1 className="text-3xl font-roboto-slab font-bold text-primaryDark">
                {t('EVENTS')}
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
                        {t(tab.title)}
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
                         hour,
                         image,
                         translation
                     }) => {
                        return (
                            status === activeTab && (
                                <Event
                                    id={id}
                                    day={day}
                                    month={month}
                                    title={translation.title}
                                    hour={hour}
                                    place={translation.place}
                                    description={translation.description}
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
