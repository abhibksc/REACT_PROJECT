import { useContext, useEffect } from "react";
import { Context } from "../Context";

const Cuisines = () => {

    const { arr, Cart_Count,showCart, setCart_Count, setBill, CartItems, setCartItems } = useContext(Context);

    useEffect(()=>{
        let total_Money = 0;
        for(let i = 0; i<CartItems.length; i++){
            total_Money = total_Money + CartItems[i].total  
        }
        setBill(total_Money)
    },[showCart])

    const handleForm = (e, items) => {
        e.preventDefault();

        if (e.target[0].value > 0) {

            items.amount = parseInt(items.amount);
            let data = items.amount + parseInt(e.target[0].value);
            console.log("Amount" + data);
            items.amount = data;

            let totalll = items.prices * items.amount;
            items.total = totalll;

            let flag = false;
            for (let i = 0; i < CartItems.length; i++) {

                if (CartItems.length == 0) {
                    setCartItems([items]);
                }

                if (CartItems[i].id === items.id) {
                    flag = true;
                }
            }
            if (flag === false) {
                setCartItems([...CartItems, items])
            }

            let data2 = Cart_Count + parseInt(e.target[0].value);
            setCart_Count(data2);
        }
        else {
            alert("Targeted_VAlUE Error!!1 ⚠")
        }


        // let total_Money = 0;
        // for(let i = 0; i<CartItems.length; i++){
        //     total_Money = total_Money + CartItems[i].total
        // }
        // console.log(total_Money);
        // setBill(total_Money);
    };


    return (
        <div className="bg-gray-700 ">

            <ul className="flex flex-col rounded-md shadow-lg bg-white justify-center w-screen max-w-3xl p-5 gap-8 mx-auto">
                {arr.map((item, index) => {
                    return <li key={index} >
                        <form onSubmit={(e) => handleForm(e, item)} className="flex flex-row justify-between border-b pb-2">
                            <div className="flex flex-col gap-1">
                                <h1 className="font-bold">{item.item}</h1>
                                <p>{item.description}</p>
                                <p className="text-amber-800 font-bold">{item.price}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="flex flex-row gap-1">
                                    Amount{" "}
                                    <input
                                        min="1"
                                        key={item.id}
                                        className="w-12 text-center rounded-lg border"
                                        type="number"
                                        name="quantity"
                                        defaultValue={1}
                                    />
                                </span>
                                <button className="rounded-full border w-24 p-1 mx-auto bg-amber-800 hover:bg-amber-900" type="submit">
                                    +Add
                                </button>
                            </div>
                        </form>
                    </li>
                }
                )}

            </ul>

        </div>

    );
};

export default Cuisines;
