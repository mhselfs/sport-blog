import React from 'react'

function NewsModal({ show, article, onClose }) {
    if (!show) {
        return null
    }
    return (
        // BUG: Scroll not fix
        <div dir='rtl' id='modal-overlay' className='fixed top-0 left-0 inset-0 p-8 bg-black/50 flex justify-center items-center z-1000 overflow-hidden'>
            <div id='modal-content' className='relative w-[50%] max-h-[90vh] backdrop-blur-3xl p-8 shadow-2xs rounded-2xl overflow-y-auto' onClick={onClose}>
                <span id="call-button" className=' absolute top-4 right-8 text-2xl text-white cursor-pointer' onClick={e => { e.stopPropagation(); onClose() }}>
                    <p>x</p>
                </span>
                <img className='w-full h-auto max-h-120 p-4 object-cover opacity-50 rounded-2xl' src={article.image_url} alt="" />
                <h2 className='text-3xl text-white mt-8' id='modal-title'>{article.title}</h2>
                <a href={article.source.url} id="modal-sour" className='text-2xl text-white/80 mt-4 italic'>{article.source.name}</a>
                <p id="modal-text" className='text-base font-light mt-8 text-white'>{article.description}</p>
                <a href={article.source.url} id='readmore-link' className='inline-block bg-linear-0 bg-purple-600 rounded-2xl p-2 mt-4 text-white'>متن کامل خبر</a>
            </div>
        </div>
    )
}

export default NewsModal