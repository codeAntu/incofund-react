import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Login from './screens/Login.tsx'
import App from './App.tsx'
import Register from './screens/Register.tsx'
import Profile from './screens/Profile.tsx'
import TaskSystem from './screens/TaskSystem.tsx'
import Recharge from './screens/Recharge.tsx'
import Withdraw from './screens/Withdraw.tsx'
import VIPLevel from './screens/VIPLevel.tsx'
import MyTeam from './screens/MyTeam.tsx'
import MyRecords from './screens/MyRecords.tsx'
import MyCard from './screens/MyCard.tsx'
import SplashScreen from './screens/SplashScreen.tsx'
import Product from './screens/Product.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <Profile /> */}
    {/* <TaskSystem /> */}
    {/* <Recharge /> */}
    {/* <Withdraw /> */}
    {/* <VIPLevel /> */}
    {/* <MyTeam /> */}
    {/* <MyRecords /> */}
    {/* <MyCard /> */}
    {/* <SplashScreen /> */}
    <Product />
  </React.StrictMode>,
)
