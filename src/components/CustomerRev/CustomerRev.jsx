// src/components/CustomerRev.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "swiper/css";

const reviews = [
  {
    name: "Ana Rhodes",
    company: "Google",
    rating: 3,
    text: "Clean and commented code, beautiful design, and really not hard to work with",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Morris Clarke",
    company: "IBM",
    rating: 4,
    text: "Clean and commented code, beautiful design, and really not hard to work with",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Ana Rhodes",
    company: "Google",
    rating: 4.7,
    text: "Clean and commented code, beautiful design, and really not hard to work with",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Ana Rhodes",
    company: "Google",
    rating: 4.7,
    text: "Clean and commented code, beautiful design, and really not hard to work with",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "James Carter",
    company: "Upwork",
    rating: 5,
    text: "Superb work and amazing UI! Highly recommend.",
    img: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Sara Ali",
    company: "Netflix",
    rating: 4.2,
    text: "Crisp design and highly maintainable code.",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "John Doe",
    company: "NGINX",
    rating: 4.8,
    text: "Slick UX with solid coding practices. A+",
    img: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/48/Tumblr_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/NGINX_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Upwork-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
];

const CustomerRev = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">Customers Review</h2>
        <p className="text-sm text-gray-500">What our customers say about grona template</p>
        <div className="mt-2 w-10 h-1 bg-pink-600 mx-auto rounded-full" />
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {reviews.map((review, index) => {
          const isEven = index % 2 === 0;
          const bgClass = isEven ? "bg-white" : "bg-white";
          const textColor = isEven ? "text-gray-800" : "text-gray-800";

          return (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`w-full h-[200px] max-w-sm mx-auto rounded-xl shadow-xl p-6 flex flex-col justify-between ${bgClass} ${textColor}`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-500"
                  />
                  <div>
                    <h4 className="font-bold text-base">{review.name}</h4>
                    <p className="text-sm opacity-70">{review.company}</p>
                  </div>
                </div>
                <div className="my-3 flex-1">
                  <p className="text-sm italic leading-relaxed">"{review.text}"</p>
                </div>
                <div className="flex items-center text-yellow-500">
                  {[...Array(Math.round(review.rating))].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                  <span className="ml-2 text-sm font-semibold">{review.rating}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex flex-wrap justify-center items-center mt-12 gap-6 px-4">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="brand"
            className="h-8 max-w-[100px] grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerRev;
