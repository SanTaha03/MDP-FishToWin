import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/classement" element="" />
            <Route path="/profil" element={<Profile />} />
        </Routes>
        </BrowserRouter>
    )
}