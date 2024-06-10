import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import ErrorComponent from "./src/Components/ErrorComponent/ErrorComponent";
import Body from "./src/Components/Home/Body";
import ForgotPassword from "./src/Components/ForgotPassword";
import AddExpenses from "./src/Components/Add-Expenses/AddExpenses";
import Profile from "./src/Components/Profile/Profile";


const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [

            {
                path: "/",
                element: <Body />
            },

            ,
            {
                path: "/AddExpenses",
                element: <AddExpenses />
            },
            {
                path: "/Profile",
                element: <Profile />
            },


        ],
        errorElement: <ErrorComponent />
    },

    {
        path: "/forget",
        element: <ForgotPassword />
    },


])

export default AppRouter;