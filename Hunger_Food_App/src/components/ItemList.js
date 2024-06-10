import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {





    console.log(items);
    return <ul className=" p-2 m-2 gap-6 flex flex-col  self-center   rounded-md shadow-sm">

        {items.map(item => (

            <li className="p-2 rounded-sm flex flex-row  gap-44 justify-between shadow-sd" key={item.card.info.id}>

                <div className="p-2 rounded-sm flex flex-col gap-3 shadow-sd flex-wrap w-full max-w-2xl">
                    <h2 className="font-bold text-2xl" >{item.card.info.name}</h2>
                    <p className=" font-medium">{"Rs " + item.card.info.defaultPrice / 100}</p>
                    <p>{item.card.info.description}</p>
                </div>

                <div className="flex flex-col ">
                    <img className="w-full  duration-300 hover:scale-90  hover:shadow-lg max-w-52 rounded-lg overflow-hidden  shadow-lg " src={CDN_URL + item.card.info.imageId} alt="" />
                    <button className="relative bottom-5 border w-20 mx-auto text-green-700 bg-white rounded-md p-1 font-bold ">ADD</button>

                </div>

            </li>
        ))}

    </ul>
}

export default ItemList;