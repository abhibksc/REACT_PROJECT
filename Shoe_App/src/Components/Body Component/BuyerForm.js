import { useContext } from "react";
import { Context } from "../ContextAPI.js/Context";




const BuyerForm = () => {

    const { arr, setArr, cartItems, setCartItems, cartCount, setCartCount } = useContext(Context);

    const handleLarge = (obj) => {

        if (obj.quantityAvailable.L > 0) {


            obj.quantityAvailable.L = obj.quantityAvailable.L - 1;
            obj.selected.L = obj.selected.L + 1;
            obj.totalprice = (obj.selected.L + obj.selected.M + obj.selected.S) * parseInt(obj.price);


            const updatedArr = arr.map(item =>
                item.id === obj.id ?
                    {
                        ...item,
                        quantityAvailable: { ...item.quantityAvailable, L: obj.quantityAvailable.L },
                    } : item

            );

            setArr(updatedArr);

            if (cartItems.length > 0) {

                const updatedcartItems = cartItems.map(item =>
                    item.id === obj.id ?
                        {
                            ...item,
                            selected: { ...item.selected, L: obj.selected.L },
                            totalprice: obj.totalprice
                        } : item

                );
                setCartItems(updatedcartItems)
            }


            let flag = false;

            for (let i = 0; i < cartItems.length; i++) {

                if (cartItems.length == 0) {
                    setCartItems([obj]);
                    flag = true;
                    break;
                }

                if (cartItems[i].id === obj.id) {
                    flag = true;


                }
            }

            if (flag === false) {
                setCartItems([...cartItems, obj])
            }
            setCartCount(cartCount + 1);
        }
    }


    const handleMedium = (obj) => {

        if (obj.quantityAvailable.M > 0) {


            obj.quantityAvailable.M = obj.quantityAvailable.M - 1;
            obj.selected.M = obj.selected.M + 1;
            obj.totalprice = (obj.selected.L + obj.selected.M + obj.selected.S) * parseInt(obj.price);



            const updatedArr = arr.map(item =>
                item.id === obj.id ?
                    {
                        ...item,
                        quantityAvailable: { ...item.quantityAvailable, M: obj.quantityAvailable.M },
                    } : item

            );
            setArr(updatedArr);

            if (cartItems.length > 0) {

                const updatedcartItems = cartItems.map(item =>
                    item.id === obj.id ?
                        {
                            ...item,
                            selected: { ...item.selected, M: obj.selected.M },
                            totalprice: obj.totalprice
                        } : item

                );
                setCartItems(updatedcartItems)
            }


            let flag = false;

            for (let i = 0; i < cartItems.length; i++) {

                if (cartItems.length == 0) {
                    setCartItems([obj]);
                    flag = true;
                    break;
                }

                if (cartItems[i].id === obj.id) {
                    flag = true;


                }


            }

            if (flag === false) {
                setCartItems([...cartItems, obj])
            }
            setCartCount(cartCount + 1);
        }
    }


    const handleSmall = (obj) => {
        if (obj.quantityAvailable.S > 0) {


            obj.quantityAvailable.S = obj.quantityAvailable.S - 1;
            obj.selected.S = obj.selected.S + 1;
            obj.totalprice = (obj.selected.L + obj.selected.M + obj.selected.S) * parseInt(obj.price);



            const updatedArr = arr.map(item =>
                item.id === obj.id ?
                    {
                        ...item,
                        quantityAvailable: { ...item.quantityAvailable, S: obj.quantityAvailable.S },
                    } : item

            );
            setArr(updatedArr);

            if (cartItems.length > 0) {

                const updatedcartItems = cartItems.map(item =>
                    item.id === obj.id ?
                        {
                            ...item,
                            selected: { ...item.selected, S: obj.selected.S },
                            totalprice: obj.totalprice
                        } : item

                );
                setCartItems(updatedcartItems)
            }


            let flag = false;

            for (let i = 0; i < cartItems.length; i++) {

                if (cartItems.length == 0) {
                    setCartItems([obj]);
                    flag = true;
                    break;
                }

                if (cartItems[i].id === obj.id) {
                    flag = true;


                }


            }

            if (flag === false) {
                setCartItems([...cartItems, obj])
            }
            setCartCount(cartCount + 1);
        }

    }


    return <div className="SellerForm bg-blue-300 text-white  ">

        <h1 className="text-center text-2xl font-bold">Buy Now</h1>

        {

            <ul>
                {
                    arr.length === 0 ? <p className="text-center"> "Sorry, no products are available at the moment."</p> :
                        arr.map((ele, index) => {
                            ele.id = index;

                            return <li key={index} className="rounded-lg flex flex-row flex-wrap p-5 gap-20">

                                <span className="size-36 flex flex-col gap-3">
                                    <p>{ele.shoeName}</p>
                                </span>

                                <span className="size-36 flex flex-col gap-3">
                                    <p>{ele.description}</p>
                                </span>

                                <span className="size-36 flex flex-col gap-3">
                                    <p>{ele.price}</p>
                                </span>

                                <span className="size-42 flex flex-wrap gap-3 text-center" >

                                    <button className=" Buyer_Quantity_btn" onClick={(e) => handleLarge( ele)} > Large ({ele.quantityAvailable.L})</button>
                                    <button className=" Buyer_Quantity_btn" onClick={(e) => handleMedium( ele)} > Medium ({ele.quantityAvailable.M})</button>
                                    <button className=" Buyer_Quantity_btn" onClick={(e) => handleSmall( ele)} > Small ({ele.quantityAvailable.S})</button>


                                </span>


                            </li>
                        })
                }
            </ul>
        }
    </div>
}

export default BuyerForm;