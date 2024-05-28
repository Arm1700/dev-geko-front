import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routesArray } from './entities/routesArray';
import PageUpButton from './components/pages/shared/PageUpButton';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Error404 from "./components/pages/shared/Error";
import CoursePage from "./components/pages/courses/[id]";
import CourseCategoryPage from "./components/pages/shared/home/[id]";
import Courses from "./components/pages/courses/Courses";


function App() {
    return (
        <div className="App">
            <PageUpButton />
            <Header />
            <Routes>
                <Route path="/courses/:id" element={<CoursePage />} />
                <Route path="/course-category/:id" element={<Courses />} />
                {routesArray.map(route => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<route.component />}
                        exact
                    />
                ))}
                <Route path="*" element={<Error404 />} /> {/* Добавляем маршрут для страницы NotFound */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
