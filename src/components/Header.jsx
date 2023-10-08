import { NavLink } from 'react-router-dom'
import timelessLogo from '../assets/timeless.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BiWalletAlt } from 'react-icons/bi'


const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <span className="heading-gradient">Modern NFT Marketplace</span>
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <NavLink to={"/"}><li className="mx-6 cursor-pointer tracking-wider ease-in-out hover:text-cyan-200 ">Home</li></NavLink>
        <NavLink to={"/marketplace"}><li className="mx-6 cursor-pointer tracking-wider ease-in-out hover:text-cyan-200 ">Market</li></NavLink>
        <NavLink to={"/community"}><li className="mx-6 cursor-pointer tracking-wider ease-in-out hover:text-cyan-200 ">Community</li></NavLink>
        <NavLink to={"/learn"}><li className="mx-6 cursor-pointer tracking-wider ease-in-out hover:text-cyan-200 ">Learn</li></NavLink>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-black bg-cyan-200 hover:bg-cyan-500 ease-in-out duration-500 md:text-md p-2 pl-4 pr-4
          rounded-full cursor-pointer"
        >
          <div className='flex justify-evenly gap-1'><BiWalletAlt style={{"fontSize":"20px"}}/> {truncate(connectedAccount, 4, 4, 11)}</div>
        </button>
      ) : (
        <button
          className="shadow-2xl shadow-black text-black ease-in-out
          bg-cyan-200 hover:bg-cyan-500 ease-in-out duration-500 md:text-md p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
