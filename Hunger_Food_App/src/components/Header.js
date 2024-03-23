import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Header = () => {
  //   let btnName = 'Login';

  const status = useOnline()

  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('header render');

  return (
    <header className="flex justify-between  shadow-m">
      <div className="p-3">
        {/* <img src={LOGO_URL} alt="App Logo" className="w-24 p-3 m-2 relative left-7" /> */}
        <h1 className="text-3xl font-extrabold text-red-900 relative left-7 top-5 border-y-4">Hunger</h1>
      </div>
      <div className="m-5">
        <ul className="flex justify-between p-5 m-2 gap-5 text-center  rounded-md">
          <li>Online Status : {status ? "✅" : "🔴"}</li>
          <li className='shadow-xl rounded-sm  w-20 bg-gray-0 hover:bg-orange-700 ... transition-transform duration-300 hover:scale-95'><Link to="/">Home</Link></li>  
          <li className='shadow-xl rounded-sm  w-20 bg-gray-0 hover:bg-orange-700 ... transition-transform duration-300 hover:scale-90 '><Link to="/about">about</Link></li>  
          <li className='shadow-xl rounded-sm  w-20 bg-gray-0 hover:bg-orange-700 ... transition-transform duration-300 hover:scale-95'><Link to="/contact">contact</Link></li>  
          <li className='shadow-xl rounded-sm  w-20 bg-gray-0 hover:bg-orange-700 ... transition-transform duration-300 hover:scale-95'>Cart</li>
          <button
            className=" w-20 rounded-md bg-gray-0 hover:bg-orange-800 ... "
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
