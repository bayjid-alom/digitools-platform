import React from 'react';

const GetStartedCard = ({ item }) => {

    return (
        <div className="relative w-11/12 md:w-full mx-auto rounded-xl  border-gray-200 bg-white px-5 py-10 text-center  transition-all duration-300 ease-in-out hover:bg-white hover:shadow-lg hover:-translate-y-2 hover:border-[#C4B5FD]">

            <span className="absolute right-3.5 top-3.5 flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-xs font-semibold text-white">
                {item.step}
            </span>

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E8FF]">
                <img
                    src={item.icon}
                    alt={item.alt}
                    className="h-8 w-8 object-contain"
                />
            </div>

            <h3 className="mb-2 text-lg font-bold text-[#101727]">
                {item.name}
            </h3>

            <p className="mx-auto max-w-[240px] text-sm leading-6 text-[#627382]">
              {item.description}
            </p>

        </div>
    );
};

export default GetStartedCard;