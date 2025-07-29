import React,{useState} from 'react'
import { FaSearch, FaStickyNote, FaShieldAlt } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';    
import Logo from '../assets/logopcs.webp';
import { useNavigate } from 'react-router-dom';

const ReturnRefund = () => {
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
              <h1 className="text-3xl font-bold text-white">Return & Refund Policy</h1>
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
                  <b>Terms& Conditions</b>
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white hover:text-black hover:bg-gray-200 p-2 rounded-xl flex items-center"
                    onClick={()=>navigate('/privacypolicy')}
                >
                  <FaShieldAlt className="mr-2" />
                  <b>Privacy Policy</b>
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
        <p className='text-lg'>At <b>PERENNATION COMPUTER SOLUTIONS GLOBAL PRIVATE LIMITED</b>, we strive to provide the best possible experience with our IT solutions, products, and services. However, due to the nature of our offerings, our return and refund policy is subject to the terms outlined below.</p>
       
      </section>



        <div className="w-full lg:w-3/4 flex flex-col m-auto gap-10 mt-10">
          <section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-xl">1. Applicability</h1>
            <p className="mb-5 text-lg">
              This policy applies to all services, software solutions, digital products, and related deliverables purchased directly from PCS Global, via our website or through direct engagement.
            </p>

          </section>

          <section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-xl">2. Non-Tangible / Digital Services</h1>
            <p className="mb-5 text-lg">
              As our services are primarily digital in nature — including but not limited to software development, cloud solutions, consulting, and custom IT deployments — returns are<b> not applicable once a service has been rendered or a project has been initiated.</b><br/>
              However, in specific cases where a written agreement defines cancellation terms, such terms shall prevail.
            </p>

          </section>

          
    

<section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-xl">3. Cancellation Requests</h1>
            <p className="mb-5 text-lg">
              <li><b>	Before Service Initiation:</b> You may request cancellation within 48 hours of placing an order, provided that service delivery has not started.</li>
            <li><b>	After Service Initiation:</b> Once a project has commenced (design, development, consultation, or provisioning), no cancellations will be accepted unless explicitly stated in a signed agreement.</li>
            </p>

          </section>

                <section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-xl">4. Refund Eligibility</h1>
            <p className="mb-5 text-lg">
              Refunds may be granted under the following limited conditions:
              <li><b>Duplicate Payment:</b> If a customer is charged more than once for the same service due to a technical error.</li>
              <li><b>	Service Not Delivered:</b> In cases where no work has been initiated and the customer has not received any part of the service</li>
            </p>
<p><b>Note:</b> Any approved refund will be processed within<b>7–10 business days</b>  to the original payment method</p>
          </section>

          <section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-xl">5. No Refund Circumstances</h1>
            <p className="mb-5 text-lg">
              <h1 className='text-xl'>Refunds will not be issued for:</h1>
              <li>	Change of mind after service initiation</li>
            
         <li>	Delay caused by client-side inaction (e.g., failure to provide required materials or approvals</li>
           <li>Custom-developed software or licensed solutions delivered as per scope</li>
           <li>Issues arising due to third-party service or tool limitations not controlled by PCS Global</li>
            </p>

          </section>


<section className="bg-gray-10 p-5 rounded-3xl outline outline-2 outline-gray-300">
            <h1 className="mb-4 font-bold text-xl">6. Contact for Return & Refund Queries</h1>
            <p className="mb-5 text-lg">
                <h1 className='text-xl'>For all return, cancellation, or refund-related concerns, please contact:</h1>
                <b>Finance & Compliance Team</b><br/>
                📧 Email: support@pcsgpl.us<br/>
📞 Phone: +91-817-752-9790<br/>
🏢 Mailing Address: 					
PCS Global – Customer Support
145E, Swinhoe Lane, Kasba
Kolkata, West Bengal – 700042<br/>
🌐 Website: https://pcsgpl.us

               </p>

          </section>


        </div>




    </div>
  )
}

export default ReturnRefund
