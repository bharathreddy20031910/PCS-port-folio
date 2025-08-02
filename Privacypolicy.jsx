import React, { use, useState } from 'react';
import {
  FaSearch,
  FaStickyNote,
  FaShieldAlt,
  FaUndo,
  FaExchangeAlt,
  FaFacebookMessenger,
} from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import Logo from '../assets/logopcs.webp';
import { useNavigate } from 'react-router-dom';

const Privacypolicy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const highlightMatch = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 font-semibold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
     
      <section className="bg-blue-950 pb-20 p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-30 h-30" />
            <div className="pl-3">
              <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                <button className="bg-gray-100 px-4 py-1 flex items-center rounded-3xl text-sm">
                  <FaShieldAlt className="mr-2" />
                  <span>Pcs Global</span>
                </button>
                <button className="bg-gray-100 px-4 py-1 flex items-center rounded-3xl text-sm">
                  <FaStickyNote className="mr-2" />
                  <span>Legal document</span>
                </button>
              </div>
            </div>
          </div>

          
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end gap-3">
              <li>
                <a
                  href=""
                  className="text-white hover:text-black hover:bg-gray-100 p-2 rounded-xl flex items-center"
                    onClick={() => navigate('/')}
                >
                  <FiHome className="mr-2" />
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white hover:text-black hover:bg-gray-200 p-2 rounded-xl flex items-center"
                  onClick={()=>navigate('/terms')}
                >
                  <FaStickyNote className="mr-2" />
                  <b>Terms & Conditions</b>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white hover:text-black hover:bg-gray-200 p-2 rounded-xl flex items-center"
                  onClick={()=>navigate('/return')}
                >
                  <FaUndo className="mr-2" />
                  <b>Return& Refund</b>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        
        <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-white">
            Last updated: January 26, 2025 — Effective: January 26, 2025
          </h2>
          <div className="flex items-center w-full md:w-auto">
            <input
              type="text"
              placeholder="Search for"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 bg-gray-200 outline-none shadow-md w-full md:w-64 mr-2"
            />
            <FaSearch className="text-white text-lg" />
          </div>
        </div>
      </section>


      <section className="p-5 flex flex-wrap items-center gap-4 shadow-md bg-gray-100 text-sm">
        <h1>{highlightMatch('Quick jump to:')}</h1>
        <li>
          <a href="#">Information we collect</a>
        </li>
        <li>
          <a href="#">How we use data</a>
        </li>
        <li>
          <a href="#">Your rights</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
      </section>

      
      <section className="p-5 pt-10 w-full flex flex-col lg:flex-row gap-10">
       
        <div className="w-full lg:w-1/4 flex flex-col gap-8">
          <div className="shadow-md bg-gray-10 p-5 outline outline-2 outline-gray-300 rounded-3xl">
            <h1 className="font-bold">Table of Contents</h1>
            <p><a href="#">Information we Collect</a></p>
            <p><a href="#">How we use your information</a></p>
            <p><a href="#">How we share Information</a></p>
            <p><a href="#">Cookies</a></p>
            <p><a href="#">Data Security</a></p>
            <p><a href="#">Your privacy Rights</a></p>
            <p><a href="#">Special Notes</a></p>
            <p><a href="#">Contact Us</a></p>
          </div>

          <div className="shadow-md bg-gray-100 p-5 outline outline-2 outline-gray-300 rounded-3xl">
            <h1 className="font-bold">Need help</h1>
            <p>
              <a href="#">Have questions about our Privacy practices?</a>
            </p>
            <button className="p-2 bg-black text-white rounded-2xl flex items-center mt-2">
              <FaFacebookMessenger className="mr-2" />
              Contact Privacy Team
            </button>
          </div>
        </div>

 
        <div className="w-full lg:w-3/4 flex flex-col gap-10">
          <section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-lg">Information we collect</h1>
            <p className="mb-5">
              At PCS Global, we respect your privacy and are committed to
              protecting your personal information. This Privacy Policy
              explains how we collect, use, share, and protect your information
              when you visit our website, use our services, or interact with us.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h1 className="font-bold">Personal Information</h1>
                <ul className="list-disc ml-5">
                  <li>Name and Contact details</li>
                  <li>Email and Phone number</li>
                  <li>Mailing address</li>
                  <li>Payment information</li>
                  <li>Government Issued - ID</li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Automatic Information</h1>
                <ul className="list-disc ml-5">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral sources</li>
                  <li>Location data (with consent)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-lg">How we use Your Information</h1>
            <p className="mb-5">
              We use your information to provide and improve our real estate
              services, process transactions, and communicate with you.
            </p>

            <div className="space-y-6">
              <div>
                <h2 className="font-bold">A. Service Provision</h2>
                <ul className="list-disc ml-5">
                  <li>Process property reservations and purchases</li>
                  <li>Facilitate owner financing arrangements</li>
                  <li>Provide customer support and account management</li>
                  <li>Send transaction confirmations and updates</li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold">B. Communication</h2>
                <ul className="list-disc ml-5">
                  <li>Send important service notifications</li>
                  <li>Respond to inquiries and support requests</li>
                  <li>Provide marketing communications (with consent)</li>
                  <li>Send SMS updates for transactions (opt-in required)</li>
                </ul>
              </div>

              <div>
                <h2 className="font-bold">C. Legal and Security</h2>
                <ul className="list-disc ml-5">
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Prevent fraud and ensure platform security</li>
                  <li>Enforce our Terms and Conditions</li>
                  <li>Protect our rights and those of our users</li>
                </ul>
              </div>
            </div>
          </section>


        </div>


      </section>
    </div>
  );
};

export default Privacypolicy;
