import React from 'react';
import Links from './Links';
import navCartImage from '../../assets/products/shopping-cart.png'
import navLogo from '../../assets/products/DigiTools-logo.png'


const navLinks = [
    { name: "Products", path: "#products" },
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "FAQ", path: "#faq" }
];


const Navbar = () => {
    const links = navLinks.map(route => <Links key={route.id} route={route}></Links>)


    return (
        <header className='py-2.5 md:py-5  border-b border-gray-200'>


            <nav className='w-[95%] md:w-[88%] lg:w-[80%] mx-auto flex justify-between items-center'>

                {/* Nav Start */}
                <div className="w-[100px] shrink-0 md:w-[140px]">
                    <img
                        className="w-full object-contain"
                        src={navLogo}
                        alt="DigiTools logo"
                    />
                </div>

                {/* Navbar Center */}
                <ul className='hidden md:flex md:gap-6 lg:gap-8 items-center'>
                    {
                        links
                    }
                </ul>


                {/* Navbar end */}
                <div className='buttons-div flex gap-4 items-center'>
                    <button className="relative rounded-full p-2.5 transition-colors duration-300 hover:bg-[#4F39F6]/10">
                        <img
                            className="h-4.5 w-4.5 object-contain"
                            src={navCartImage}
                            alt="Shopping cart"
                        />

                        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white shadow-sm">
                            0
                        </span>
                    </button>


                    <button className="text-sm hidden md:inline font-semibold text-[#101727] transition-colors duration-300 transition-all ease-in-out hover:text-[#4F39F6]">
                        Login
                    </button>

                    <button className="rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-2.5 md:py-3 text-sm font-bold text-white transition-all duration-300 hover:from-[#3D28D8] hover:to-[#7E0EDB] active:scale-95 whitespace-nowrap">
                        Get Started
                    </button>
                </div>



            </nav>


        </header>
    );
};

export default Navbar;