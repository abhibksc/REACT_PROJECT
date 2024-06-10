import Header from "./Components/Header Component/Header";
import Body from "./Components/Body Component/Body";
import Effects from "../Effects";



function App() {

  Effects();


  return (
    
    <div className="bg-slate-900 flex flex-col">
        <Header />
        <Body />
        <footer className="text-center bg-white  p-5">
          @copyright
        </footer>

    </div>
  );
}

export default App;















