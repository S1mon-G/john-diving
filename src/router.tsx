import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Diving from "./pages/Diving";


const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/blog", element: <Blog /> },
            { path: "/contact", element: <Contact /> },
            { path: "/diving", element: <Diving /> },

        ]
    }
])

export default router