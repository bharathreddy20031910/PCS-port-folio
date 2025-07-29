import React,{useState} from 'react'
import { FaSearch, FaStickyNote, FaShieldAlt, FaUndo } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';    
import Logo from '../assets/logopcs.webp';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
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
              <h1 className="text-3xl font-bold text-white">Terms & Conditions</h1>
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
                    onClick={()=>navigate('/return')}
                >
                  <FaUndo className="mr-2" />
                  <b>Return & Refund</b>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white hover:text-black hover:bg-gray-200 p-2 rounded-xl flex items-center"
                    onClick={()=>navigate('/privacypolicy')}
                >
                  <FaShieldAlt className="mr-2" />
                  <b>Privacy poilcy</b>
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
        <p className='text-lg'>For the purposes of these Terms and Conditions, the terms "we", "us", and "our" refer to<b> PERENNATION COMPUTER SOLUTIONS GLOBAL PRIVATE LIMITED,</b> whose registered/operational office is at 145E, Swinhoe Lane, Kasba, Kolkata, West Bengal – 700042.
The terms "you", "your", "user", and "visitor" refer to any natural or legal person who visits our website and/or agrees to engage in a purchase or service with us.<br/><br/>
<p className='text-lg'>Your use of our website and/or purchase of any service or product is governed by the following Terms and Conditions:</p>
</p>
      </section>



        <div className="w-full lg:w-3/4 flex flex-col m-auto gap-10 mt-10">
          <section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            
            <p className="mb-5 text-lg">
              
                <li>The content of the pages of this website is subject to change without prior notice.</li><br/>
              <li>Neither we nor any third parties provide any warranty or guarantee regarding the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li><br/>
              <li>Your use of any information or materials on this website and/or product or service pages is entirely at your own risk, for which we shall not be liable. It is your responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li><br/>
              <li>This website contains material which is owned by or licensed to us. This includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction, in any form, is prohibited except in accordance with the copyright notice, which forms a part of these Terms and Conditions.</li><br/>
              <li>	All trademarks reproduced on this website that are not the property of, or licensed to, the operator are duly acknowledged.</li>
              <li>	Unauthorized use of the information or content provided by us may give rise to a claim for damages and/or be considered a criminal offense.</li>
              <li>	From time to time, this website may include links to other websites. These links are provided for your convenience and for additional informational purposes. They do not signify that we endorse the website(s), and we have no responsibility for the content of the linked site(s).</li><br/>
              <li>	You may not create a link to this website from another website or document without prior written consent from <b>PERENNATION COMPUTER SOLUTIONS GLOBAL PRIVATE LIMITED</b>.</li><br/>
              <li>	Any dispute arising out of your use of this website, your purchase with us, or your engagement with us shall be governed by the laws of <b>India</b>, and subject to the jurisdiction of courts in <b>Kolkata</b>, West Bengal.</li><br/>
              <li>We shall not be held liable for any loss or damage arising directly or indirectly from the <b>decline of authorization</b> for any transaction, due to the cardholder having exceeded the preset limit as mutually agreed between us and our acquiring bank from time to time. </li><br/>
              </p>

          </section>

        </div>




    </div>
  )
}

export default TermsConditions
