import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//MDB CSS
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Todo from './Component/Todo/Todo.jsx';
import Clock from './Component/Clock/Clock.jsx';
import NotFoundPage from './Component/404.jsx';
import Color from './Component/Color/Color.jsx';
import ColorContextProvider from './store/Color-Item.jsx';
import Color2 from './Component/Color/Color2.jsx';
import Color3 from './Component/Color/Color3.jsx';
import FoodWeb from './Component/FoodWeb/FoodWeb.jsx';
import AboutFood from './Component/FoodWeb/Pages/AboutFood.jsx';
import HomeFood from './Component/FoodWeb/Pages/HomeFood.jsx';
import ContactFood from './Component/FoodWeb/Pages/ContactFood.jsx';
import Food from './Component/FoodWeb/Food/Food.jsx';
import Home from './Component/Home.jsx';
import Create from './Component/Social/Create.jsx'
import PostList from './Component/Social/PostList.jsx';
import Curd from './Component/Curd/Curd.jsx';
import Login from './Component/LoginFuc/Login.jsx';
import SignUp from './Component/LoginFuc/SignUp.jsx';
import Profile from './Component/Profile.jsx/Profile.jsx';
import ProtectRoute from './Component/ProtectRoute/ProtectRoute.jsx';
import Accordion from './Component/Accordion/Accordion.jsx';
import TextConter from './Component/TextConter/TextConter.jsx';
import TextCounterContextProvider from './store/Text-Coounter-Item.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '*',
        // element: <Navigate to="/" replace={true} />          //Naviagte to home page by default if route is not exist
        element: <NotFoundPage />  // 404 cmpt
      },
      {
        path: '/',                                              //Home
        element: <ProtectRoute><Home /></ProtectRoute>
      },
      {
        path: 'accordion',                                              //Accordion
        element: <ProtectRoute><Accordion /></ProtectRoute>
      },
      {
        path: 'color',                                          //Color
        element: <ProtectRoute><Color /></ProtectRoute>,
        children: [
          {
            path: "color2",
            element: <Color2 />
          },
          {
            path: "color3",
            element: <Color3 />
          }
        ]
      },
      {
        path: 'clock',                                          //Clock
        element: <ProtectRoute><Clock /></ProtectRoute>
      },
      {
        path: 'curd',                                          //Curd
        element: <ProtectRoute> <Curd /></ProtectRoute>
      },
      {
        path: '/foodweb',                                         //FoodWeb
        element: <ProtectRoute></ProtectRoute>,
        children: [
          {
            path: "home",
            element: <HomeFood />
          },
          {
            path: "about",
            element: <AboutFood />
          },
          {
            path: "contact",
            element: <ContactFood />
          },
          {
            path: "menu",
            element: <Food />
          },

        ]
      },
      {
        path: '/social',                                         //Social
        element: <ProtectRoute></ProtectRoute>,
        children: [
          {
            path: "home",
            element: <h1>Home</h1>
          },
          {
            path: "create",
            element: <Create />
          },
          {
            path: "post",
            element: <PostList />
          }

        ]
      },
      {
        path: '/todo',                                            //Todo
        element: <ProtectRoute><Todo /></ProtectRoute>
      },
      {
        path: '/textcounter',                                            //Todo
        element: <ProtectRoute><TextConter /></ProtectRoute>
      },
      {
        path: 'login',                                           //Login
        element: <Login />
      },
      {
        path: 'signUp',                                           //SingUp
        element: <SignUp />
      },
      {
        path: 'profile',                                           //Profile
        element: <ProtectRoute><Profile /></ProtectRoute>
      }
    ]
  },
]);

// Color Context use Show child cmpt of color , social, foodweb 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextCounterContextProvider>
      <ColorContextProvider>
        <RouterProvider router={router} />
      </ColorContextProvider>
    </TextCounterContextProvider>
  </StrictMode>
)
