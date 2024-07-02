import React from 'react';
import Home from "./components/RouteExample/pages/Home";
import Products from "./components/RouteExample/pages/Products";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RouteExample/layout/RootLayout";
import ErrorPage from "./components/RouteExample/pages/ErrorPage";
import ProductDetail from "./components/RouteExample/pages/ProductDetail";

const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      errorElement:<ErrorPage />,
      children: [
          // 홈페이지의 경우 path를 비워두는 것 보단 index:true로 해주는 것이 더 적합하다.
          {index:true, element: <Home />},
          {path:'products', element: <Products />},
          {path:'products/:prodId/page/:pageNo', element: <ProductDetail />},
      ]
    },
]);

const App = () => {

    return (
        <RouterProvider router={router} />
        );

};

export default App;