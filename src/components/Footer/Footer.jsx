import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#111827] text-white pb-5 pt-8 md:pt-18 lg:pt-30'>

            <div className='w-[93%] md:w-[88%] lg:w-[80%] mx-auto'>

                <div className='grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-x-10'>


                    <div className='footer-brand col-span-2 md:col-span-4 lg:col-span-1'>
                        <h2 className='text-[24px] md:text-[28px] font-bold mb-3'>DigiTools</h2>
                        <p className='max-w-[320px] text-sm leading-6 text-[#9CA3AF]'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>



                    <div className='footer-product'>
                        <h4 className='text-base font-medium mb-4'>Product</h4>
                        <ul className='flex flex-col gap-3'>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Features</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Pricing</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Templates</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Integrations</a></li>
                        </ul>
                    </div>



                    <div className='footer-company'>
                        <h4 className='text-base font-medium mb-4'>Company</h4>
                        <ul className='flex flex-col gap-3'>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>About</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Blog</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Careers</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Press</a></li>
                        </ul>
                    </div>



                    <div className='footer-resources'>
                        <h4 className='text-base font-medium mb-4'>Resources</h4>
                        <ul className='flex flex-col gap-3'>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Documentation</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Help Center</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Community</a></li>
                            <li><a href='#' className='text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Contact</a></li>
                        </ul>
                    </div>




                    <div className='footer-social'>
                        <h4 className='text-base font-medium mb-4'>Social Links</h4>
                        <div className='flex items-center gap-3'>

                            <a href='#' aria-label='Instagram' className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111827] transition-transform duration-300 hover:scale-110'>
                                <svg viewBox='0 0 24 24' className='h-4 w-4' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
                                    <rect x='3' y='3' width='18' height='18' rx='5' />
                                    <circle cx='12' cy='12' r='4' />
                                    <circle cx='17.2' cy='6.8' r='0.8' fill='currentColor' stroke='none' />
                                </svg>
                            </a>

                            <a href='#' aria-label='Facebook' className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111827] transition-transform duration-300 hover:scale-110'>
                                <svg viewBox='0 0 24 24' className='h-4 w-4' fill='currentColor' aria-hidden='true'>
                                    <path d='M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5v-7.2H10V13h2.5v-2.1c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V13h2.7l-.4 2.8h-2.3V21H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z' />
                                </svg>
                            </a>

                            <a href='#' aria-label='X' className='flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111827] transition-transform duration-300 hover:scale-110'>
                                <svg viewBox='0 0 24 24' className='h-4 w-4' fill='currentColor' aria-hidden='true'>
                                    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                                </svg>
                            </a>

                        </div>
                    </div>



                </div>




                <div className='mt-10 md:mt-12 border-t border-[#374151]'></div>

                <div className='footer-bottom pt-6 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left'>
                    <p className='text-xs text-[#9CA3AF]'>© 2026 Digitools. All rights reserved.</p>

                    <div className='flex flex-wrap items-center justify-center gap-5 md:gap-6'>
                        <a href='#' className='text-xs text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Privacy Policy</a>
                        <a href='#' className='text-xs text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Terms of Service</a>
                        <a href='#' className='text-xs text-[#9CA3AF] transition-colors duration-300 hover:text-white'>Cookies</a>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;