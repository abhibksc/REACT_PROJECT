import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';



import './index.css';
import AppRouter from '../AppRouter';
import { Provider } from 'react-redux';
import Store from './Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<Provider store={Store}> <RouterProvider router={AppRouter}/></Provider>



);
