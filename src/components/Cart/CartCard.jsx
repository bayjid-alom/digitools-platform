import React from 'react';
import { toast } from 'react-toastify';

const CartCard = ({ item, carts, setCarts }) => {
    
    const handleRemoveCard = () => {
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.success(`${item.name} removed from your cart!`);
    }

    return (
        <div className='cart-card bg-[#F9FAFC] rounded-xl p-3 py-3 md:py-0 md:p-5 flex justify-between items-center mx-auto w-full'>

            <div className='left-side flex items-center gap-4'>

                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-gray-100 bg-white">
                    <img
                        src={item.icon}
                        alt={item.alt}
                        className="h-6 w-6 object-contain"
                    />
                </div>


                <div>
                    <h3 className='font-semibold text-[#101727]  md:text-xl mb-1'>{item.name}</h3>
                    <p className='text-[#627382] font-bold'>${item.price}</p>
                </div>
            </div>


            <div onClick={handleRemoveCard}
                className="right-side btn btn-sm md:btn-md rounded-full">
                <h3 className='text-red-500 text-[14px] font-bold'>Remove</h3>
            </div>
        </div>


    );
};

export default CartCard;