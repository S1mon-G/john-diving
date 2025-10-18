import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy"

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/contact", element: <Contact /> },
            { path: "/privacy", element: <Privacy /> }
        ]
    }
])

export default router