import React from "react";
import CountUp from "react-countup";
import {
  FaRegHandshake,
  FaRegFileAlt,
  FaTrophy,
  FaRegCalendarCheck,
} from "react-icons/fa";

const Counter = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Stats */}
      <div className="w-full md:w-1/2 flex flex-wrap gap-6 justify-center md:justify-start">
        {/* Projects Completed */}
        <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-md w-[260px]">
          <FaRegFileAlt className="text-blue-500 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              <CountUp end={123} duration={2} />
            </h3>
            <p className="text-sm text-gray-600">
              <span className="text-orange-500 font-bold mr-1">|</span>
              Projects Completed
            </p>
          </div>
        </div>

        {/* Happy Clients */}
        <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-md w-[260px]">
          <FaRegHandshake className="text-red-500 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              <CountUp end={84} duration={2} />
            </h3>
            <p className="text-sm text-gray-600">
              <span className="text-orange-500 font-bold mr-1">|</span>
              Happy Clients
            </p>
          </div>
        </div>

        {/* Years in Business */}
        <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-md w-[260px]">
          <FaRegCalendarCheck className="text-blue-500 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              <CountUp end={15} duration={2} />
            </h3>
            <p className="text-sm text-gray-600">
              <span className="text-orange-500 font-bold mr-1">|</span>
              Years in Business
            </p>
          </div>
        </div>

        {/* Awards Win */}
        <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-md w-[260px]">
          <FaTrophy className="text-yellow-500 text-3xl" />
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              <CountUp end={37} duration={2} />
            </h3>
            <p className="text-sm text-gray-600">
              <span className="text-orange-500 font-bold mr-1">|</span>
              Awards Win
            </p>
          </div>
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
          15 Years <br /> <span className="text-blue-900">Experience</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
          Our company has been the leading provided construction services to
          clients throughout the INDIA since 2010.
        </p>
        <a
          href="https://wa.me/919999999999" // Replace with actual number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Counter;
