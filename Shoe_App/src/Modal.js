import ReactDOM from 'react-dom';

import { useContext} from 'react';
import ReactDOM from 'react-dom';
import { Context } from './Components/ContextAPI.js/Context';


    


const Modal = () =>{

    const { cartItems ,bill ,setShowCart } = useContext(Context);

return ReactDOM.createPortal( <>
    <div className='fixed z-10 inset-0 bg-black opacity-90 '>
        <div className="fixed top-1/3 right-72 p-3 transform -translate-x-1/2 -translate-y-1/2 my-auto w-screen   max-w-96 rounded-lg  text-black bg-slate-50 shadow-lg border-2 flex flex-col gap-5">
            
    
            {
                cartItems.length === 0 ? <p className='text-center p-2 text-red-500'>"Oops! It seems like you forgot to add items to your cart. No worries, take your time browsing our selection and find the perfect items for you. Happy shopping!"</p> : <ul>
                {
                    cartItems.map((items , index) => {
                     
                        return   <li key={index} className='flex justify-between'>
                            <span>{items.shoeName}</span>
                            {items.selected.L !== null && <span>{items.selected.L}L</span> }
                            {items.selected.M !== null && <span>{items.selected.M}M</span> }
                            {items.selected.S !== null && <span>{items.selected.S}S</span> }
                            <span>{items.totalprice}</span>
    
                        </li>
                    })
    
    
                }
            </ul>
            }
    
            <div className='flex flex-col gap-2'>
                <div className='flex justify-end gap-24'>
                    <span className='font-bold'>Total</span>
                    <span className='font-bold'>{bill}</span>
                </div>
    
                <div className='flex justify-end gap-10'>
                    <button className='border px-2 rounded-md bg-blue-200 hover:bg-green-800 shadow-lg' onClick={() => (alert("Successfully ordered!"))}>Place Order</button>
                    <button className='border px-2 rounded-md bg-blue-200 hover:bg-red-800 shadow-lg' onClick={() => setShowCart(false)}>Cancel</button>
                </div>
            </div>
    
    
    
        </div>
    </div>
    </>,   document.getElementById('roots'));

}



  
export default Modal;  