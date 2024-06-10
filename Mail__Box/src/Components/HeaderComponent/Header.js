import { Link, useNavigate } from 'react-router-dom';
import LoginModal from '../../LoginModal';
import SignupModal from '../../SignupModal';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../Store/LoginSignUpSlice';


const Header = () => {

  const navigate = useNavigate()
  const isLogin = useSelector((state) => state.IsLogin.login);
  const dispatch = useDispatch();

  let handleLogout = ()=>{

    dispatch(login());

    dispatch(logout({
      token : "",
      userId : "",
      email : "",
      name : "",
      image : ""
    }));

    navigate("/")



  



  }

  return (
    <nav className=" nav flex flex-wrap">
    <div className='flex justify-around gap-20'>
      <span className="ml-6 lg:text-4xl">💸<span className=" font-bold underline">Expense Tracker</span></span>
      {isLogin && <span className=' md:hidden cursor-pointer' onClick={handleLogout} > LOGOUT</span>}
    </div>


      <div className='hidden md:block'>
        <ul className='flex gap-5  '>
          <li><Link to={"/"}> EXPENSES</Link></li>
          <li><Link to={"/AddExpenses"}> ADD</Link></li>
          <li><Link to={"/Profile"}> PROFILE</Link></li>


          {isLogin && <li className='cursor-pointer' onClick={handleLogout} > LOGOUT</li>}


          

        </ul>
      </div>

      <LoginModal/>
      <SignupModal/>



      <div className=' flex'> </div>

    </nav>
  );
}

export default Header;
