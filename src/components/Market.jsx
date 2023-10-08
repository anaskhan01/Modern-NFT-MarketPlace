import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Header from './Header'
import Artworks from './Artworks'
import Footer from './Footer'
import { useGlobalState, truncate } from '../store'
import SearchBar from './SearchBar';

const Market = () => {


    const [connectedAccount] = useGlobalState('connectedAccount')
    const slides = [
        {
            url: 'https://th.bing.com/th/id/R.c6dfa22150790c670c988c5196f6ba0e?rik=AfRtAVTNVLDaXA&riu=http%3a%2f%2fclipart-library.com%2fimages%2fpcodLydri.gif&ehk=Y994C%2fZgHEPxLGlR01RKqpekq9LiLPekmCIQjTa4SF4%3d&risl=&pid=ImgRaw&r=0',
            name: "Inversly Famped",
            des: "00.29 ETH - 12 Items"
        },
        {
            url: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/7bd46751113095.58e33afae8ffc.gif',
            name: 'Daft Punk Neural Edition',
            des: "05.10 ETH - 09 Items"
        },
        {
            url: 'https://miro.medium.com/max/1344/1*4denSP09ko6rsK4PqMX9KA.gif',
            name: 'Man Majestic',
            des: "00.10 ETH - 05 Items"
        },

        {
            url: 'https://static.wixstatic.com/media/882ef8_b3ed27c4abb549288229157a53112035~mv2.gif',
            name: 'Triffle Giraffe',
            des: "00.02 ETH - 1 Items"
        },
        {
            url: 'https://cdn.dribbble.com/users/1055986/screenshots/3057186/28.gif',
            name: 'Pacman Attack',
            des: "10.29 ETH - 02 Items"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <div>
            <Header />

            <SearchBar />

            {/* Latest Drop  */}
            {connectedAccount ? (
                <div className='bg-cyan-900 max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
                    <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
                    </div>
                    <div
                        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h2 class="text-3xl font-bold tracking-wider">{slides[currentIndex].name}</h2>
                        <p className='font-bold'>
                            {slides[currentIndex].des}
                        </p>
                    </div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >

                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
            ) : ""}

            <Artworks />
            <Footer />
        </div>
    )
}

export default Market