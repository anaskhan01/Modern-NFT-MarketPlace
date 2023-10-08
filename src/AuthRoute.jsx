import React from 'react'
import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.Services'
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import CreateNFT from './components/CreateNFT'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import ShowNFT from './components/ShowNFT'
import Transactions from './components/Transactions'
import UpdateNFT from './components/UpdateNFT'
import WaveBg from './components/WaveBg'
import NewsLetter from './components/NewsLetter'
import Collections from './components/Collections'

const AuthRoute = () => {

    useEffect(async () => {
        await isWallectConnected()
        await getAllNFTs()
    }, [])
    return (
        < div className="min-h-screen" >
            <Header />
            <Hero />
            <Artworks />
            <WaveBg />
            <Transactions />
            <NewsLetter />
            <CreateNFT />
            <ShowNFT />
            <UpdateNFT />
            <Footer />
            <Alert />
            <Loading />
        </div>
    )
}

export default AuthRoute