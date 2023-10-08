import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'
import './Hero.css'
import { GrMagic } from 'react-icons/gr'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const  onCreatedNFT = () => {
    setGlobalState('modal', 'scale-100')
  }

  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
      <div className="md:w-3/6 w-full">
        <div className='tf-left'>
          <div className='tf-heading'>
            Discover Collect & Sell <span className='heading-gradient-2'>
              Extraordinary</span> NFTs
          </div>
          <div className='tf-description'> the leading NFT Marketplace on Ethereum Home to the next generation of digital creators, Discover the best NFT collections. </div>
          {/* <div className='tf-left-btns'>
            <Button btnType="PRIMARY" btnText='EXPLORE' />
            <Button btnType="SECONDARY" btnText='CREATE' customClass='tf-left-secondary-btn' />
          </div> */}
        </div>

        {connectedAccount ? (
          <div className="flex flex-row mt-5">
            <button
              className="shadow-xl shadow-black text-black ease-in-out
            bg-cyan-200 hover:bg-cyan-500 ease-in-out duration-500 md:text-md 
            rounded-full cursor-pointer p-2"
              onClick={onCreatedNFT}
            >
              Create NFT 🪄
            </button>
          </div>
        ) :
          (<div className="flex flex-row mt-5">
            <button
              className="shadow-xl shadow-black text-black ease-in-out
        bg-cyan-200 hover:bg-cyan-500 md:text-md 
        rounded-full cursor-pointer p-2"
        onClick={()=>{
          alert("Please Connect Metamask Wallet!!")
        }}
            >
              Explore 🔮🤷‍♂️
            </button>
          </div>)}

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div>
            <p className="text-white font-bold">1231k</p>
            <small className="text-gray-300">User</small>
          </div>
          <div>
            <p className="text-white font-bold">152k</p>
            <small className="text-gray-300">Artwork</small>
          </div>
          <div>
            <p className="text-white font-bold">200k</p>
            <small className="text-gray-300">Artist</small>
          </div>
        </div>
      </div>

      {/* <div
        className="shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img
          src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"
          alt="NFT Art"
          className="h-60 w-full object-cover"
        />
        <div className="flex justify-start items-center p-3">
          <Identicon
            string={connectedAccount ? connectedAccount : 'Connect Your Wallet'}
            size={50}
            className="h-10 w-10 object-contain rounded-full mr-3"
          />
          <div>
            <p className="text-white font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'}
            </p>
            <small className="text-pink-800 font-bold">@you</small>
          </div>
        </div>
      </div> */}

      <div className='tf-right shadow-xl shadow-black w-full md:mt-0 '>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img rounded-md' alt='diamond-banner'
              src='https://gifsec.com/wp-content/uploads/2022/12/nft-gif-1.gif' />
          </div>
          <div className='tf-r-diamond-item absolute-center '>
            <img className='tf-r-diamond-img rounded-md' alt='diamond-banner'
              src='https://thenftunicorn.com/wp-content/uploads/2022/02/Big-Bad-Wolves-NFT-1024x1024-1.gif' />
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img rounded-md' alt='diamond-banner'
              src='https://nftevening.com/wp-content/uploads/2021/12/4.gif' />
          </div>
        </div>
      </div>



    </div>
  )
}

export default Hero
