import { useContext } from "react"
import { Context } from "../Context/Context"

const DeleteAndEdit = ({dataa})=>{

    const {arr,setArr ,setTitleValue,setUrlValue} = useContext(Context)


    const handleDltBtn = ()=>{

      const updatedArr = arr.filter(ele => ele.id !== dataa.id);
        setArr(updatedArr);
    console.log(updatedArr);
    localStorage.removeItem(dataa.id);

    }


    const handleEdtBtn = (e)=>{
        
        setTitleValue(dataa.value);
        setUrlValue(dataa.key);
        const updatedArr = arr.filter(ele => ele.id !== dataa.id);
        setArr(updatedArr);
        localStorage.removeItem(dataa.id);

    }


    return <div className="flex gap-10 justify-end ">
            <button className="  w-28 rounded-sm bg-black hover:bg-red-600" onClick={handleDltBtn}>Delete</button>
            <button className="  w-28 rounded-sm bg-black hover:bg-red-600" onClick={handleEdtBtn}>Edit</button>
            
    </div>
}

export default DeleteAndEdit;