import React from 'react';
import bannerImage from '../../assets/banner.png';
import circle from '../../assets/circle.png'
import playIcon from '../../assets/play.png'

const Banner = () => {
    return (
        <section className='my-10 md:my-20 lg:my-[80px]'>

            <div className='w-[95%] md:w-[88%] lg:w-[80%]  mx-auto flex flex-col md:flex-row gap-8 md:gap-15 justify-between items-center'>

                <div className='banner-content max-w-[640px]'>

                    <div className="inline-flex max-w-full mb-3 items-center gap-2 rounded-full bg-[#E1E7FF] px-4 py-2">
                        <img className="h-4 w-4 shrink-0 object-contain" src={circle} alt="" />
                        <p className="whitespace-nowrap bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-sm font-semibold text-transparent">
                            New: AI-Powered Tools Available
                        </p>
                    </div>

                    <h1 className='text-[30px] md:text-[40px] lg:text-[70px] font-extrabold mb-4'>Supercharge Your Digital Workflow</h1>

                    <p className="mt-4  text-sm leading-7 text-[#5B6475] sm:text-base sm:leading-8">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="buttons mt-8 flex items-center gap-2">
                        <button className="w-fit whitespace-nowrap rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:from-[#3D28D8] hover:to-[#7E0EDB] active:scale-95">
                            Explore Products
                        </button>

                        <button className="inline-flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#4F39F6] px-6 py-3 text-sm font-bold text-[#4F39F6] transition-all duration-300 hover:bg-[#4F39F6] hover:text-white active:scale-95">
                            <img className="h-4 w-4 shrink-0 object-contain" src={playIcon} alt="" />
                            Watch Demo
                        </button>
                    </div>
                </div>


                <div className="banner-image w-full max-w-[500px]">
                    <img
                        className="h-auto w-full object-contain"
                        src={bannerImage}
                        alt="Banner"
                    />
                </div>

            </div>

        </section>
    );
};

export default Banner;