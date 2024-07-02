import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/./HomePage/HomePage.tsx";

ReactDOM
    .createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <div id={"background"} />
            <RouterProvider router={
                createBrowserRouter(
                    createRoutesFromElements(
                        <Route path="/" element={<HomePage/>}>
                        </Route>
                    )
                )
            }>
            </RouterProvider>
        </React.StrictMode>
    )
