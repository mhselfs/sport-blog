import React from 'react';
import newsbg from "../assets/news-bg.png";
import newsText from "../assets/news-text.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import arrow from "../assets/arrow.png";

const NewsLetter = () => {
    return (
        <div id='NewsLetter' className='max-h-auto lg:max-h-[385px] w-full max-w-screen bg-[#262626]/10'>
            {/* Desktop Version (exactly as original) */}
            <div className='hidden lg:flex gap-5 justify-around'>
                <div className='mx-20 mt-8'>
                    <img className='h-[120px] my-10 object-contain' src={newsText} alt="Newsletter" />
                    <div className="relative">
                        <input
                            placeholder="example@gmail.com"
                            type="email"
                            className="w-[480px] h-[58px] rounded-md border border-[#262626] text-[#262626]/60 p-3 text-lg"
                        />
                        <img
                            src={arrow}
                            className="absolute right-[50px] top-1/2 transform -translate-y-1/2 bg-[#262626] text-white w-[70px] h-[58px] p-4 rounded-md object-contain"
                            alt="Submit"
                        />
                    </div>
                </div>
                <div>
                    <img className='w-[520px] h-[385]' src={newsbg} alt="Newsletter background" />
                </div>
            </div>
            
            {/* Mobile Version */}
            <div className='lg:hidden flex flex-col px-6'>
                <span>با خبرنامه ما همراه باشید</span>
                
                <div className="relative mb-6">
                    <input
                        placeholder="example@gmail.com"
                        type="email"
                        className="w-full h-[48px] rounded-md border border-[#262626] text-[#262626]/60 p-3 text-base"
                    />
                    <img
                        src={arrow}
                        className="absolute right-0 top-0 h-full bg-[#262626] w-[60px] p-3 rounded-r-md object-contain"
                        alt="Submit"
                    />
                </div>
                
                <img className='w-full h-auto object-cover rounded-lg' src={newsbg} alt="Newsletter background" />
            </div>

            {/* Social Icons (Desktop) */}
            <div className='flex text-white gap-4 w-screen bg-[#262626] justify-center'>
                <img src={facebook} className='bg-[#262626] h-10 lg:w-10 object-contain p-2 rounded-md' alt="Facebook" />
                <img src={instagram} className='bg-[#262626] h-10 lg:w-10 object-contain p-2 rounded-md' alt="Instagram" />
            </div>
        </div>
    );
}

export default NewsLetter;