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
                // const response = await fetch(`http://127.0.0.1:8000/api/events/?language=${language}`);
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
            {
                eventsArray?.map(({ id, status, day, month, hour, event_galleries, translation }) => {
                    return (
                        status === activeTab && (
                            <Event
                                key={id} // Убедитесь, что вы добавляете уникальный ключ
                                id={id}
                                day={day}
                                month={month}
                                title={translation?.title || 'No Title'} // Добавьте проверку на существование
                                hour={hour}
                                place={translation?.place || 'No Place'} // Добавьте проверку на существование
                                description={translation?.description || 'No Description'} // Добавьте проверку на существование
                                event_galleries={event_galleries}
                            />
                        )
                    );
                })
            }
        </main>
    )
}
