import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.css'

import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/./HomePage/HomePage.tsx";
import {ParallaxProvider} from "react-scroll-parallax";

ReactDOM
    .createRoot(document.getElementById('root')!)
    .render(
        <React.StrictMode>
            <ParallaxProvider>
                <RouterProvider router={
                    createBrowserRouter(
                        createRoutesFromElements(
                            <Route path="/" element={<HomePage/>}>
                            </Route>
                        )
                    )
                }>
                </RouterProvider>
            </ParallaxProvider>
        </React.StrictMode>
    )
