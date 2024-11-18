import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routesArray } from './entities/routesArray';
import PageUpButton from './components/pages/shared/PageUpButton';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Error404 from './components/pages/shared/Error';
import CoursePage from './components/pages/courses/[id]';
import Courses from './components/pages/courses/Courses';
import EventsPage from './components/pages/events/[id]';
import Events from './components/pages/events/Events';

function App() {
    const { pathname } = useLocation();

    // Эффект для скроллинга страницы в начало при изменении маршрута
    useEffect(() => {
        window.scrollTo(0, 0);  // Сбрасываем скролл в начало страницы
    }, [pathname]);

    return (
        <div className="App">
            <PageUpButton />
            <Header />
            <Routes>
                {/* Маршруты для страниц с динамическими параметрами */}
                <Route path="/events/:tab/:id" element={<EventsPage />} />
                <Route path="/events/:tab" element={<Events />} />
                <Route path="/courses/:id" element={<CoursePage />} />
                <Route path="/course-category/:id" element={<Courses />} />

                {/* Динамически генерируем маршруты из массива */}
                {routesArray.map((route) => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<route.component />}  // Здесь рендерим компонент для маршрута
                    />
                ))}

                {/* Страница ошибки 404, если маршрут не найден */}
                <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
