import { useEffect, useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { AiOutlineArrowsAlt } from 'react-icons/ai'

const Artworks = () => {
  const [nfts] = useGlobalState('nfts')
  const [end, setEnd] = useState(4)
  const [count] = useState(4)
  const [collection, setCollection] = useState([])

  const getCollection = () => {
    return nfts.slice(0, end)
  }

  useEffect(() => {
    setCollection(getCollection())
  }, [nfts, end])

  return (
    <div className="bg-cyan-900 gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          {collection.length > 0 ? 'Latest Artworks & Collectibles' : 'Connect Wallet with Metamask'}
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
          {collection.map((nft, i) => (
            <Card key={i} nft={nft} />
          ))}
        </div>

        {collection.length > 0 && nfts.length > collection.length ? (
          <div className="text-center my-5">
            <button
              className="shadow-2xl shadow-black text-black
              bg-cyan-200 hover:bg-cyan-500 ease-in-out duration-500
            rounded-full cursor-pointer p-2"
              onClick={() => setEnd(end + count)}
            >
              {/* <div className='flex gap-1'>
                Show More 
              </div> */}
              <BsFillCaretDownFill style={{ "fontSize": "25px" }} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export const Card = ({ nft }) => {
  const setNFT = () => {
    setGlobalState('nft', nft)
    setGlobalState('showModal', 'scale-100')
  }

  return (
    <div className="w-full shadow-xl shadow-{#1a1a1a} rounded-md overflow-hidden bg-gray-800 my-2 p-3">
      <img
        src={nft.metadataURI}
        alt={nft.title}
        className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
      />
      <h4 className="text-white font-semibold">{nft.title}</h4>
      <p className="text-gray-400 text-xs my-1">{nft.description}</p>
      <div className="flex justify-between items-center mt-3 text-white">
        <div className="flex flex-col">
          <small className="text-xs">Current Price</small>
          <p className="text-sm font-semibold">{nft.cost} ETH</p>
        </div>

        <button
          className="shadow-lg shadow-black text-black text-sm  bg-cyan-200 hover:bg-cyan-500 ease-in-out duration-500  cursor-pointer rounded-full px-2 py-1"
          onClick={setNFT}
        >
          <div className='flex gap-1 '>View Details <AiOutlineArrowsAlt style={{"fontSize":"20px"}}/></div>

        </button>
      </div>
    </div>
  )
}

export default Artworks
