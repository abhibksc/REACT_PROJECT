import {  useState } from "react"
import { useNavigate } from "react-router-dom";



const ForgotPassword = () => {


    const [Email, setEmail] = useState('');
    const navigate = useNavigate();


    const HandleForgotPassword = async (e) => {
        e.preventDefault();

        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBv8SOw4SaNyyIcjL-bEkirn1qxbEDrl80", {
            method: "POST",
            body: JSON.stringify({
                "requestType": "PASSWORD_RESET",
                email: Email

            }),
        })

        let data = await response.json();

        if (data.error) return alert(data.error.message);
        else {
            alert("please check Your email")
            console.log(data);
            navigate("/")
            
        }
    }


    return <div className="div_23">
        <form onSubmit={HandleForgotPassword}  
        className=" div_24">
        <h1 className="text-xl font-bold ">Enter email to set the new Password</h1>
        <input className="div_25" 
        type="email" 
        value={Email} 
        onChange={(e) => setEmail(e.target.value)} />
        <button className="div_26">Submit</button>
    </form>
    </div>
}

export default ForgotPassword;