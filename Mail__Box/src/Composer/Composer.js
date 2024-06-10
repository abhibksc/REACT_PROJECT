import ReactDOM from 'react-dom';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Composer = (prop) => {

  const { checked } = prop;




  return checked && ReactDOM.createPortal(<>
    <div className='fixed z-10 inset-0 bg-black opacity-90 '>
      <div data-aos="fade-up" className="text-white bg-black  fixed left-[180px] top-[370px] w-[300px] h-[550px] md:h-[550px]    md:bg-transparent md:top-80 md:left-[650px] p-3 transform -translate-x-1/2 -translate-y-1/2 my-auto md:w-screen   md:max-w-[900px] rounded-lg shadow-violet-400  shadow-lg ">

        <form data-aos="fade-up" className="rounded-md shadow-lg border-2 h-full  p-3 flex flex-col  md:gap-10" action="" >



          <div className='flex flex-col gap-3 w-[200px] md:w-[500px] mx-auto'>

          <h1 className="text-3xl text-center font-bold mb-5 md:mb-3 ">New Message</h1>

            <input className="px-1 text-white bg-black rounded border-b border-gray-400 focus:border-none focus:outline-none" onInput={"To"}
              type="email"
              placeholder='Recipients'
              value= "To"
              // readOnly
            //   onChange={(e) => setEmail(e.target.value)} 
            />

            <input className="px-1 text-white bg-black rounded border-b border-gray-400 focus:border-none focus:outline-none"
              type="password"
              placeholder='Subject'
            //   value={pass} 
            //   onChange={(e) => setPass(e.target.value)} 
            />

          </div>



          <Editor className="text-blue"
            // editorState={editorState}
            placeholder='Write Something'
         
            editorClassName=" relative bottom-[10px] md:bottom-28 scrollbar-none  "
            toolbarClassName="  relative top-[340] md:top-[270] h-8  md:h-[70px] md:w-[700px] bg-blue-300 text-black overflow-hidden"
          // onEditorStateChange={this.onEditorStateChange}
          />

          <button className='border p-3  w-20 rounded-lg relative  top-[235px] left-[170px] md:left-[740px] md:top-[110px] bg-blue-300 hover:bg-blue-500'>Send</button>


        </form>

      </div>
    </div>
  </>, document.getElementById('roots2'));
}

export default Composer;