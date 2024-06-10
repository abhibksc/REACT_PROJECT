import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Context } from '../Context';

const Cart = () => {



    const {setBill, Cart_Count,Bill, setCartItems, setCart_Count, CartItems, setArr, arr, showCart, setShowCart} = useContext(Context);
    useEffect(() => {
        if (showCart === true) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "scroll"
        };
    }, [showCart])



    const handleminus = (e, items) => {

        if (items.amount >= 1) {

            items.amount = items.amount - 1;

            items.total = Bill - items.prices
            setBill(items.total);
            

            const obj = {
                item: items.item,
                description: items.description,
                price: items.price,
                prices : items.prices,
                id: items.id,
                amount: items.amount,
                total: items.total
            }

            setArr([...arr, obj])
            setCart_Count(Cart_Count - 1)
        }
        if(items.amount === 0){
            let filter = CartItems.filter((eve)=>eve.id !== items.id);
            setCartItems(filter);

        }
    }

    const handlePlus = (e, items) => {

      
            items.amount = items.amount + 1;


            items.total = items.prices + Bill
            setBill(items.total);


            const obj = {
                item: items.item,
                description: items.description,
                price: items.price,
                prices : items.prices,
                id: items.id,
                amount: items.amount,
                total: items.total
            }

            setArr([...arr, obj])
            setCart_Count(Cart_Count + 1)
        
    }

    return showCart && ReactDOM.createPortal(
        <>
            <div className='fixed z-10 inset-0 bg-black opacity-90'>
                <div className="w-72 md:w-96 mx-auto flex flex-col mt-40 p-2  rounded-lg  text-black bg-slate-50 shadow-lg border-2">


                    <ul className='border-b-2 '>
                        {

                            CartItems.map((items,index) => {
                                return <li key={index}>
                                    <div className='rounded-md flex flex-row justify-between p-2'>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='font-bold'>{items.item}</h1>
                                            <div className='flex gap-7 font-bold'>
                                                <p>{items.price}</p>
                                                <p className='rounded-lg border px-2'>{"X" + items.amount}</p>
                                            </div>
                                        </div>

                                        <div className='flex gap-2 my-5 font-bold'>
                                            <button
                                                onClick={(e) => handleminus(e, items)}
                                                className='rounded-lg border-amber-400 border hover:bg-amber-800 hover:text-white text-center w-screen max-w-10 h-full max-h-6'>-</button>
                                            <button
                                                onClick={(e) => handlePlus(e, items)}
                                                className='rounded-lg border-amber-400 border hover:bg-amber-800 hover:text-white w-screen max-w-10 h-full max-h-6'>+</button>
                                        </div>
                                    </div>
                                </li>
                            })

                        }
                    </ul>


                    <div className="flex justify-between p-2">
                        <span className='font-bold'>Total Amount</span>
                        <span className='font-bold'>{Bill}</span>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type='number' className='rounded-full border border-amber-800 text-red-900 hover:bg-amber-800 hover:text-white px-2' onClick={() => setShowCart(false)}>Close</button>
                        <button className='rounded-full border border-amber-800 text-red-900 hover:bg-amber-800 hover:text-white px-2' onClick={()=>(alert("Successfully ordered!"))}>Order</button>
                    </div>
                </div>
            </div>
        </>,

        document.getElementById('root')

    );
}

export default Cart;




