import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className=" bg-[#f4eff4] py-5 md:mt-20" id="contactUs">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row lg:justify-between p-6 justify-center items-center md:items-start gap-5   text-center md:text-left">
            {/* Left Section - Brand and Description */}
            <div className="space-y-4 flex flex-col justify-center items-center md:items-start">
              <h2
                className="md:text-4xl text-2xl font-bold text-gray-800"
               
              >
                Company
              </h2>
              <p className="text-black text-sm leading-relaxed max-w-xs">
                At PCS Global, we empower startups and struggling businesses
                with everything they need to succeed — from secure hosting,
                custom web applications, IoT integration, legal setup, to
                digital marketing and 24/7 support.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3 pt-2">
                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#3b94f8" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#357edb")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3b94f8")
                  }
                >
                  <Link
                    to="https://www.linkedin.com/company/pcs-global-pvt-ltd/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white" />
                  </Link>
                </button>

                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#3b94f8" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#357edb")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3b94f8")
                  }
                >
                  <Link
                    to="https://www.instagram.com/pcsglobalpvtltd/"
                    target="_blank"
                  >
                    <AiFillInstagram className="text-white" />
                  </Link>
                </button>

                <button
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ backgroundColor: "#3b94f8" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#357edb")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3b94f8")
                  }
                >
                  <Link
                    to="https://www.facebook.com/hrpcsglobal/"
                    target="_blank"
                  >
                    <IoLogoFacebook className="text-white" />
                  </Link>
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
                  <a href="#" className=" transition-colors text-sm">
                    Project
                  </a>
                  <a href="#" className="transition-colors text-sm">
                    Privacy Policy
                  </a>
                </nav>
              </div>

              {/* Right Section - Contact Info */}
              <div className="space-y-4 text-gray-700 hover:text-gray-500">
                <h3 className="text-lg font-semibold pt-3">GET IN TOUCH</h3>
                <div className="space-y-2">
                  <p className=" text-sm">+91 6296373387</p>
                  <p className=" text-sm">contact@pcsgpl.com</p>
                </div>
              </div>
            </div>

            {/* newsletter subscription */}
            <div className=" mb-4 mx-auto flex flex-col  justify-between gap-6">
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
              <div className="">
                <form className="flex md:gap-0 md:flex-row items-center justify-center md:justify-start bg-white rounded-3xl">
                  <input type="email" placeholder="type your email" className="flex-1 px-8 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0 bg-white  rounded-4xl" required />
                  <button className="bg-[#3b94f8] px-5 py-2 text-white rounded-2xl" type="submit">Submit</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
