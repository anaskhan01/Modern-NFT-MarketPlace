import timelessLogo from '../assets/timeless.png'
import './Footer.css'

const Footer = () => (
  // <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
  //   <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
  //     <div className="flex flex-[0.25] justify-center items-center">
  //       <img src={timelessLogo} alt="logo" className="w-32" />
  //     </div>

  //     <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
  //       <p className="text-white text-base text-center mx-2 cursor-pointer">
  //         Market
  //       </p>
  //       <p className="text-white text-base text-center mx-2 cursor-pointer">
  //         Artist
  //       </p>
  //       <p className="text-white text-base text-center mx-2 cursor-pointer">
  //         Features
  //       </p>
  //       <p className="text-white text-base text-center mx-2 cursor-pointer">
  //         Community
  //       </p>
  //     </div>

  //     <div className="flex flex-[0.25] justify-center items-center">
  //       <p className="text-white text-right text-xs">
  //         &copy;2022 All rights reserved
  //       </p>
  //     </div>
  //   </div>
  // </div>

  <>
    <footer>
      <div className="container">
        <div className="md:flex-[0.5] flex-initial justify-center items-center mb-3">
          <span className="heading-gradient text-3xl">Modern NFT Marketplace</span>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>The world’s largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</p>
          </div>
          <div className="col-md-4">
            <h4>Marketplaces</h4>
            <ul className="contact-info">
              <li><i className="fas fa-map-marker-alt  hover:text-cyan-500 cursor-pointer"></i>All NFT's</li>
              <li><i className="fas fa-phone hover:text-cyan-500 cursor-pointer"></i>Favorites</li>
              <li><i className="fas fa-envelope  hover:text-cyan-500 cursor-pointer"></i><a href="mailto:info@example.com">Learn</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul className="social-media">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-center mt-14 font-bold'><p>©2023 Developed by Team 26 (Yash, Anas, Suryansh)</p></div>
    </footer>

  </>
)

export default Footer
