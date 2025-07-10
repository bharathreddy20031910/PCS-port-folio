import React from 'react'
import { FaLinkedinIn} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";

function Footer() {
  return (
    <div>
        <div className=" bg-[#f4eff4] py-5 mt-20" id="contactUs">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row lg:justify-between p-6 justify-center items-center md:items-start gap-5   text-center md:text-left">
          {/* Left Section - Brand and Description */}
          <div className="space-y-4 flex flex-col justify-center items-center md:items-start">
            <h2 className="md:text-4xl text-2xl font-bold text-orange-500">
              Company
            </h2>
            <p className="text-black text-sm leading-relaxed max-w-xs">
              Discover a wide range of delicious dishes crafted with the finest
              ingredients. From appetizers to desserts, we have something for
              everyone. Explore our menu and indulge in a culinary experience
              like no other.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-2">
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <FaLinkedinIn className="text-white" />
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <AiFillInstagram className="text-white" />
              </button>
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <IoLogoFacebook className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-10 md:gap-6 justify-center my-2 md:my-0">
              {/* Middle Section - Company Links */}
          <div className="space-y-4 text-gray-700 hover:text-gray-500">
            <h3 className="text-lg font-semibold pt-3">COMPANY</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-500 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-500 transition-colors text-sm"
              >
                About us
              </a>
              <a
                href="#"
                className=" transition-colors text-sm"
              >
                Delivery
              </a>
              <a
                href="#"
                className="transition-colors text-sm"
              >
                Privacy policy
              </a>
            </nav>
          </div>

          {/* Right Section - Contact Info */}
          <div className="space-y-4 text-gray-700 hover:text-gray-500">
            <h3 className="text-lg font-semibold pt-3">GET IN TOUCH</h3>
            <div className="space-y-2">
              <p className=" text-sm">+1-212-456-7890</p>
              <p className=" text-sm">contact@pcsglobal.dev</p>
            </div>
          </div>
          </div>
          


          {/* newsletter subscription */}
          <div className="px-[3%] mb-4 max-w-6xl mx-auto flex flex-col  justify-between gap-6">
          {/* Left side - Newsletter text */}
          <div className="text-center md:text-left pt-3">
            <p className=" text-sm font-medium tracking-wider mb-1">
              SUBSCRIBE TO OUR
            </p>
            <h2 className="text-black text-3xl font-bold tracking-wide">
              Newsletter
            </h2>
          </div>

          {/* Right side - Email form */}
          <div className="w-full md:w-auto">
            <form className="flex items-center bg-white rounded-full overflow-hidden shadow-lg max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 px-6 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0 bg-transparent md:w-200"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 flex-shrink-0 cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>

        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer