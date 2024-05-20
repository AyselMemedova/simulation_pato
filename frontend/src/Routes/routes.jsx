
import AdminRoot from "../pages/admin/AdminRoot"
import Dashboard from "../pages/admin/dashboard/dashboard"
import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import About from "../pages/site/About/About"
import Home from "../pages/site/Home/Home"
import Product from "../pages/admin/Product/Product"
import Detail from "../pages/site/detail/Detail"

const ROUTES = [
    {
        path: "/",
        element: <SiteRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            }

        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "add",
                element: <Add />
            },

            {
                path: "product",
                element: <Product />
            }
        ]
    }
    , {
        path: "*",
        element: <Error />,

    },
]
export default ROUTES;