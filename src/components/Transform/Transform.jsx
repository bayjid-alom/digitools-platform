import React from 'react';

const Transform = () => {
    return (
        <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-8 md:py-18 lg:py-30">
            <div className="w-[95%] md:w-[88%] lg:w-[80%] mx-auto text-center">


                <div className="heading-container mx-auto mb-8 w-11/12 max-w-7xl text-center">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                        Ready to Transform Your Workflow?
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base leading-6 md:leading-7 text-white">
                        Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                    </p>
                </div>



                <div className="buttons flex flex-wrap items-center justify-center gap-3">
                    <button className="w-fit whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition-colors duration-300 active:scale-95">
                        Explore Products
                    </button>

                    <button className="group inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border border-white px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#4F39F6] hover:text-white active:scale-95">
                        View Pricing
                    </button>
                </div>


                <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
                    14-day free trial &middot; No credit card required &middot; Cancel anytime
                </p>


            </div>
        </section>
    );
};

export default Transform;