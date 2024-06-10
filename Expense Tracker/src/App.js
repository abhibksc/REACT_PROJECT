import Header from "./Components/HeaderComponent/Header";
import Effects from "../Effects";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";



function App() {

  const token_Id = useSelector((state) => state.auth.token)
  const isLogin = useSelector((state) => state.IsLogin.login);
  const sig = useSelector((state) => state.IsLogin.signupp)



  Effects();

  const handleVerifyMail = async () => {

    try {
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBv8SOw4SaNyyIcjL-bEkirn1qxbEDrl80",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "VERIFY_EMAIL",
            idToken: token_Id,
            returnSecureToken: true,
          }),
        }
      );
      let data = await response.json();

      if (data.error) return alert(data.error.message);
      else {

        alert(
          "We have send you the verification link on your registered email. Please click on that link to verify your email. after verification Please login again."
        );
        navigate("/");
      }
    } catch (err) {
    }
  };
  return (

    <div className="div_1">

      <div >
        <Header />
        {
          <div className="div_11">
            <ul className='flex gap-5   '>
              {(isLogin) && <div className="flex gap-5 ">
                <li><Link to={"/"}> EXPENSES</Link></li>
                <li><Link to={"/AddExpenses"}> ADD</Link></li>
                <li><Link to={"/Profile"}> PROFILE</Link></li>
              </div>}
            </ul>
          </div>
        }

        {<Outlet />}
        <div className=" div_12">
          <div className="div_13">
            <h1 className="font-bold text-amber-400">VERIFY YOUR EMAIL ADDRESS</h1>
            <p>Welcome to Expense Tracker App!</p>
            <p>Please click the button belowto confirm the email address and activate your account.</p>
            <button className="emailbtn" onClick={() => handleVerifyMail()} >CONFIRM EMAIL</button>

          </div>
        </div>
      </div>
    </div>
  );
}



export default App;















