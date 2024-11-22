import React, { useEffect, useState } from 'react';

const FacebookLikeButton = () => {
    const [likeCount, setLikeCount] = useState(null);

    useEffect(() => {
        // Функция для получения данных о лайках с использованием Graph API
        const fetchLikeCount = async () => {
            const url = `https://graph.facebook.com/v21.0/?id=https://www.facebook.com/GekoOnlineEducation&access_token=YOUR_ACCESS_TOKEN`;
            const response = await fetch(url);
            const data = await response.json();
            setLikeCount(data.share.like_count); // Пример получения количества лайков
        };

        fetchLikeCount();
    }, []);

    return (
        <div>
            <p>{likeCount ? `Likes: ${likeCount}` : "Loading likes..."}</p>
            <button
                onClick={() => {
                    // Вы можете реализовать лайк через Graph API или другим способом
                }}
            >
                Like
            </button>
        </div>
    );
};

export default FacebookLikeButton;
