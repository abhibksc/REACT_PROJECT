import SellerForm from "./SellerForm";
import BuyerForm from "./BuyerForm";

const Body = () => {


    return (
        <main className="w-full max-w-full relative">

            <img className="w-screen max-w-full h-screen max-h-full  shadow-zinc-950 shadow-2xl rounded-lg" src="https://wallpapercave.com/wp/wp8503304.jpg" alt="img" />

            <div className="shoeBlue ">
                <h1 className="font-bold font-serif text-3xl text-yellow-400 text-opacity-100">"Step into Style, Delivered to Your Doorstep"</h1>


                <div className="flex flex-col font-sans  gap-3">
                    <p>Indulge in the perfect pair from our wide collection of shoes and elevate your fashion game without leaving home.</p>
                    <p>All our shoes are crafted with premium materials, just-in-time, and of course, by experienced artisans! Discover your perfect fit today."</p>
                </div>
            </div>

            <SellerForm />
            <BuyerForm/>

        </main>
    );
}

export default Body;
