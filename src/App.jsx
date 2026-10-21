import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import UserStats from './components/UserStats/UserStats'
import Products from './components/Products/Products'
import { ToastContainer } from 'react-toastify'
import Cart from './components/Cart/Cart'

import axios from 'axios'
import GetStarted from './components/GetStarted/GetStarted'
import Pricing from './components/Pricing/Pricing'
import Transform from './components/Transform/Transform'


const fetchProducts = async () => {
  const res = await fetch("/products-data.json")
  return res.json()
}

const getStartedPromise = axios.get('/steps-data.json')
const pricingPromise = axios.get('/pricing-data.json')



function App() {
  const productsPromise = fetchProducts()
  const [activeTabs, setActiveTabs] = useState("products")

  const [carts, setCarts] = useState([])


  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <UserStats></UserStats>


      {/* Products section heading */}
      <div className="heading-container mx-auto mt-12 mb-6 w-11/12 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base leading-6 text-gray-500">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>
      </div>

      {/* Products section tabs */}
      <div className="tabs-container mx-auto mb-10 flex w-11/12 max-w-[320px] items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 ">

        <button
          onClick={() => setActiveTabs("products")}
          className={`flex-1 rounded-full  ${activeTabs === "products"
            ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-colors text-white"
            : "bg-white text-black"}  px-4 py-2.5 text-sm font-semibold  shadow-sm `}>
          Products
        </button>

        <button
          onClick={() => setActiveTabs("cart")}
          className={`flex-1 rounded-full px-4 py-2.5 text-sm font-semibold shadow-sm
          ${activeTabs === "cart"
              ? "bg-linear-to-r from-[#4F39F6]  to-[#9514FA] transition-colors text-white"
              : "bg-white text-black"}`}>
          Cart ({carts.length})
        </button>
      </div>





      <Suspense fallback={<div className='flex justify-center mx-auto text-black py-12'>
        <span className="loading loading-dots loading-xl"></span>
      </div>}
      >
        {
          activeTabs === "products" && <Products
            productsPromise={productsPromise}
            carts={carts}
            setCarts={setCarts}
          ></Products>
        }

        {
          activeTabs === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>
        }
      </Suspense>





      <GetStarted getStartedPromise={getStartedPromise}></GetStarted>
      <Pricing pricingPromise={pricingPromise}></Pricing>
      <Transform></Transform>





      <ToastContainer />
    </>
  )
}

export default App
