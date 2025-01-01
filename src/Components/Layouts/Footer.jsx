import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='rounded-xl '>
            <footer className="text-white-600 body-font">
                <div className="container mx-auto px-5 py-24 flex flex-wrap flex-col md:flex-row md:items-center">
                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 text-center md:text-left">
                    <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">Help</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link to="/HowToOrder" className="text-white-600 hover:text-white-800">How to Order</Link>
                                </li>
                                <li>
                                    <Link to="/Faq" className="text-white-600 hover:text-white-800">FAQs</Link>
                                </li>
                            </nav>
                            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">Contact</h2>
                            <p>+62 8953 3633 73663</p>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">Social Media</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href="https://www.instagram.com/ayadsign?igsh=MWVibXhjanltcTc2aQ==" className="text-white-600 hover:text-white-800 flex items-center justify-center md:justify-start">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com" className="text-white-600 hover:text-white-800 flex items-center justify-center md:justify-start">
                                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
                                            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                                        </svg>
                                        TikTok
                                    </a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/3 w-full px-4">
                            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">@ayadesign</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur placeat numquam, repellat quasi maiores, consectetur facilis excepturi a voluptatem modi illo provident quia, dicta magni neque error at ullam!</p>
                            
                        </div>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
