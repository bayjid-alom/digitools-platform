import { Check } from 'lucide-react';
import React from 'react';

const ProductCard = ({ product }) => {
    const { name, description, price, period, tag, tagType, features, icon, alt } = product;


    return (
        <div className="mx-auto hover:-translate-y-2 transition-all duration-300 ease-in-out relative w-full max-w-[320px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm  hover:shadow-md">

            {/* Tag */}
            <span className={`absolute right-2 top-2 rounded-full
                ${tagType === "popular" ? "bg-violet-100 text-violet-600" : ""} 
                ${tagType === "new" ? "bg-green-100 text-green-600" : ""}
                ${tagType === "best-seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : ""} px-3 py-1 text-[10px] font-medium `}>
                {tag}
            </span>

            {/* Icon */}
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white">
                <img
                    src={icon}
                    alt={alt}
                    className="h-6 w-6 object-contain"
                />
            </div>

            {/* Product Info */}
            <h3 className="text-base font-semibold text-[#101727]">
                {name}
            </h3>

            <p className="mt-2 text-[11px] leading-4 text-gray-500">
                {description}
            </p>

            {/* Price */}
            <div className="mt-3 flex items-baseline gap-1">
                <span className="text-lg font-bold text-gray-900">${price}</span>
                <span className="text-[11px] text-gray-500">/{period}</span>
            </div>

            {/* Features */}
            <div className="mt-3 space-y-1.5">

                {
                    features.map(feature => <p className="flex items-center gap-1.5 text-[11px] text-gray-600">
                        <Check size={14} className="shrink-0 text-green-500" />
                        {feature}
                    </p>)
                }



            </div>

            {/* Buy button */}
            <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-3 text-xs font-semibold text-white transition-opacity hover:opacity-90">
                Buy Now
            </button>

        </div>
    );
};

export default ProductCard;