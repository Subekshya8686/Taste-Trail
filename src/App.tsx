import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User_Login from "./pages/User_Login.tsx";


const router  =createBrowserRouter(
    [
        {
            path:"/login",
            element:<User_Login/>
        },
    ]
)

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
