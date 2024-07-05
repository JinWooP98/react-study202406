import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import Events from "./components/RouteExample/pages/Events";
import EventDetail, {loader as eventDetailLoader, action as deleteAciton} from "./components/RouteExample/pages/EventDetail";
import EventLayout from "./components/RouteExample/layout/EventLayout";
import NewEvent from "./components/RouteExample/pages/NewEvent";
import EditPage from "./components/RouteExample/pages/EditPage";
import {action as manipulateAction} from "./components/RouteExample/components/EventForm";

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
                  {
                      index: true,
                      element: <Events />,
                      // loader: eventListLoader,
                  },
                  {
                      path:':eventId',
                      // element: <EventDetail />,
                      // loader가 childeren에게 직접적으로 연결되지 않아
                      // EventDetail에서 loader를 사용하지 못하고 있음
                      loader: eventDetailLoader,
                      id: 'event-detail', // loader에 id 부여
                      children: [
                          {index:true, element: <EventDetail />, action: deleteAciton},
                          {path: 'edit', element: <EditPage />, action:manipulateAction},
                      ]
                  },
                  {
                      path: 'new',
                      element: <NewEvent />,
                      action: manipulateAction
                  },
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