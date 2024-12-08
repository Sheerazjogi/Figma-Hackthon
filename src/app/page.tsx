import React from 'react'
// import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
// import Home from './components/Home/Home'
// import Products from './components/Home/Products';
// import Leatest from './components/Home/Leatest'
// import Footer from "./components/Footer/Footer";
import Home from "./componants/Home/Home";
import Products from "./componants/Home/Products";
import Leatest from "./componants/Home/Leatest";
import Footer from "./componants/Footer/Footer";

export default function page() {
  return (
    <div>

{/* <Header/>
<Navbar/> */}
<Home/>
<Products/>
<Leatest/>

<Footer/>




    </div>
  )
}