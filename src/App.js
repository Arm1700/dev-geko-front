import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { routesArray } from './entities/routesArray'
import PageUpButton from './components/pages/shared/PageUpButton'
import CoursePage from './components/pages/courses/[id]'

function App() {
  return (
    <div className="App">
      <PageUpButton />
      <Header />

      <Routes>
        {routesArray.map(route => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
            exact
          />
        ))}
        <Route key={100} path={'/courses/:id'} element={<CoursePage />} exact />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
