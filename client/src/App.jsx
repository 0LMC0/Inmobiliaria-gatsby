import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './pages/hero/Hero'
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import Contacto from './pages/hero/contacto/Contacto';
import Whatsapp from "./components/whatsapp/Whatsapp";
import Success from "./pages/hero/Payments/Success";
import Failure from "./pages/hero/Payments/Failure";
import Pending from "./pages/hero/Payments/Pending";
import Err404 from './pages/hero/Err404';
import PoliticaPrivacidad from "./pages/popri/PoliticaPrivacidad";

function App() {
  return (
    <DataProvider> 
      <BrowserRouter>
          <Navbar />
          <Whatsapp />
        <Routes>

            <Route path="/" element={<Hero />} />
            <Route path='/carrito' element={<CartContent />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/pagoconfirmado' element={<Success />} />
            <Route path='/pagoconerror' element={<Failure />} />
            <Route path='/pagoenespera' element={<Pending />} />
            <Route path='/politicaprivacidad' element={<PoliticaPrivacidad />} />
            <Route path='*' element={<Err404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  )
}


export default App;
