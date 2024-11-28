import React, {useContext} from 'react';
import {DataContext} from "../../context/DataProvider";
import Carousel from "../Carousel";

export default function Review() {
    const {reviews, getImageUrl} = useContext(DataContext);

    const renderThumbnail = (review, index, currentIndex) => (
        <div className={'flex justify-center'}>
            <img
                src={getImageUrl(review?.image)}
                className="rounded-full p-2 border-color86"
                style={{
                    border: index === currentIndex ? '2px dotted rgba(0, 0, 0, 0.5)' : 'none',
                    opacity: index === currentIndex ? '1' : '0.5',
                    width: index === currentIndex ? '130px' : '100px',
                    height: index === currentIndex ? '130px' : '100px',
                    transition: 'all 0.3s ease',
                }}
                alt={`user ${review.name}`}
            />
        </div>
    );

    const renderContent = (review) => (
        <div className="flex justify-center items-center text-center flex-col">
            <p className="mt-5 text-primaryDark font-bold text-lg">{review.name}</p>
            <p className="mb-7 text-center text-primaryDark">{review.comment}</p>
        </div>
    );

    return <Carousel items={reviews} renderThumbnail={renderThumbnail} renderContent={renderContent}/>;
}
