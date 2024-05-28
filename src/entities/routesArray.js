import AboutUs from '../components/pages/about/AboutUs'
// import Blog from "../components/pages/blog/Blog";
import Contacts from '../components/pages/contacts/Contacts'
import Courses from '../components/pages/courses/Courses'
import Events from '../components/pages/events/Events'
// import Terminates from "../components/pages/terminates/Terminates";
import Home from '../components/pages/home/Home'

export const routesArray = [
  {
    id: 1,
    name: 'HOME',
    component: Home,
    path: '/',
  },
  {
    id: 2,
    name: 'ABOUT_US',
    component: AboutUs,
    path: '/about-us',
  },
  // {
  //   id: 3,
  //   name: 'BLOG',
  //   component: Blog,
  //   path: '/blog',
  // },
  {
    id: 4,
    name: 'CONTACTS',
    component: Contacts,
    path: '/contacts',
  },
  {
    id: 5,
    name: 'COURSES',
    component: Courses,
    path: '/course-category',
  },
  {
    id: 6,
    name: 'EVENTS',
    component: Events,
    path: '/events',
  },
  // {
  //   id: 7,
  //   name: 'TERMINATES',
  //   component: Terminates,
  //   path: '/terminates',
  // },
]
