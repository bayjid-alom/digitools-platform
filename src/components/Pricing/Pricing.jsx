import React, { use } from 'react';
import PricingCard from '../UI/PricingCard';

const Pricing = ({ pricingPromise }) => {
    const pricingRes = use(pricingPromise)
    const pricings = pricingRes.data;

    return (
        <section className=' w-[95%] md:w-[88%] lg:w-[80%] mx-auto  mb-13 md:mb-18 lg:mb-34 '>

            {/* Heading */}
            <div className="heading-container mx-auto mb-6 md:mb-12 w-11/12 max-w-7xl text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    Simple, Transparent Pricing
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base leading-6 text-gray-500">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>


            {/* Cart Container */}

            <div className="card-container mx-auto grid w-11/12 max-w-6xl grid-cols-1 gap-9 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 ">

                {
                    pricings.map(pricing => {
                        return <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
                    })
                }

            </div>




        </section>
    );
};

export default Pricing;