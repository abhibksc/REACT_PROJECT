import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './src/Components/Form';
import { ContextProvider } from './src/Context/Context';


const App = ()=>{
return <div>

    <ContextProvider>
    <Form/> 
    </ContextProvider>


  
</div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);
