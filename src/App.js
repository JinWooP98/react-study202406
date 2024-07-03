import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import Events from "./components/RouteExample/pages/Events";
import EventDetail from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";

const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      errorElement:<ErrorPage />,
      children: [
          // 홈페이지의 경우 path를 비워두는 것 보단 index:true로 해주는 것이 더 적합하다.
          {index:true, element: <Home />},
          {
              path:'events',
              element: <EventLayout />,
              children: [
                  {index: true, element: <Events />},
                  {path:':eventId', element: <EventDetail />},
              ]
          },

          // {path:'events/new', element: <EventDetail />},
      ]
    },
]);

const App = () => {

    return (
        <RouterProvider router={router} />
        );

};

export default App;