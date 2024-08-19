import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import Order from './Order/Order.jsx'
import Product from './Product/Product.jsx'
import Cart from './Cart/Cart.jsx'
import AboutUs from './AboutUs/AboutUs.jsx'
import Login from './Login/login.jsx'
import Checkout from './Cart/checkout.jsx'
import Contact from './Contact/contact.jsx'
import Notification from './Notification/notification.jsx'
import Profile from './Profile/profile.jsx'
import Orderhistory from './Profile/orderhistory.jsx'
import Myaccount from './Profile/account.jsx'
import Notification2 from './Profile/notification.jsx'
import Myreviews from './Profile/reviews.jsx'
import Single from './SingleProduct/single.jsx'
import './index.css'



// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:'/',
      element:<Home/>
    },
    {
      path:'/artworks',
      element:<Product/>
    },
    {
      path:'/about',
      element:<AboutUs/>
    },
    {
      path:'/artwork',
      element:<Single/>
    }
    ,
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
   
    {
      path:'/checkout',
      element:<Checkout/>
    },
    {
      path:'/contact',
      element:<Contact/>
    }
    ,
    {
      path:'/event',
      element:<Notification/>
    },
    {
      path:'/profile',
      element:<Profile/>
    } ,
    {
      path:'/order',
      element:<Orderhistory/>
    },
    {
      path:'/myaccount',
      element:<Myaccount/>
    },
    {
      path:'/notification',
      element:<Notification2/>
    },
    {
      path:'/myreviews',
      element:<Myreviews/>
    }
    
    
    
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
