import React from "react"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Hero from './pages/hero/Hero'
// RRD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContent from "./components/CartContent/CartContent";
import DataProvider from "./components/Context/DataContext";
import Contacto from './pages/hero/contacto/Contacto';
import Whatsapp from "./components/whatsapp/Whatsapp";
import Success from "./pages/hero/Payments/Success";
import Failure from "./pages/hero/Payments/Failure";
import Pending from "./pages/hero/Payments/Pending";
import Err404 from './pages/hero/Err404';


function App() {

  return (
    
    <DataProvider> 
      <BrowserRouter>
            <Navbar />
            
              <Routes>
                <Route path="/" element={<Hero />}></Route>
                <Route path='/carrito' element={<CartContent />}/>
                <Route path='/contacto' element={<Contacto />}/>
                <Route path='/pagoconfirmado' element={<Success />}/>
                <Route path='/pagoconerror' element={<Failure />}/>
                <Route path='/pagoenespera' element={<Pending />}/>
                <Route path='*' element={<Err404 />}/>
              </Routes>
              <Whatsapp />
            <Footer />
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
