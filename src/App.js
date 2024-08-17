import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes, useLocation} from 'react-router-dom';
import {routesArray} from './entities/routesArray';
import PageUpButton from './components/pages/shared/PageUpButton';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Error404 from "./components/pages/shared/Error";
import CoursePage from "./components/pages/courses/[id]";
import Courses from "./components/pages/courses/Courses";
import EventsPage from "./components/pages/events/[id]";

// import ComingSoonPage from "./components/pages/coming/ComingSoonPage";

function App() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        // <Routes>
        //     <Route  path="*" element={<ComingSoonPage />} />
        // </Routes>
        <div className="App">
            <PageUpButton/>
            <Header/>
            <Routes>
                <Route path="/events/:id" element={<EventsPage/>}/>
                <Route path="/courses/:id" element={<CoursePage/>}/>
                <Route path="/course-category/:id" element={<Courses/>}/>
                {routesArray.map(route => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<route.component/>}
                        exact
                    />
                ))}
                <Route path="*" element={<Error404/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
