import React from "react";
import ReactDOM from "react-dom/client";
import '../index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Header} from "../src/components/Header";
import Body from "../src/components/Body";
import About from "./components/About";
import {Contact} from "./components/Contact" 

const AppLayout = () => {
    return (
    <>
        <div className="App">
            <Header />
            <Body />
        </div>
    </>
    )
}

const appRouter = createBrowserRouter([
    { 
        path: "/",
        element: <AppLayout />
    }, 
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);