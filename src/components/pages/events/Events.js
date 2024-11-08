import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Event from '../shared/event/Event';
import { useTranslation } from 'react-i18next';
import { DataContext } from "../context/DataProvider";

export default function Events() {
    const { t } = useTranslation();
    const { events } = useContext(DataContext);
    const { tab } = useParams(); // Get the active tab from the URL
    const navigate = useNavigate(); // To update the URL when changing the tab

    const tabs = [
        { title: 'happening', id: 1 },
        { title: 'upcoming', id: 2 },
        { title: 'completed', id: 3 },
    ];
    console.log(tab)
    // Set activeTab based on the tab in the URL or default to 'completed'
    const [activeTab, setActiveTab] = useState(tab || 'completed');
    console.log(activeTab)
    // Update the URL when the activeTab changes
    useEffect(() => {
        // Only update the URL if the active tab changes and is different from the current tab in the URL
        if (tab !== activeTab) {
            navigate(`/events/${activeTab}`, { replace: true });
        }
    }, [activeTab, tab, navigate]);

    return (
        <main className="px-5 center:max-w-[1200px] max-w-full mx-auto py-20 flex flex-col">
            <h1 className="text-3xl font-roboto-slab font-bold text-primaryDark">
                {t('EVENTS')}
            </h1>
            <div className="flex justify-center mb-4 border-b w-full flex-wrap">
                {tabs.map((tabItem) => (
                    <button
                        key={tabItem.id}
                        className={`${
                            activeTab === tabItem.title
                                ? 'border-b-2 border-primary text-primary'
                                : 'text-gray-500'
                        } focus:outline-none font-roboto-slab font-bold text-xl mx-10 pb-2 capitalize`}
                        onClick={() => setActiveTab(tabItem.title)} // Set active tab on click
                    >
                        {t(tabItem.title)}
                    </button>
                ))}
            </div>
            {events?.map((pickedEvent) => {
                return (
                    pickedEvent.status === activeTab && (
                        <Event key={pickedEvent.id} pickedEvent={pickedEvent} />
                    )
                );
            })}
        </main>
    );
}
