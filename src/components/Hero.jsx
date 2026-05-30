import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import basket from "../assets/basketball-bg.png";
import heroText from "../assets/hero-text.png";
import basketplayer from "../assets/basketball-player.png";
import newsData from "../data.js";
import axios from 'axios'
import PostCart from './PostCart';
import NewsModal from './NewsModal';
import muckData from '../mouck.json'
import cartImg1 from "../assets/hero-cart-1.png";
import cartImg2 from "../assets/hero-cart-2.png";


const Hero = () => {
    const filteredNews = [
        {
            id: 1,
            image: cartImg1,
            date: "Race98 - 03 June 2023",
            title: "پیمان‌کاران اتیوپی در چهار جایگاه اول قرار گرفتند.",
            description: "",
            category: "ورزش‌های انتخابی",
            introduction: "در یک نمایش نفس‌گیر از استقامت، سرعت و اراده، پیمان‌کاران اتیوپیا دوباره ثابت کردند که چرا از قوی‌ترین نیروها در دوهای طولانی‌مدت هستند. در یک مسابقه مهم اخیر، ورزشکاران اتیوپی چهار جایگاه اول را به دست آوردند و جامعه جهانی را با عملکرد فوق‌العاده خودشان تحت تأثیر قرار دادند. این دستاورد شگفت‌انگیز نه تنها میراث غنی دوایران را برجسته می‌کند، بلکه وضعیت آنها را به عنوان یک قدرت بزرگ در دنیای ورزش تثبیت می‌کند.",
        },
        {
            id: 2,
            image: cartImg2,
            date: "NDYCAR - 03 June 2023",
            title: "مسابقات IndyCar دیترویت: دیکسون سریع‌ترین زمان را در تمرین دوم به دست آورد",
            description: "",
            category: "رقابت",
            introduction: "شهر موتورسیتی با هیجان در حال تپیدن است، زیرا سری NTT IndyCar در خیابان‌های دیترویت برای مسابقه بزرگ دیترویت گرم می‌شود. در یک جلسه تمرینی دوم هیجان‌انگیز، اسکات دیکسون، قهرمان شش‌گانه IndyCar، به دلیل اینکه یکی از بزرگترین رانندگان تاریخ این ورزش است، سریع‌ترین زمان را ثبت کرد و پیامی واضح به رقبا ارسال کرد. با افزایش گرمی مسابقات آخر هفته، عملکرد دیکسون صحنه را برای آنچه وعده می‌دهد یک رویداد هیجان‌انگیز می‌گذارد.",
        }
    ]

    return (
        <div
            className='flex flex-col lg:flex-row items-center justify-start h-screen bg-no-repeat bg-left'
            style={{ backgroundImage: `url(${basket})` }}
        >
            <div className='flex flex-col items-start justify-center ml-16'>
                <img src={heroText} alt="Hero Text" className="z-10 mt-20 lg:w-[500px] lg:mt-[0px]  "  />
            </div>

            <div className='relative flex flex-col w-screen top-0 items-center justify-center text-center lg:mt-[300px]
            lg:ml-[-300px]'>
                <img src={basketplayer} alt="Basketball Player" className="w-[620px] h-[480px] z-20 mb-2" />
                <p className='text-[#262626] mb-2 max-w-xs'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p>
                <button href='#article' className='w-[285px] h-[62px] mt-2 text-white bg-[#262626] px-2 py-2 rounded hover:transition-opacity hover:cursor-pointer
                '>
                <a href="#article">
                        به خواندن ادامه دهید
                </a>
                </button>
            </div>

            <div dir='rtl' className='hidden lg:flex flex-col gap-4 mr-8 mt-[300px] ml-[100px]'>
                {filteredNews.map((card) => (
                    <Link to={`/blog/${card.id}`} key={card.id}>
                        <div
                            className='w-[270px] h-[233px] bg-cover bg-center rounded-lg p-4
                             text-white flex flex-col justify-end relative overflow-hidden'
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <div className='absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t
                             from-black/40 backdrop-blur-sm'></div>
                            <span className='text-xs text-white relative'>{card.date}</span>
                            <p className='text-sm relative'>{card.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Hero;
