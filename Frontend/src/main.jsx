import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout/page.jsx";
import HomePage from "./homePage/page.jsx";
import BrandPage from "./brandPage/page.jsx";
import SuperSpecialCategory from "./superSpecialCategory/page.jsx";
import Shop from "./shop/page.jsx";
import Category from "./category/page.jsx"
import Product from "./product/page.jsx";
import Checkout from "./checkout/page.jsx";
import Receipt from "./receipt/page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "../redux/store";
import { Provider } from "react-redux";
import OrderComplete from "./completed/page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "brandpage",
        element: <BrandPage />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/superspecialcategory/:id",
        element: <SuperSpecialCategory />,
      },
      {
        path: "/shop/:id",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "complete",
        element: <OrderComplete />,
      },
      {
        path: "/receipt/:id",
        element: <Receipt />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
