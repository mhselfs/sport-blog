import React from 'react';
import { useEffect, useState } from 'react';
import PostCart from './PostCart';
import { useNavigate } from 'react-router-dom';
// import newsData from "../data.js";
import muckData from '../mouck.json'
import rightSide from "../assets/trending-4.png"
import axios from 'axios'

const TrendingNews = () => {
    const navigate = useNavigate();
    // const [news, setNews] = useState([])
    // useEffect(() => {
    //     const fetchNews = async () => {
    //         try {
    //             const res = await axios.get("https://api.widgetify.ir/news/rss?url=DEFAULT&sourceName=DEFAULT");
    //             const fetchedNews = res.data;
    //             const filteredMuck = fetchedNews.slice(5, 8)
    //             setNews(filteredMuck);
    //         } catch (err) {
    //             console.error('Fetch error:', err);
    //         }
    //     };
    //     fetchNews();
    // }, [])
    

    return (
        <div id='treading' className='flex flex-col lg:flex-row justify-center p-4 md:p-8 lg:m-8 xl:m-16 2xl:m-32'>
            <div className='lg:mx-5 mb-8 lg:mb-0'>
                <h4 className='text-[#262626] text-xl md:text-2xl lg:text-4xl font-bold leading-[1.2] md:leading-[1.3] lg:leading-[38px] mb-4 lg:mb-6 text-center '>
                    خبرهای داغ
                </h4>

                {muckData
                    .slice(1, 4)
                    .map((news) => (
                        <div
                            dir='rtl'
                            key={news.title}
                            className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 my-4 md:my-5 cursor-pointer'
                        >
                            <div className='w-full sm:w-auto'>
                                <img
                                    src={news.image_url}
                                    alt={news.title}
                                    className='w-full sm:w-[150px] md:w-[180px] lg:w-[234px] h-[120px] sm:h-[100px] md:h-[130px] lg:h-[150px] rounded-md object-cover'
                                />
                            </div>
                            <div className='w-full sm:max-w-[calc(100%-170px)] md:max-w-[calc(100%-200px)] lg:max-w-[270px]'>
                                <PostCart dateString={news.publishedAt} />
                                <h5 className='text-base md:text-lg leading-[136.9%] text-[#262626] my-1 md:my-2'>
                                    {news.title}
                                </h5>
                                <p className='text-xs md:text-sm leading-[123.9%] text-[#696868] line-clamp-2'>
                                    {news.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Right Section */}
            <div
                dir='rtl'
                style={{ backgroundImage: `url(${rightSide})` }}
                className="w-full lg:w-[500px] xl:w-[570px] h-[350px] sm:h-[400px] md:h-[500px] lg:h-[609px] relative bg-cover bg-center cursor-pointer rounded-md overflow-hidden"
            >

                <div className="absolute bottom-4 left-4 text-white z-10 p-2 sm:p-4">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2">
                        نقش موثر ورزش در درمان افسردگی را نمیتوان نادیده گرفت
                    </p>
                </div>
            </div>

        </div>
    );
}

export default TrendingNews;