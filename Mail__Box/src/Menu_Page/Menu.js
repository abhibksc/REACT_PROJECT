
import { FiAlignJustify } from "react-icons/fi";
import { HiOutlinePencil } from "react-icons/hi2";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { VscSend } from "react-icons/vsc";
import { useState } from "react";
import { motion } from "framer-motion"
import LoginModal from "../LoginModal";
import SignupModal from "../SignupModal";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import Composer from "../Composer/Composer";
import { useDispatch } from "react-redux";
import { toggleExpendation } from "../Store/MailSlice";
import Inbox from "../Components/Home/Inbox";



const Menu = () => {
  const [check, setCheck] = useState(false);
  const [hover, setHover] = useState(false);
  const [popup, setpopup] = useState(false);
  const [Composerr, setComposerr] = useState(false);
  const dispatch = useDispatch();



  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 50, x: "-70%" },
  }

  const handlemenu = () => {
    if (check == false) {
      setCheck(true);
      dispatch(toggleExpendation(true))
    }
    else if (check == true) {
      setCheck(false);
      dispatch(toggleExpendation(false))
    }
  }




  const HandleOut = () => {
    if (hover == true) {


      setHover(false)
      setCheck(false);



    }





  }

  const handleEnter = () => {
    if (check == false) {


      setTimeout(() => {
        setHover(true);
        setCheck(true);
      }, 300);



      // setHover(true);
      // setCheck(true);
    }
    else if (check == true) {


      setTimeout(() => setCheck(true), 300);

      // setCheck(true);
    }

  }


  const handleEnterImg = () => {

    setTimeout(() => {

      setpopup(true);
    }, 300);

    setpopup(true);
  }

  const HandleOutImg = () => {
    setTimeout(() => {

      setpopup(false);
    }, 300);
  }

  const handleComposer = () => {
    if (Composerr == false) {
      setComposerr(true);
    }
  }


  const handleInbox = () => {
    console.log("clied");
  }




  return <div className=" m-0 fixed z-50  h-screen w-screen  bg-gradient-to-r from-violet-300 to-secondary " >


    <div className=" flex  justify-between pr-3 pl-3 md:pl-7 md:pr-20 ">

      <div className="flex gap-2 md:gap-5 pt-7 ">

        <FiAlignJustify className="mt-1 w-[30px] h-[30px] md:w-[30px] md:h-[30px] " onClick={() => handlemenu()} />
        <h1 className="font-bold text-[25px] md:text-[25px] ">My@mail</h1>
      </div>

      <div className="hidden md:block pt-2">
        <GoSearch className="relative top-8 left-5" />
        <input type="text" className="border shadow-md shadow-violet-600  w-[700px] h-[50px] rounded-full px-12 pb-1" />
      </div>

      <img onMouseEnter={() => handleEnterImg()} onMouseLeave={() => HandleOutImg()} src="https://i.pinimg.com/736x/68/c5/0a/68c50ac30605fdb8ce0836aaeaacd48c.jpg" alt={"M"} className="border object-cover rounded-full mt-6 h-[40px] w-[40px]  md:h-[60px] md:w-[60px] shadow-md shadow-violet-600 " />

      {popup &&
        <span onMouseEnter={() => handleEnterImg()} onMouseLeave={() => HandleOutImg()} className="  flex justify-start h-[80px] w-[150px]  rounded-md p-2 fixed z-50 left-[200px] md:left-[1200px] top-[90px]  inset-0 bg-black opacity-90 ">

          <div className="flex flex-col bg-transparent text-white px-3">
            <h1 className="text-[10px] font-bold">@Mail Account</h1>
            <span className="text-[10px] text-gray-400">{"abhishek"}</span>
            <span className="text-[10px] text-gray-400">{"abhibksc269@gmail.com"}</span>
            <span className="text-[11px] text-blue-400 "><Link to={"/Profile"}> Complete Now !</Link></span>
          </div>

        </span>
      }



    </div>


    {/*This is for mobile */}
    {check && <div className=" md:hidden  w-28 md:w-36  flex flex-col ml-3 mt-5 gap-5 h-screen" onMouseEnter={() => handleEnter()} onMouseLeave={() => HandleOut()} >

      <span onClick={() => handleComposer()} className={`flex gap-2 ml-2 pl-3 ${(check) && 'bg-violet-200 w-[200px] shadow-md shadow-violet-600'} rounded-full pt-1 pb-1 text-[14px]`}>

        <HiOutlinePencil className="bg-violet-200 rounded-full p-2 w-[70px] h-[60px]" />

        <motion.div animate={(check) ? "open" : "closed"} variants={variants}>
          {check && (
            <label className="text-[16px] relative top-5" htmlFor="inputField" >
              Compose
            </label>
          )}
        </motion.div>

      </span>



      <span className="flex flex-col gap-2   " >




        <span className={`flex justify-between text-[15px] rounded-xl hover:bg-blue-200 pl-5 ${check && 'w-64'} `}>
          <span className={`flex gap-5 my-auto rounded-md   text-[14px] `}>
            <span>
              <MdOutlinePhotoSizeSelectActual className={` w-[30px] h-[30px]  rounded-md p-1 `} />
            </span>

            <motion.div
              animate={(check) ? "open" : "closed"}
              variants={variants}
            >
              {(check) && <span className="flex  ">
                <label className="text-[16px] mt-[2px]   " htmlFor="">Inbox</label>
                <span className="text-[16px] mt-[2px]  ml-28  ">{"56"}</span>
              </span>}</motion.div>
          </span>
        </span>





        <span className={`flex justify-between text-[15px]    rounded-xl hover:bg-blue-200 pl-5 ${check && 'w-64'}`}>

          <span className="flex  gap-5">
            <span className=" ">
              <IoMdStarOutline className={`  w-[30px] h-[30px] rounded-md p-1  `} />
            </span>
            <motion.div
              animate={(check) ? "open" : "closed"}
              variants={variants}
            >
              {check && <div className="flex ">
                <label className="text-[16px] mt-[2px]   " htmlFor="">Starred</label>
                <span className="text-[16px] mt-[2px] ml-[100px]  ">{"56"}</span>
              </div>}</motion.div>
          </span>

        </span>






        <span className={`flex justify-between text-[15px]  rounded-xl hover:bg-blue-200 pl-5 ${check && 'w-64'}`}>

          <div className="flex gap-5">

            <span>
              <VscSend className={`  w-[30px] h-[30px] rounded-md p-1  `} />
            </span>
            <motion.div
              animate={(check) ? "open" : "closed"}
              variants={variants}
            >
              {(check) &&
                <div className="flex ">
                  <label className="text-[16px] mt-[2px] " htmlFor="">Send</label>
                  <span className="text-[16px] mt-[2px]   ml-[115px] ">{"565"}</span>
                </div>
              }</motion.div>
          </div>


        </span>


      </span>


    </div>}


    {/*This is for laptop */}


    <span className={`hidden fixed  duration-10000 md:flex flex-col h-screen z-50    gap-5  w-20 ${check && 'w-72'}`} onMouseEnter={() => handleEnter()} onMouseLeave={() => HandleOut()} >




      <span onClick={() => handleComposer()} className={` flex gap-2  ml-2 pl-3  ${(check) && 'bg-violet-200  w-[200px] shadow-md shadow-violet-600 '} rounded-full pt-1 pb-1  text-[14px]`}>

        <HiOutlinePencil className="bg-violet-200  rounded-full p-2 w-[70px] h-[60px]" />

        <motion.div
          animate={(check) ? "open" : "closed"}
          variants={variants}

        >
          {(check) && <label className="text-[16px] relative top-5"     >Compose</label>}</motion.div>

      </span>


      <span className="flex flex-col gap-2   " >




        <span className={`flex justify-between text-[15px] rounded-xl hover:bg-blue-200 pl-5 ${check && 'w-64'} `}>
          <Link to={"/Inbox"}>
            <span onClick={() => handleInbox()} className={`flex gap-5 my-auto rounded-md   text-[14px] `}>


              <span>
                <MdOutlinePhotoSizeSelectActual className={` w-[30px] h-[30px]  rounded-md p-1 `} />
              </span>

              <motion.div
                animate={(check) ? "open" : "closed"}
                variants={variants}
              >
                {(check) && <span className="flex  ">
                  <label className="text-[16px] mt-[2px]   " htmlFor="">Inbox</label>
                  <span className="text-[16px] mt-[2px]  ml-28  ">{"56"}</span>
                </span>}
              </motion.div>


            </span>
          </Link>
        </span>





        <span className={`flex justify-between text-[15px]    rounded-xl hover:bg-blue-200 pl-5 ${check && 'w-64'}`}>

        <Link to={"/Starred"}>
        <span className="flex  gap-5">
            <span className=" ">
              <IoMdStarOutline className={`  w-[30px] h-[30px] rounded-md p-1  `} />
            </span>
            <motion.div
              animate={(check) ? "open" : "closed"}
              variants={variants}
            >
              {check && <div className="flex ">
                <label className="text-[16px] mt-[2px]   " htmlFor="">Starred</label>
                <span className="text-[16px] mt-[2px] ml-[100px]  ">{"56"}</span>
              </div>}</motion.div>
          </span>
        </Link>

        </span>






        <span className={`flex justify-between text-[15px]  rounded-xl hover:bg-blue-200 pl-5 ${check && 'w-64'}`}>

       <Link to={"/Send"}>
       <div className="flex gap-5">

<span>
  <VscSend className={`  w-[30px] h-[30px] rounded-md p-1  `} />
</span>
<motion.div
  animate={(check) ? "open" : "closed"}
  variants={variants}
>
  {(check) &&
    <div className="flex ">
      <label className="text-[16px] mt-[2px] " htmlFor="">Send</label>
      <span className="text-[16px] mt-[2px]   ml-[115px] ">{"565"}</span>
    </div>
  }</motion.div>
</div>
       </Link>


        </span>


      </span>

    </span>


    {/* <Inbox/> */}


    <Composer checked={Composerr} />






    
    {/* <LoginModal/>
      <SignupModal/> */}



  </div>
}

export default Menu;