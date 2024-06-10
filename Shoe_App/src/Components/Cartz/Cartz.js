import { useContext, useEffect } from 'react';
import { Context } from '../ContextAPI.js/Context';
import Modal from '../../Modal';

const Cartz = () => {
    
    const { setBill, bill, cartItems, showCart } = useContext(Context);
    useEffect(() => {
        if (showCart === true) {
            document.body.style.overflowY = "hidden"
        }
        else {
            document.body.style.overflowY = "scroll"
        };
    }, [showCart])



    useEffect(()=>{
        const totalPrice = cartItems.reduce((acc, curr) => acc + curr.totalprice, 0);
        setBill(totalPrice);
    },[showCart])
    console.log(bill);

    // const {Modals} = Modal


    return showCart && <Modal/>
}

export default Cartz;