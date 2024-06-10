import ReactDOM from 'react-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, signup, signupCheck } from './Store/LoginSignUpSlice';


const SignupModal = () => {

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [ConfirmPass, setConfirmPass] = useState('');
  const dispatch = useDispatch();
  const sig = useSelector((state) => state.IsLogin.signupp)
  console.log("signup" + "   " + sig);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mail !== '' && pass !== '') {
      let response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBv8SOw4SaNyyIcjL-bEkirn1qxbEDrl80",
        {
          method: "POST",
          body: JSON.stringify({
            email: mail,
            password: pass,
            returnSecureToken: true,
          }),
        }
      );
      let data = await response.json();
      if (data.error) {
        if (data.error.message == "EMAIL_EXISTS") {
          alert(data.error.message)

        }
        return alert(data.error.message);
      }
      else {
        dispatch(signupCheck())
        dispatch(signup({
          token: data.idToken,
          userId: data.localId,
          email: data.email,
        }))
        setMail("")
        setPass("")
        setConfirmPass("")
        alert("Account successfully created.")

      }
    }
  }
  return sig && ReactDOM.createPortal(<>
    <div className='fixed z-10 inset-0 bg-black opacity-90 '>

      <div className="signup_div_form">

        <form data-aos="fade-up" className="signup_form md:gap-10 " onSubmit={handleSubmit}>

          <h1 className="text-3xl text-center font-bold mb-5 ">Signup</h1>


          <div className="mx-auto  flex flex-col gap-8 text-center ">

            <div className="flex flex-col gap-2">

              <label className="font-bold text-4" htmlFor="">Email</label>

              <input className="p-2 text-black  rounded"
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">

              <label className="font-bold text-4" htmlFor="">Password</label>

              <input className="p-2 text-black rounded"
                type="text" value={pass}
                onChange={(e) => setPass(e.target.value)} />
            </div>

            <div className="flex flex-col gap-2">

              <label className="font-bold text-4" htmlFor="">Confirm Password</label>

              <input className="p-2 text-black rounded"
                type="text"
                value={ConfirmPass}
                onChange={(e) => setConfirmPass(e.target.value)} />
            </div>

            <div className="flex justify-between flex-col gap-3">

              <button className="sign_up_btn">Signup</button>

              <button className="p-4  mx-auto hover:text-blue-400"
                onClick={
                  () => {
                    dispatch(login()); dispatch(signupCheck())
                  }
                }>Already have an account, login here.
              </button>


            </div>
          </div>

        </form>
      </div>
    </div>
  </>, document.getElementById('roots'));
}

export default SignupModal;  