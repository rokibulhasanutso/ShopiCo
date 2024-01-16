import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from './../pages/notFound/NotFound';
import Home from './../pages/home/Home';
import Signup from "../pages/auth/Signup";
import Signin from "../pages/auth/Signin";

const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                path: "/", element: <Home/>
            },
            {
                path: "auth/signup", element: <Signup/>
            },
            {
                path: "auth/signin", element: <Signin/>
            }
        ]
    }
])

export default mainRoute