import { useState } from "react";



const Login = ()=>{
    const [btnNameReact, setBtnNameReact] = useState("Login 😒");

    return <div className="relative right-16 top-3  h-8 max-h-8 w-20 max-w-34 text-center hover:👋">
        <button
            
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login 😒'
                ? setBtnNameReact('Logout 😊')
                : setBtnNameReact('Login 😒');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
    </div>
}

export default Login;