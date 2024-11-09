import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FacebookPageData = ({ token, pageId }) => {
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Функция для получения данных о странице с использованием токена доступа
        const fetchPageData = async () => {
            try {
                const response = await axios.get(`https://graph.facebook.com/${pageId}?access_token=${token}`);
                setPageData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };

        fetchPageData();
    }, [token, pageId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h3>{pageData.name}</h3>
            <p>{pageData.about}</p>
            {/* Можно отобразить другие данные, например количество лайков, подписчиков и т.д. */}
        </div>
    );
};

export default FacebookPageData;
