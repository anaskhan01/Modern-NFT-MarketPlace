import React from 'react'
import './Hero.css'
import Newsletter from './Newsletter.png'
import { BsFillSendFill } from 'react-icons/bs'

const NewsLetter = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">

                <img className='w-auto h-auto' src={Newsletter} alt='Newsletter' />

                <div className="md:w-3/6 w-full p-10">
                    <div className='tf-left'>
                        <div className='tf-heading text-lg'>
                            <span>Never Miss a Drop!!</span>
                        </div>
                        <div className='tf-description'> Subscribe to Our Super-Exclusive drop list and be the first to know about upcoming drops</div>
                    </div>

                    <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-4">
                        <input
                            className="block w-full text-sm text-slate-200 bg-transparent border-0 focus:outline-none focus:ring-0"
                            type="email"
                            placeholder="Enter Your Email Address"
                            required />
                        <BsFillSendFill style={{ "fontSize": "20px", "marginRight": "10px" }} />
                    </div>



                </div>



            </div>
        </div>
    )
}

export default NewsLetter