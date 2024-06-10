import { useSelector } from "react-redux";

const Inbox = () => {
  const Expendation = useSelector((state) => state.Expendation);
  console.log(Expendation);

  return (
    <div
      className={`fixed ${Expendation ? 'bg-white z-20 md:top-[80px] rounded-lg p-3 md:h-screen md:w-[1260px] left-20 text-black' : 'bg-red-400 md:w-[1100px] left-[260px]'}`}
    >

      <div className="bg-gray-200 w-10 flex">
        <input type="checkbox" />
        <select id="dropdown-options" className="   mt-2 bg-white border rounded shadow-lg" >

      <option value="Read" key="Read">🩸</option>
      <option value="UnRead" key="UnRead">UnRead</option>
    </select>
      </div>
      <h1>
        index Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro officia voluptatibus beatae aliquam modi ab consequuntur reiciendis ipsum mollitia ullam? Autem pariatur libero quis obcaecati ipsum voluptatum velit quibusdam iure.
      </h1>
    </div>
  );
};

export default Inbox;
