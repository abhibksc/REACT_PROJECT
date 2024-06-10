import ReactDOM from 'react-dom/client';
import { ContextProvider } from './Components/ContextAPI.js/Context';


import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContextProvider><App/></ContextProvider>);
