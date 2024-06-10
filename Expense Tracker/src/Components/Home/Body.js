import { Link, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, } from "react";
import GetExpense from "../CRUD Operations/GetExpense";
import { addItems, clearItem, dltItem, updateItem } from "../../Store/AddExpenseSlice";
import DeleteExpense from "../CRUD Operations/DeleteExpense";
import EditExpense from "../CRUD Operations/EditExpense";
import TotalExpense from "./TotalExpense";



const Body = () => {


    let cal = TotalExpense();
    const dispatch = useDispatch();
    let ex = useSelector((state) => state.addExpense.expense);
    const userId = useSelector((state) => state.auth.userId);
    const isLogin = useSelector((state) => state.IsLogin.login);
    const navigate = useNavigate();



    useEffect(() => {

        if (isLogin) {
            console.log("han login");

            const fun = async (userId) => {
                let arr = await GetExpense(userId);
                dispatch(addItems(arr));
            }

            fun(userId);

        }
        else {

            console.log("Han logout");

            dispatch(clearItem())
        }


    }, [isLogin]);



    const handleDelete = async (userId, id) => {

        dispatch(dltItem(id));
        await DeleteExpense(userId, id);

    }

    const handleEdit = async (ele) => {

        const { amount, description, category, id } = ele;
        const updations = true;
        dispatch(updateItem({ amount, description, category, id, updations }));
        navigate("/AddExpenses")

    }

    return (
        <main
            className=" div_2 ">
            <div className="mt-28 h-fit">

                <div className='div_3'>
                    <p>Welcome to Expense Tracker App!</p>
                    <p>Your profile is 64% complete. A complete profile have chances to get free subscription and offers.</p>
                    <span className="div_4"><Link to={"/Profile"}> Complete Now !</Link></span>
                </div>

                <div className="  div_5">
                    <span className="text-center text-white text-2xl font-bold "> Rs {cal} is your total expense</span>
                </div>

                <div className="div_6">
                    <ul className="div_7">

                        <li className="flex flex-row justify-between text-gray-900 font-bold">
                            <div className=" flex  md:gap-44 ">
                                <span className="">amount</span>
                                <span className="">description</span>
                                <span>category</span>
                            </div>
                            <button className="w-[100px] text-gray-900 font-bold">
                                Edit
                            </button>
                            <button className="w-[100px] text-gray-900 font-bold">
                                Delete
                            </button>
                        </li>


                        {
                            ex != null && ex.map((ele) => {


                                return <li key={ele.id} className="flex">
                                    <div className=" flex  ">
                                        <div className=" md:w-[237px] ">{ele.amount}</div>
                                        <span className=" md:w-[260px] ">{ele.description}</span>
                                        <span className=" md:w-[208px] ">{ele.category}</span>
                                    </div>
                                    <span onClick={() => handleEdit(ele)} className=" w-[199px] font-bold text-gray-300">
                                        Edit
                                    </span>
                                    <button onClick={() => handleDelete(userId, ele.id)} className=" font-bold text-gray-300">
                                        Delete
                                    </button>
                                </li>
                            })


                        }


                    </ul>
                </div>

                <div className="md:hidden   text-center mt-20">

                    <ul className="  flex flex-col gap-4  mx-auto text-white">
                        {
                            ex != null && ex.map((ele) => {


                                return <li key={ele.id} className="div_8">
                                    <div className=" flex flex-col justify-start p-3">

                                        <div className="flex justify-between mx-3">
                                            <label htmlFor="">Amount</label>
                                            <div className=" md:w-[237px] ">{ele.amount}</div>
                                        </div>

                                        <div className="flex justify-between mx-3">
                                            <label htmlFor="">Description</label>
                                            <span className=" md:w-[260px] ">{ele.description}</span>
                                        </div>

                                        <div className="flex justify-between mx-3">
                                            <label htmlFor="">Category</label>
                                            <span className=" md:w-[208px] ">{ele.category}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-around mb-5 rounded-md ">
                                        <button onClick={() => handleEdit(ele)} className=" editbtn">
                                            Edit
                                        </button>
                                        <button onClick={() => handleDelete(userId, ele.id)} className="dltbtn">
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            })


                        }


                    </ul>

                </div>

            </div>

            <div>

            </div>




        </main>
    );
}

export default Body;
