import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LayoutFashion from "./layoutFashion/page.jsx";
import store from "../redux/store";
import { Provider } from "react-redux";
import ProductsFashion from "./productsFashion/page.jsx";
import ThankYouFashion from "./thankYouFashion/page.jsx";
import OrdersFashion from "./ordersFashion/page.jsx";
import ShippingFashion from "./shippingFashion/page.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/page.jsx";
import AddProduct from "./addProductFashion/page";
import ProductsDisplay from "./productsFashion/components/productsDisplay";
import EditProduct from "./editProductFashion/page";
import Login from "./login/page";
import Signup from "./signup/page";
import { Toaster } from "react-hot-toast";
import Categories from "./categories/page.jsx";
import AddCategories from "./addCategories/page";
import CategoriesDisplay from "./categories/components/productsDisplay";
import EditCategories from "./editCategories/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <LayoutFashion />,
        children: [
          {
            path: "products",
            element: <ProductsFashion />,
            children: [
              {
                path: "",
                element: <ProductsDisplay />,
              },
              {
                path: ":id",
                element: <EditProduct />,
              },
              {
                path: "addProduct",
                element: <AddProduct />,
              },
            ],
          },
          {
            path: "categories",
            element: <Categories />,
            children: [
              {
                path: "",
                element: <CategoriesDisplay />,
              },
              {
                path: ":id",
                element: <EditCategories />,
              },
              {
                path: "addProduct",
                element: <AddCategories />,
              },
            ],
          },
          {
            path: "orders",
            element: <OrdersFashion />,
          },
          {
            path: "ThankYou",
            element: <ThankYouFashion />,
          },
          {
            path: "shipping",
            element: <ShippingFashion />,
          },
          // {
          //   path: "addProduct",
          //   element: <AddProduct />,
          // },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
