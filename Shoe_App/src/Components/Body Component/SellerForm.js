import React, { useState, useContext } from 'react';
import { Context } from "../ContextAPI.js/Context";

const SellerForm = () => {
    const { arr, setArr } = useContext(Context);

    const [formData, setFormData] = useState({
        
        shoeName: '',
        description: '',
        price: '',
        quantityAvailable: {
            L: null,
            M: null,
            S: null,
        },
        id: null,
        selected: {
            L: null,
            M: null,
            S: null
        },
        totalprice: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleQuantityChange = (e, size) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            quantityAvailable: {
                ...prevState.quantityAvailable,
                [size]: parseInt(value)
            }
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (formData.shoeName === '' || formData.description === '' || formData.price === '') {
            alert("Please fill in all required fields.");
            return;
        }

        setArr([...arr, formData]);
        console.log(arr);

        setFormData({
            shoeName: '',
            description: '',
            price: '',
            quantityAvailable: {
                L: null,
                M: null,
                S: null,
            },
            id: null,
            selected: {
                L: null,
                M: null,
                S: null
            },
            totalprice: 0
        });
    };

    return (
        <form className="SellerForm bg-blue-300 text-white shadow-2lg" onSubmit={handleFormSubmit}>
            <h1 className="text-center text-2xl font-bold">Seller</h1>
            <div className="rounded-lg flex flex-row flex-wrap p-5 justify-around">
                <div className="size-36 flex flex-col gap-3">
                    <label>Shoe Name :</label>
                    <input type="text" name="shoeName" value={formData.shoeName} onChange={handleChange} className="px-2 rounded-md shadow-lg text-black" />
                </div>
                <div className="size-36 flex flex-col gap-3">
                    <label>Description :</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} className="px-2 rounded-md shadow-lg text-black" />
                </div>
                <div className="size-36 flex flex-col gap-3">
                    <label>Price</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} className="px-2 rounded-md shadow-lg text-black" />
                </div>
                <div className="size-36 flex flex-col gap-3 text-center">
                    <h1 className="relative left-7">Quantity Available</h1>
                    <div className="flex flex-row gap-3">
                        L<input type="number" name="L" value={formData.quantityAvailable.L} onChange={(e) => handleQuantityChange(e, 'L')} className="w-10 rounded-md px-1 shadow-lg text-black" />
                        M<input type="number" name="M" value={formData.quantityAvailable.M} onChange={(e) => handleQuantityChange(e, 'M')} className="w-10 rounded-md px-1 shadow-lg text-black" />
                        S<input type="number" name="S" value={formData.quantityAvailable.S} onChange={(e) => handleQuantityChange(e, 'S')} className="w-10 rounded-md px-1 shadow-lg text-black" />
                    </div>
                </div>
                <button className=" Seller_Quantity_btn">Add</button>
            </div>
        </form>
    );
}

export default SellerForm;
