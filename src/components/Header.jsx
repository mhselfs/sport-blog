import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='shadow-2xl h-[60px] w-full bg-white z-50 relative'>
            <div className='container mx-auto flex justify-between items-center h-full px-4'>
                
                <h2 className="text-lg font-bold">Sport Snap</h2>


                <ul className='hidden lg:flex gap-4'>
                    <li>Home</li>
                    <li className='text-[#2626269d]'>دسته‌بندی</li>
                    <li className='text-[#2626269d]'>خبرهای داغ</li>
                    <li className='text-[#2626269d]'>Recent News</li>
                    <li className='text-[#2626269d]'>Clubs Ranking</li>
                    <li className='text-[#2626269d]'>Sports Article</li>
                </ul>

                <div className='hidden lg:flex mt-2'>
                    <button className='flex items-center gap-3 p-[10px] bg-[#B8C2CE] rounded-lg w-[100px] h-[35px]'>
                        <CiSearch /> Search
                    </button>
                </div>

                <div className='lg:hidden flex items-center gap-4'>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
                        {isOpen ? <IoClose /> : <IoMenu size="28px" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className='lg:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200'>
                    <li>Home</li>
                    <li id="Category" className='text-[#2626269d]'>دسته‌بندی</li>
                    <li id='Trending-News' className='text-[#2626269d]'>خبرهای داغ</li>
                    <li id='Club-Ranking' className='text-[#2626269d]'>Clubs Ranking</li>
                    <li id='' className='text-[#2626269d]'>Sports Article</li>
                </ul>
            )}
        </header>
    );
};

export default Header;
