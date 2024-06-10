import { useContext  } from "react";
import { Context } from "../Context/Context";
import DeleteAndEdit from "./DeleteAndEdit";


const BookMarksList = () => {
  
  const { arr  } = useContext(Context);


  return (
    <div>
      <ul className="flex flex-col justify-end bg-red-100  gap-x-12 ">
        {arr.map((item ) => 
        (
            <div key={item.id} className="p-1  mb-1 ml-8 mr-8  flex gap-96 justify-between ">
              <div className=" flex  justify-start gap-10  ">
                <li > {item.value}</li>
                <a href={item.key} target="_blank" ><li> {item.key}</li></a>
              </div>
              
              <DeleteAndEdit dataa = {item}/>
         
            </div>
          )
        )}
      </ul>
    </div>
  );
};
export default BookMarksList;
