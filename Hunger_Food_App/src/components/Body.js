import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';


const Body = () => {
  // * React Hook -> A normal JavaScript function which is given to us by React (or) Normal JS utility functions
  // * useState() - Super Powerful variable
  // * useEffect() -

  // * State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log('Body rendered');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    console.log(json);
    // * optional chaining
    // setListOfRestaurants(json.data.cards[2].data.data.cards);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlinestatus = useOnline();

  if(onlinestatus === false){
     return (<h1> Internect Connection Issue</h1>
  )}

  

  // * Conditional Rendering
  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return  (
    <body className="flex flex-col bg-gray-100">
      <div className="flex justify-center p-5 gap-40">
        <div className="flex  bg-orange-700 w-72 rounded-md">
          <input
          className="w-50 rounded-lg border-slate-100 shadow-lg m-1 p-1"
            type="text"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className=' w-40  rounded-lg bg-orange-700 hover:bg-orange-600 ...'
            onClick={() => {
              // * Filter th restaurant cards and update the UI
              // * searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setListOfRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        
        <button
          className="bg-orange-700  rounded-lg w-56 hover:bg-orange-600 ..."
          onClick={() => {
            // * Filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating < 4
            );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-around ">
        {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {listOfRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to = {"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </body>
  );
};

export default Body;
