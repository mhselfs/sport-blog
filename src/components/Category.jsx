import React from 'react';
import catImg1 from "../assets/category-1.png";
import catImg2 from "../assets/category-2.png";
import catImg3 from "../assets/category-3.png";
import catImg4 from "../assets/category-4.png";


const Category = () => {
    return (
        <div className='mx-32 mt-72 md:mx-4 md:mt-32'>
            <h4 className='ml-[-100px] mb-2 text-3xl leading-[38px] md:ml-22 text-center font-bold'>دسته‌بندی</h4>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-7 md:gap-4'>
                <div className='md:flex md:flex-col md:items-center'>
                    <div className='w-[290px] h-[116px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[290px] shadow-xl rounded-2xl'>
                        <span className='font-semibold text-3xl'> فوتبال</span>
                    </div>
                    <img className='w-[270px] h-[288px] object-contain md:w-full md:max-w-[270px]' src={catImg1} />
                </div>
                <div className='md:flex md:flex-col md:items-center'>
                    <img className='w-[270px] h-[235px] object-contain md:w-full md:max-w-[270px]' src={catImg2} />
                    <div className='w-[270px] h-[116px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[270px]  shadow-xl rounded-2xl'>
                        <span className='font-semibold text-3xl'> بسکتبال</span>
                    </div>
                </div>
                <div className='md:flex md:flex-col md:items-center'>
                    <div className='w-[270px] h-[169px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[270px]  shadow-xl rounded-2xl'>
                        <span className='font-semibold text-3xl'> فرمول یک</span>
                    </div>
                    <img className='w-[270px] h-[288px] object-contain md:w-full md:max-w-[270px] border-0' src={catImg3} />
                </div>
                <div className='md:flex md:flex-col md:items-center'>
                    <img className='w-[270px] h-[286px] object-contain md:w-full md:max-w-[270px] rounded-2' src={catImg4} />
                    <div className='w-[270px] h-[118px] bg-[#EBEEF3] flex items-center justify-center my-4 md:w-full md:max-w-[270px] '>
                    <span className='font-semibold text-3xl'> تنیس روی میز</span>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;