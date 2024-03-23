import React, { useContext } from "react";
import { useHandleFormData } from "../CustomHooks/useHandleFormData";
import BookMarksList from "./BookMarksList";
import {  Context } from "../Context/Context";
import { useContext } from "react";
import useContentLoader from "../CustomHooks/useContentLoader";




const Form = () => {

  useContentLoader()
  
  const {arr , setArr ,id ,setId ,TitleValue, setTitleValue ,UrlValue, setUrlValue} = useContext(Context);
 
  const handleTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const handleUrl = (e) => {
    setUrlValue(e.target.value);
  };

 

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const obj = {
      id : id,
        key : UrlValue,
        value : TitleValue,
        
    };

    const data = useHandleFormData(obj);

     setArr([data , ...arr])
     setId(id+1);

   

    setTitleValue('')
    setUrlValue('')
    
  };




  return (
    <div className="bg-gray-500 w-full h-36 flex flex-col m-auto gap-10">
      <h1 className="text-center text-2xl pt-5">Bookmark Website</h1> 
      <form
        id="myForm"
        className="flex justify-around w-8/12 m-auto bg-gray-500"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label>Website Title:</label>
          <input
            className="bg-black text-yellow-300 p-1 rounded-sm m-2"
            type="text"
            value={TitleValue}
            onChange={handleTitle}
          />
        </div>
        <div>
          <label>Website URL:</label>
          <input
            className="bg-black text-yellow-300 p-1 rounded-sm m-2"
            type="url"
            value={UrlValue}
            onChange={handleUrl}
          />
        </div>
        <button className="bg-red-400 w-16 rounded-md hover:bg-red-500">
          ADD
        </button>
      </form>
      <div className=" text-black font-medium">
      <BookMarksList/>
      </div>
    </div>
  );
};

export default Form;