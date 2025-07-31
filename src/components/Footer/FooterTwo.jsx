import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react';

function FooterTwo() {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim()) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email);
      setEmail('');
    }
  };
  return (
    <div>
      <div className="bg-blue-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">PCS Global Logo</h2>
          <div className="w-full h-px bg-white/30 mt-4"></div>
        </div>

        {/* Main Content Grid */}
        <div className="flex gap-5 flex-col md:flex-row md:gap-10 items-center md:items-start  justify-between">
          {/* Reach Us Section */}
          <div className=" w-fit">
            <h3 className="text-lg font-semibold mb-4">Reach us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 6296373367</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">contact@pcsgbl.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Merlin Infinite, Sector V, Saltlake, 
                  Kolkata, West Bengal
                </span>
              </div>
            </div>
          </div>

          <div className='flex gap-5 justify-evenly w-full'> 
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">About</a></li>
              <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Blogs</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Terms & Services</a></li>
              <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          </div>

          {/* Quick Links Section */}
          <div className='flex gap-5 justify-center w-full px-8 md:px-0'> 
          <div className="lg:col-span-1 ">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Techlabz Keybox</a></li>
                <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Downloads</a></li>
                <li><a href="#" className="text-sm hover:text-blue-200 transition-colors">Forum</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
            <div className="bg-blue-700/50 p-4 rounded-lg w-fit md:w-full">
              <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
              <div className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className=" px-5 py-2 bg-[#030958BD] text-sm placeholder-white/70 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent "
                />
                <button
                  onClick={handleSubscribe}
                  className="cursor-pointer bg-[#030958] hover:bg-blue-900 px-6 py-2 text-sm font-medium transition-colors rounded md:w-fit"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white/70 mt-2">
                * We'll send you weekly updates for your better tool management.
              </p>
            </div>
             </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FooterTwo