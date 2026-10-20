import React from 'react';
import CartCard from './CartCard';

const Cart = ({ carts, setCarts }) => {


    return (
        <section className='w-[95%] md:w-[88%] lg:w-[80%]  mx-auto bg rounded-xl p-5 border border-gray-200 mb-13 md:mb-18 lg:mb-30'>



            {/* Cart Card Container */}
            {
                carts.length > 0 && <h2 className='font-bold text-2xl text-black mb-4'>Your Cart</h2>
            }

            <div className="cart-card-container  mx-auto flex flex-col space-y-5 ">
                {
                    carts.map(item => {
                        return <CartCard key={item.id}
                            item={item}
                            carts={carts}
                            setCarts={setCarts}
                        ></CartCard>
                    })
                }



                {/* Conditional Total Price */}
                {
                    carts.length > 0 && <div className='total-price rounded-xl p-2 py3 shadow-xs flex justify-between items-center mx-auto w-full'>
                        <p className='text-[#627382] font-semibold'>Total :</p>
                        <h3 className='text-[20px] font-bold text-[#101727]'>$1100</h3>
                    </div>
                }


                {/* Conditional Proceed Button */}
                {
                    carts.length > 0 && <button

                        className='total-price-btn text-center btn bg-linear-to-r from-[#4F39F6] to-[#9514FA]   rounded-full py-6 text-white font-bold  items-center mx-auto w-full'>
                        Proceed to Checkout
                    </button>
                }




                {/* empty message */}
                {
                    carts.length === 0 && <div className="empty-message px-5 py-10 text-center sm:py-12">

                        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-violet-50 to-purple-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-9 w-9 text-[#6D28D9]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 7H6"
                                />
                                <circle cx="10" cy="21" r="1" />
                                <circle cx="18" cy="21" r="1" />
                            </svg>
                        </div>

                        <h4 className="mb-2 text-xl font-bold text-[#101727] sm:text-2xl">
                            Your Cart Is Empty
                        </h4>

                        <p className="mx-auto max-w-sm text-sm leading-6 text-[#627382]">
                            Explore our collection and add your favorite digital tools.
                        </p>
                    </div>
                }
            </div>






        </section>
    );
};

export default Cart;