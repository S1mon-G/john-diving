import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Privacy from "./pages/Privacy"
import Spot from "./pages/Spots/Spots";

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/contact", element: <Contact /> },
            { path: "/privacy", element: <Privacy /> },
            { path: "/playa-del-carmen", element: <Spot /> },]
    }])

export default router