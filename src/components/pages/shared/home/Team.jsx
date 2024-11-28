import React, {useContext} from 'react';
import {DataContext} from "../../context/DataProvider";
import Carousel from "../Carousel";

export default function Team() {
    const {teams, getImageUrl} = useContext(DataContext);

    const renderThumbnail = (team, index, currentIndex) => (
        <div className={'flex justify-center'}>
            <img
                src={getImageUrl(team?.image)}
                className="rounded-full p-2 border-color86"
                style={{
                    border: index === currentIndex ? '2px dotted rgba(0, 0, 0, 0.5)' : 'none',
                    opacity: index === currentIndex ? '1' : '0.5',
                    width: index === currentIndex ? '130px' : '100px',
                    height: index === currentIndex ? '130px' : '100px',
                    transition: 'all 0.3s ease',
                }}
                alt={`user ${team.translation.name}`}
            />
        </div>
    );

    const renderContent = (team) => (
        <div className="flex justify-center items-center text-center flex-col">
            <p className="mt-5 text-primaryDark font-black text-xl uppercase">{team.translation.name}</p>
            <p className="text-primaryDark text-lg capitalize">{team.translation.role}</p>
            <p className="my-5 text-center text-primaryDark">{team.translation.desc}</p>
        </div>
    );

    return <Carousel items={teams} renderThumbnail={renderThumbnail} renderContent={renderContent}/>;
}
