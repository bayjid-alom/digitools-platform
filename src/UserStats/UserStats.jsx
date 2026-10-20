import React from 'react';

const UserStats = () => {
    return (
        <section className='bg-gradient-to-r from-[#4F39F6] p-4 md:p-15 to-[#9514FA] mb-15 md:mb-22 lg:mb-30'>

            <div className="mx-auto grid w-[95%] grid-cols-1 text-center md:w-[88%] md:grid-cols-3 lg:w-[80%]">
                <div className="flex w-full flex-col items-center justify-center py-6">
                    <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-[60px]">50K+</h2>
                    <p className="text-base font-medium text-white md:text-lg lg:text-xl">Active Users</p>
                </div>

                <div className="flex w-full flex-col items-center justify-center border-y border-white/20 py-6 md:border-x md:border-y-0">
                    <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-[60px]">200+</h2>
                    <p className="text-base font-medium text-white md:text-lg lg:text-xl">Premium Tools</p>
                </div>

                <div className="flex w-full flex-col items-center justify-center py-6">
                    <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-[60px]">4.9</h2>
                    <p className="text-base font-medium text-white md:text-lg lg:text-xl">Rating</p>
                </div>
            </div>

        </section>
    );
};

export default UserStats;