import React, {  createContext, useState ,useEffect} from "react";



export const Context = createContext({});

export const ContextProvider = ({ children }) => {
    const [arr, setArr] = useState([]);
    const [showCart,  setShowCart] = useState(false);
    const [CartItems, setCartItems] = useState([]);
    const [Bill , setBill] = useState(0);
    const [Cart_Count, setCart_Count] = useState(0);


    useEffect(()=>{
        setArr(

            [
                {
                    item : "Sushi",
                    description : "Finest fish and veggies",
                    price : "₹250",
                    prices : 250,
                    id : 0,
                    amount : 0,
                    total : 250
                
                }, 
                {
                    item : "Schnitzel",
                    description : "A german speciality!",
                    price : "₹290"  ,
                    prices : 290,
                    id : 1,
                    amount : 0,
                    total : 290
                }, 
                {
                    item : "Barbecue Burger",
                    description : "Finest fish and veggies",
                    price : "₹350",
                    prices : 350,
                    id : 2,
                    amount : 0,
                    total : 350
                    
                }, 
                {
                    item : "2 McAloo Tikki Burger + 2 Fries (L)",
                    description : "Stay home, stay safe and share a combo",
                    price : "₹450",
                    prices : 450,
                    id : 3,
                    amount : 0,
                    total : 450
                }, 
                {
                    item : "6 Pc Chicken Nuggets + McChicken Burger + Coke",
                    description : "Tender and juicy chicken patty cooked to perfection",
                    price : "₹550",
                    prices : 550,
                    id : 4,
                    amount : 0,
                    total : 550
                }, 
                {
                    item : "McSpicy Paneer Burger + 2 Fries M + McAloo Tikki",
                    description : "Get the best value in your meal for 2.",
                    price : "₹510",
                    prices : 510,
                    id : 5,
                    amount : 0,
                    total : 510
                }, 
                {
                    item : "Chicken Nuggets Wrap",
                    description : "Serves with Ketchup",
                    price : "₹150",
                    prices : 150,
                    id : 6,
                    amount : 0,
                    total : 150
                }, 
                {
                    item : "Prawns Wrap",
                    description : "Comes with Ketchup | A delightfully wholesome combo of irresistibly",
                    price : "₹450",
                    prices : 450,
                    id : 7,
                    amount : 0,
                    total : 450
                }]

        )
    },[])

    return <Context.Provider value={{Cart_Count, setCart_Count,arr, setArr ,showCart, setShowCart,CartItems,setCartItems,Bill, setBill}}>
        {children}
    </Context.Provider>
}