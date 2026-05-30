import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header dir='rtl' className='shadow-2xl h-[60px] w-full bg-white z-50 relative'>
            <div className='container mx-auto flex justify-between items-center h-full px-4 lg:px-8'>
                <ul className='hidden lg:flex gap-4'>
                    <li><a href="#">اصلی</a></li>
                    <li className='text-[#2626269d]'> <a href="#category"> دسته‌بندی </a> </li>
                    <li className='text-[#2626269d]'> <a href="#treading"> خبرهای داغ </a> </li>
                    <li className='text-[#2626269d]'> <a href="#NewsLetter"> جدید‌ترین‌ها </a> </li>
                    <li className='text-[#2626269d]'> <a href="#article"> اخبار  </a> </li>
                </ul>
                <h2 className="text-lg font-bold">Sport Snap</h2>

                {/* <div className='hidden lg:flex mt-2'>
                    <button className='flex items-center gap-3 p-[10px] bg-[#B8C2CE] rounded-lg w-[100px] h-[35px]'>
                        <CiSearch /> Search
                    </button>
                </div> */}

                <div className='lg:hidden flex items-center gap-4'>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
                        {isOpen ? <IoClose /> : <IoMenu size="28px" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className='lg:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200'>
                    <li><a href="#">اصلی</a></li>
                    <li className='text-[#2626269d]'> <a href="#category"> دسته‌بندی </a> </li>
                    <li className='text-[#2626269d]'> <a href="#treading"> خبرهای داغ </a> </li>
                    <li className='text-[#2626269d]'> <a href="#NewsLetter"> جدید‌ترین‌ها </a> </li>
                    <li className='text-[#2626269d]'> <a href="#article"> اخبار </a> </li>
                </ul>
            )}
        </header>
    );
};

export default Header;
