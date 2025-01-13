import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Tasks from "@/pages/tasks";
import { createBrowserRouter } from 'react-router-dom';
// import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
       index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/tasks',
        element: <Tasks />
      }
    ]
  },
])


export default routes;