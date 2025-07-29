import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const faqs = [
    "What hosting solutions does PCS Global provide?",
    "Do you develop custom web applications?",
    "Can you help with SSL certificate setup and renewal?",
    "What IoT solutions do you offer?",
    "Do you offer legal services for new businesses?",
    "What digital marketing services do you provide?"
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Message Sent!
          </h2>
          <p className="text-gray-600">
            Thank you for reaching out. We'll get back to you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center my-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 md:mb-3">Connect with us</h1>
                <p className="text-lg text-gray-500">Any question or remarks? Just write us a message!</p>
                </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden h-full">
                {/* Decorative circles */}
                <div className="absolute bottom-20 right-16 w-32 h-32 bg-[#291E5F80] rounded-full z-1"></div>
                <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#030958] rounded-full "></div>

                <div className="relative z-10">
                  <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                    Contact Information
                  </h1>
                  <p className="text-blue-100 mb-8 text-lg">
                    Say something to start a live chat!
                  </p>

                  <div className="space-y-6 mb-18 mt-26 flex flex-col gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <span className="text-lg">+91 6296373387</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <span className="text-lg">contact@pcsgl.com</span>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <span className="text-lg leading-relaxed">
                        Merlin Infinite, Sector V, Saltlake,
                        <br />
                        Kolkata, West Bengal
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="w-10 h-10 bg-[#030958] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 hover:bg-white hover:text-[#030958] transition-all duration-200 transform hover:scale-110 cursor-pointer">
                      <FaTwitter />
                    </button>
                    <button className="w-10 h-10 bg-[#030958] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 hover:bg-white hover:text-[#030958] transition-all duration-200 transform hover:scale-110 cursor-pointer">
                      <RiInstagramFill />
                    </button>
                    <button className="w-10 h-10 bg-[#030958] bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 hover:bg-white hover:text-[#030958] transition-all duration-200 transform hover:scale-110 cursor-pointer">
                      <FaDiscord />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 012 3456 789"
                      className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Subject Selection */}
                <div>
                  <p className="block text-sm font-medium text-gray-700 mb-4">
                    Select Subject?
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["General Inquiry", "Support", "Sales", "Partnership"].map(
                      (option) => (
                        <label
                          key={option}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="subject"
                            value={option}
                            checked={formData.subject === option}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="ml-2 text-sm text-gray-700">
                            {option}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors duration-200 bg-transparent resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="my-20 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold my-12">Frequently Asked Questions</h2>
          <div className="space-y-4">

            {faqs.map((faq,i)=>{
                return (
                    <div key={i} className="border-b pb-4 border-gray-200">
              <h3 className="font-semibold"> {faq}</h3>
              <p className="text-gray-600"> answer will be here </p>
            </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
