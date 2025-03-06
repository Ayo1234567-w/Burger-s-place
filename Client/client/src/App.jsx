import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { Suspense } from 'react';
import './App.css';
import Navbar from "./layout/Navbar"
import { Home } from './routes/Routes';
import Footer from "./layout/Footer"
import  LoadingRing  from './utils/Loader';
import Hero from './layout/Hero';
import FavouriteList from './pages/FavouriteList';
import BurgerList from './pages/BurgerList';


function App() {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div className='flex justify-center items-center h-screen'> <LoadingRing/> </div>}>
    <Navbar/>
        <Routes>
      <Route path='/' element= {<Home/>} />
    </Routes>
      <FavouriteList/>
    <BurgerList/>
    <Hero/>
    <Footer/>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App