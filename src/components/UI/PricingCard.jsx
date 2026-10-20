import React from 'react';

const PricingCard = ({ pricing }) => {
    const {
        name,
        description,
        price,
        period,
        isPopular,
        badge,
        bgColor,
        textColor,
        buttonText,
        features
    } = pricing;

    return (
        <div className={`flex w-11/12 relative mx-auto flex-col justify-between
        ${isPopular === true
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                : "bg-[#F9FAFC] "} rounded-2xl p-4 md:p-5 border border-gray-200 text-gray-900
                hover:-translate-y-2 transition-all duration-300 ease-in-out hover:shadow-lg`}>


            {/* Most Popular Badge*/}
            {
                isPopular === true && <div className='absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FEF3C6]  text-xs font-semibold px-5 py-2 rounded-full  border-none'>
                    <span className='text-[#BB4D00]'>{badge}</span>
                </div>
            }

            <div>
                <h3 className={`${isPopular ? "text-white" : "text-gray-900"} text-xl md:text-2xl font-bold tracking-tight`}>
                    {name}
                </h3>

                <p className={`${isPopular === true ? "text-white" : "text-gray-500"} mt-1.5 text-xs md:text-sm`}>
                    {description}
                </p>

                {/* Price and Period */}
                <div className="mt-6 mb-8 flex items-baseline gap-x-1">
                    <span className={`${isPopular ? "text-white" : "text-gray-900"} text-3xl md:text-4xl font-extrabold tracking-tight`}>
                        ${price}
                    </span>
                    <span className={`${isPopular ? "text-white/70" : "text-gray-500"} text-sm md:text-base font-medium`}>
                        /{period}
                    </span>
                </div>


                <ul className={`flex-1 min-h-36 space-y-2 mb-6 text-xs md:text-sm 
                    ${isPopular === true ? "text-white" : "text-gray-600"}`}>
                    {
                        features.map((feature, index) => <li key={index} className="flex text-sm items-center gap-x-3">

                            <svg
                                className={`${isPopular === true ? "text-white" : "text-[#10B981]"} h-4 w-4 flex-shrink-0 `}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>{feature}</span>
                        </li>)
                    }
                </ul>

            </div>


            {/* Button */}
            <div className="mt-auto">
                <button className={`w-full rounded-full py-3 text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer ${isPopular
                    ? "bg-white text-[#4F39F6] hover:bg-gray-100"
                    : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90"
                    }`}
                >
                    {buttonText}
                </button>
            </div>

        </div>
    );
};

export default PricingCard;