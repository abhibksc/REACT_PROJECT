import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../Context';
import Cart from '../Cartz/Cart';


const Header = ()=>{
    const {Cart_Count, setShowCart} = useContext(Context);


    
    return <nav 
    className=" fixed top-0 left-0 right-0 z-10 text-white p-4 flex justify-between items-center bg-red-500 shadow-2xl w-screen ">
        <h1 className="ml-10 md:ml-36 font-bold underline text-xl md:text-3xl">REACTMEAL</h1>
        <div className="flex justify-around p-2 w-20 sm:w-36  md:w-64 md:mr-32 rounded-full border bg-red-800" onClick={()=>setShowCart(true)}>
            <span><FontAwesomeIcon icon={faShoppingCart}/></span>
            <span className='hidden sm:block font-bold'>Your Cart</span>
            <span className=' hidden sm:block rounded-xl border px-2'>{Cart_Count}</span>
        
        </div>
        <Cart/>
    </nav>



}

export default Header;