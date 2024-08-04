
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './views/Home/home';

import BlogView from './views/BlogView/BlogView'

import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {

        path:'/Blog/:id',
        element:<BlogView/>
    }
])
root.render(<RouterProvider router={router}/>);

