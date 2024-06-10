import { useDispatch, useSelector } from "react-redux";
import { update } from "../../Store/LoginSignUpSlice";
import { useState } from "react";



const Profile = () => {


  const token = useSelector((state) => state.auth.token);
  const dName = useSelector((state) => state.auth.name);
  let image = useSelector((state) => state.auth.image);
  const dispatch = useDispatch();

  const [Name, setName] = useState(dName);
  const [Url, setURL] = useState(image);
  const [flag, setFlag] = useState(false);


  const handleForm = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBv8SOw4SaNyyIcjL-bEkirn1qxbEDrl80",
      {
        method: "POST",
        body: JSON.stringify({

          "idToken": token,
          "displayName": Name,
          "photoUrl": Url,
          "returnSecureToken": true
        }),
      }
    );
    let data = await response.json();

    if (data.error) {
      console.log(data.error);
      return alert(data.error.message);
    }
    else {

      console.log(data);
      alert("Successfully Updated!")
      dispatch(update({
        image: data.photoUrl,
        name: data.displayName,
      }))

      setURL(data.photoUrl);
      setName(data.displayName);
      setFlag(true)

    }
  }
  return <div className="div_14">
    <div className=" flex flex-col  ">
      <form onSubmit={handleForm} className="div_15 ">
        <div className="flex justify-around">
          <div className="div_16">
            <h1 className="text-xl font-bold ">Contact Details</h1>
            <div className="flex flex-col justify-around mx-4 gap-2">
              <label htmlFor="">Name</label>
              <input className="rounded-sm border-2 p-1 text-center border-black"
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="flex flex-col justify-around gap-2">
              <label htmlFor="">Profile Photo URL</label>
              <input className="rounded-sm border-2 p-1 text-center border-black"
                type="url"
                placeholder="photo"
                value={Url}
                onChange={(e) => setURL(e.target.value)} />

            </div>
            <div className="flex justify-around text-right">
              <button className="updateBtn"
                type="submit">Update</button>
            </div>

          </div>


          <div className=" mt-20 ">
            <img src={image} alt="picture"
              className=" imge2 w-[350px] rounded-full h-[350px] shadow-lg shadow-rose-900 " />
            <h1 className="mx-auto text-center mt-6 text-white">{dName}</h1>
          </div>
        </div>

      </form>


      <form className="md:hidden">
        <div className=" div_17">
          <img className="img" />
          <h1 className="mx-auto text-center mt-6 text-white">{Name}</h1>
        </div>
        <div className="div_19">
          <h1 className="text-xl font-bold ">Contact Details</h1>
          <div className="flex flex-col justify-around mx-4 gap-2">
            <label htmlFor="">Name</label>
            <input className="div_18" 
            type="text" 
            placeholder="Name" 
            value={Name} 
            onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="flex flex-col justify-around gap-2">
            <label htmlFor="">Profile Photo URL</label>
            <input className="div_18" 
            type="url" 
            placeholder="photo" 
            value={Url} 
            onChange={(e) => setURL(e.target.value)} />
          </div>
          <div className="flex justify-around text-right">
            <button className="updatebtn" 
            type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default Profile;