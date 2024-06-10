import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../ContextAPI.js/Context';
import Cartz from '../Cartz/Cartz';
import Login from './Login';


const Header = ()=>{
    const {cartCount, setShowCart} = useContext(Context);


    
    return <nav className=" nav">
        <h1 className="ml-36 font-bold underline text-3xl">👟ShoeHouse</h1>
        <div className='flex '>
        <div className="flex cursor-pointer justify-around p-2 w-64 mr-32 rounded-full border bg-red-800" onClick={()=>setShowCart(true)}>
            <span><FontAwesomeIcon icon={faShoppingCart}/></span>
            <span className='font-bold'>Your Cart</span>
            <span className='relative right-8 rounded-xl border px-2'>{cartCount}</span>
        
        </div>
        
        <Cartz/>
        <Login/>
        </div>
    </nav>



}

export default Header;