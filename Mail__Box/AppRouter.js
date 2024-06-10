import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./src/Components/ErrorComponent/ErrorComponent";
import ForgotPassword from "./src/Components/ForgotPassword";
import AddExpenses from "./src/Components/Add-Expenses/AddExpenses";
import Profile from "./src/Components/Profile/Profile";
import Menu from "./src/Menu_Page/Menu";
import Inbox from "./src/Components/Home/Inbox";
import Send from "./src/Components/Home/Send";
import Starred from "/src/Components/Home/Starred";




export const AppLayout = () => {


  
    return (
      <div className="app">
        <Menu />
        <Outlet />
      </div>
    );
  };





const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [

            {
                path: "/Inbox",
                element: <Inbox />
            },
            {
                path: "/Starred",
                element: <Starred/>
            },
            {
                path: "/Send",
                element: <Send />
            }



        ],
        errorElement: <ErrorComponent />
    },
  

    {
        path: "/forget",
        element: <ForgotPassword />
    },

    {
        path: "/Profile",
        element: <Profile />
    },


])



export default AppRouter;