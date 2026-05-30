
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import PostCart from './PostCart';
import muckData from '../mouck.json'
const Article = () => {
    // const [news, setNews] = useState([])

    
    // useEffect(()=>{
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
    // },[])
    const newsMuckSlice = muckData.slice(3, 6)

    return (
        <div id='article' className='mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 my-8 sm:my-12 md:my-16 lg:my-20 xl:my-32'>
            <h1 className='text-center text-2xl'>آرتیکل</h1>
            <div className='flex flex-col md:flex-row gap-4 sm:gap-5'>
                {newsMuckSlice.map(news => (
                    <div dir='rtl' key={news.title} className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <div className='relative'>
                            <Link to={`/blog/${news.title}`}>
                                <img
                                    src={news.image_url}
                                    className='w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[248px] object-cover rounded-lg'
                                    alt={news.title}
                                />
                            </Link>
                        </div>

                        <div className='my-3 sm:my-4'>
                            <div className='flex items-center gap-3 sm:gap-4 my-3 sm:my-4'>
                                <a href={news.source.url} className='leading-[1.2] sm:leading-[22px] text-xs sm:text-sm text-[#3E3232]'>
                                    {news.source.name}
                                </a>
                            </div>

                            <div className='max-w-full my-3 sm:my-4'>
                                <PostCart dateString={news.publishedAt} />
                                <h5 className='text-base sm:text-lg md:text-xl text-[#262626] my-2 sm:my-3 md:my-4'>
                                    {news.title}
                                </h5>
                                <p className='text-[#696868] text-sm sm:text-base my-2 sm:my-3 md:my-4 line-clamp-2 sm:line-clamp-3'>
                                    {news.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='flex justify-center md:justify-start mt-6 sm:mt-8'>
                <div className='bg-[#262626] w-[50px] sm:w-[60px] md:w-[70px] h-[40px] sm:h-[45px] md:h-[50px] flex justify-center items-center rounded-sm cursor-pointer hover:bg-[#262626]/90 transition'>
                    <FaLongArrowAltLeft className='text-[#EBEEF3] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
                </div>
                <div className='bg-[#262626] w-[50px] sm:w-[60px] md:w-[70px] h-[40px] sm:h-[45px] md:h-[50px] flex justify-center items-center rounded-sm cursor-pointer mx-3 sm:mx-4 md:mx-5 hover:bg-[#262626]/90 transition'>
                    <FaLongArrowAltRight className='text-[#EBEEF3] w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
                </div>
            </div> */}
        </div>
    );
};

export default Article;