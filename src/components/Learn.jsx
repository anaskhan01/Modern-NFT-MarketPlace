import React from 'react'
import Header from './Header'
import Footer from './Footer'
import TrackVisibility from 'react-on-screen';
import './Learn.css'

const Learn = () => {
    return (
        <div>
            <Header />

            <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
                <div className="md:w-3/6 w-full">
                    <div className='tf-left'>
                        <div className='tf-heading'>
                            Learn to <span className='heading-gradient-2'>
                                Create, Sell </span> and <span className='heading-gradient-2'> Buy </span> NFTs Collections
                        </div>
                        <div className='tf-description'>Learn how Our platform works for Create, Buy and Sell NFT Collections </div>
                    </div>
                </div>


                <TrackVisibility offset={1000}>
                    {({ isVisible }) =>
                        <div className={isVisible ? "learn-img animate__animated  animate__zoomIn w-96 tf-right shadow-xl shadow-black  w-ful md:mt-0 rounded-lg " : ""}>
                            <img className='learn-img' src='https://cdn.coingape.com/wp-content/uploads/2021/03/12102720/Beeple-Mike-Winkelmann-Digital-Art-Chrities.jpg'>
                            </img>
                        </div>
                    }
                </TrackVisibility>
            </div>

            <div className="max-w-3xl mx-auto p-16 rounded">

                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button type="button" className="flex items-center focus:ring-4 focus:ring-white-200 dark:focus:ring-cyan-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                            <span>What is Modern NFT Marketplace?</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Modern NFT Marketplace is a digital marketplace that Using NFT crypto, anyone can buy or sell any Digital Assets or NFT tokens here. This marketplace is also used to store, display, or show trading and create NFT tokens or any digital assets.</p>
                            <p className="text-gray-500 dark:text-gray-400">Modern NFT marketplace is the new age marketplace for trading, selling, and buying digital works. With the growing popularity and increasing valuation of cryptocurrency, it is safe to assume that the marketplaces for NFTs and the whole blockchain network will stay in demand in the long run, which is why it is vital in recent times and the coming future.</p>
                        </div>
                    </div>


                    <h2 id="accordion-collapse-heading-2">
                        <button type="button" className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-cyan-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>What is Metamask and How to Link it with other Blockchains?</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                        <div className="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">MetaMask is a cryptocurrency wallet that enables users to store Ether and other ERC-20 tokens. The wallet can also be used to interact with decentralized applications, or dapps.</p>
                            <p className="text-gray-500 dark:text-gray-400">There are two ways to link your MetaMask wallet to another blockchain:Using a third party like Chainlist to link the new chain to your wallet automatically.
                                Manually inputting the data to link the desired chain to your wallet. Using Chainlist is undeniably easier than manually connecting your wallet to a new blockchain. However, you are trusting a third party to provide the correct data, which is a risk. For this reason, many people prefer to input the data and link new blockchains manually. Besides, Chainlist doesn’t list every available blockchain, so it’s worth knowing how to link a chain to your MetaMask wallet manually.</p>
                        </div>
                    </div>


                    <h2 id="accordion-collapse-heading-6">
                        <button type="button" className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-cyan-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>How to Create a NFT for Sell in Modern NFT Marketplace?</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-6" className="hidden" aria-labelledby="accordion-collapse-heading-6">
                        <div className="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">MetaMask is a cryptocurrency wallet that enables users to store Ether and other ERC-20 tokens. The wallet can also be used to interact with decentralized applications, or dapps.</p>
                            <p className="text-gray-500 dark:text-gray-400">There are two ways to link your MetaMask wallet to another blockchain:Using a third party like Chainlist to link the new chain to your wallet automatically.
                                Manually inputting the data to link the desired chain to your wallet. Using Chainlist is undeniably easier than manually connecting your wallet to a new blockchain. However, you are trusting a third party to provide the correct data, which is a risk. For this reason, many people prefer to input the data and link new blockchains manually. Besides, Chainlist doesn’t list every available blockchain, so it’s worth knowing how to link a chain to your MetaMask wallet manually.</p>
                        </div>
                    </div>

                    <h2 id="accordion-collapse-heading-5">
                        <button type="button" className="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-cyan-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                            <span>How to Buy a NFT in Modern NFT Marketplace?</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
                        <div className="p-5 border border-gray-200 dark:border-gray-700 border-b-0">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">MetaMask is a cryptocurrency wallet that enables users to store Ether and other ERC-20 tokens. The wallet can also be used to interact with decentralized applications, or dapps.</p>
                            <p className="text-gray-500 dark:text-gray-400">There are two ways to link your MetaMask wallet to another blockchain:Using a third party like Chainlist to link the new chain to your wallet automatically.
                                Manually inputting the data to link the desired chain to your wallet. Using Chainlist is undeniably easier than manually connecting your wallet to a new blockchain. However, you are trusting a third party to provide the correct data, which is a risk. For this reason, many people prefer to input the data and link new blockchains manually. Besides, Chainlist doesn’t list every available blockchain, so it’s worth knowing how to link a chain to your MetaMask wallet manually.</p>
                        </div>
                    </div>


                    <h2 id="accordion-collapse-heading-3">
                        <button type="button" className="flex items-center border focus:ring-4 focus:ring-gray-200 dark:focus:ring-cyan-800 border-gray-200 dark:border-gray-700 justify-between p-5 w-full font-medium text-left text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                            <span>What are NFT Communities?</span>
                            <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                        <div className="p-5 border border-gray-200 dark:border-gray-700 border-t-0">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">An NFT community is a group of individuals who come together to support a particular NFT project or group of projects. NFT communities are formed to discuss the progression of a project, receive notifications and updates, and consult with each other.</p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">An NFT community is simply a group of people that share common interests in an NFT project or a group of projects, that come together (usually on Twitter and Discord) to discuss various matters about the project.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Learn