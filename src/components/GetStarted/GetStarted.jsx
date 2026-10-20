import React, { use } from 'react';
import GetStartedCard from '../UI/GetStartedCard';

const GetStarted = ({ getStartedPromise }) => {
    const getStartedRes = use(getStartedPromise)
    const getStartedAllData = getStartedRes.data;


    return (
        <section className='  bg-[#F9FAFC] py-8 md:py-18 lg:py-30  mb-14 md:mb-18 lg:mb-28 mx-auto'>
            <div className="get-started-container  w-[95%] md:w-[88%]  mx-auto lg:w-[80%]">

                {/* Heading */}
                <div className="heading-container mx-auto mb-6 md:mb-12 w-11/12 max-w-7xl text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        Get Started in 3 Steps
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base leading-6 text-gray-500">
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>


                {/* Card Container */}
                <div className="card-container mx-auto grid w-11/12 max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 ">

                    {
                        getStartedAllData.map(item => {
                            return <GetStartedCard key={item.id} item={item}></GetStartedCard>

                        })
                    }

                </div>




            </div>
        </section>
    );
};

export default GetStarted;