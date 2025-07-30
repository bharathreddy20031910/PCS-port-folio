import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase, Lightbulb, TrendingUp, Users, Code, Cloud, ChevronRight,
  Database, Coffee, Smartphone, Server, Wifi, FlaskConical, BrainCircuit
} from 'lucide-react'; // Added new icons for specific technologies

gsap.registerPlugin(ScrollTrigger);

const OurKnowledge3 = () => {
  const heroRef = useRef(null);
  const sectionRefs = useRef([]); // For general section animations
  const taskRefs = useRef([]); // For individual task animations

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" }
    );
    gsap.fromTo(heroRef.current.children[0].children[0],
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: "power4.out" }
    );
    gsap.fromTo(heroRef.current.children[0].children[1],
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0.7, ease: "power4.out" }
    );
    gsap.fromTo(heroRef.current.children[0].children[2],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.9, ease: "power3.out" }
    );

    // General Section Animations (About, CTA, Footer)
    sectionRefs.current.forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    });

    // Task Section Animations (alternating left/right)
    taskRefs.current.forEach((task, index) => {
      gsap.fromTo(task,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: task,
            start: "top 75%",
            toggleActions: "play none none none",
            delay: 0.1 // Small delay for each task
          }
        }
      );
    });

  }, []);

  const tasks = [
    {
      icon: <Database size={60} className="text-emerald-400" />,
      title: "MERN Stack Development",
      description: "Building robust, scalable, and high-performance web OurKnowledge3lications using MongoDB, Express.js, React, and Node.js.",
      image: "https://placehold.co/600x400/064e3b/ffffff?text=MERN"
    },
    {
      icon: <Coffee size={60} className="text-red-400" />,
      title: "Java Development",
      description: "Expertise in enterprise-grade Java OurKnowledge3lications, from backend services to complex system integrations and microservices.",
      image: "https://placehold.co/600x400/991b1b/ffffff?text=Java"
    },
    {
      icon: <Smartphone size={60} className="text-indigo-400" />,
      title: "React Native Development",
      description: "Crafting beautiful and performant cross-platform mobile OurKnowledge3lications for iOS and Android with a native feel.",
      image: "https://placehold.co/600x400/3730a3/ffffff?text=ReactNative"
    },
    {
      icon: <Wifi size={60} className="text-orange-400" />,
      title: "Internet of Things (IoT)",
      description: "Developing smart, connected solutions for various industries, integrating hardware, software, and cloud platforms.",
      image: "https://placehold.co/600x400/9a3412/ffffff?text=IoT"
    },
    {
      icon: <Server size={60} className="text-blue-400" />,
      title: "Python Development",
      description: "Versatile Python solutions for web development, automation, scripting, and backend systems, ensuring efficiency and reliability.",
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Python"
    },
    {
      icon: <FlaskConical size={60} className="text-purple-400" />,
      title: "Data Science & Analytics",
      description: "Unlocking insights from complex datasets, building predictive models, and implementing data-driven strategies for informed decision-making.",
      image: "https://placehold.co/600x400/6b21a8/ffffff?text=DataScience"
    },
    {
      icon: <BrainCircuit size={60} className="text-pink-400" />,
      title: "Machine Learning & Deep Learning",
      description: "Designing and deploying intelligent systems, leveraging advanced ML/DL algorithms for automation, pattern recognition, and AI-driven solutions.",
      image: "https://placehold.co/600x400/be185d/ffffff?text=ML+DL"
    },
    {
      icon: <Briefcase size={60} className="text-blue-400" />,
      title: "Strategic Consulting",
      description: "We partner with leaders to develop robust strategies, optimize operations, and unlock new avenues for sustainable growth in dynamic markets.",
      image: "https://placehold.co/600x400/1e3a8a/ffffff?text=Strategy" // Placeholder image
    },
    {
      icon: <Lightbulb size={60} className="text-yellow-400" />,
      title: "Product Innovation",
      description: "From concept to launch, we design and build innovative products that resonate with users and deliver exceptional value, leveraging agile methodologies.",
      image: "https://placehold.co/600x400/4d4d00/ffffff?text=Innovation" // Placeholder image
    },
    {
      icon: <TrendingUp size={60} className="text-green-400" />,
      title: "Digital Transformation",
      description: "Guiding organizations through their digital journey, implementing cutting-edge technologies to enhance efficiency, customer experience, and competitive advantage.",
      image: "https://placehold.co/600x400/065f46/ffffff?text=Digital" // Placeholder image
    },
    {
      icon: <Users size={60} className="text-purple-400" />,
      title: "Talent Solutions",
      description: "Building high-performing teams is crucial. We offer comprehensive talent acquisition, development, and retention strategies to empower your workforce.",
      image: "https://placehold.co/600x400/5b21b6/ffffff?text=Talent" // Placeholder image
    },
    {
      icon: <Code size={60} className="text-cyan-400" />,
      title: "Custom Software Development",
      description: "Crafting bespoke software solutions that perfectly align with your business processes, ensuring scalability, security, and seamless integration.",
      image: "https://placehold.co/600x400/0891b2/ffffff?text=Software" // Placeholder image
    },
    {
      icon: <Cloud size={60} className="text-teal-400" />,
      title: "Cloud Infrastructure & DevOps",
      description: "Designing, deploying, and managing robust cloud infrastructures and implementing DevOps practices for continuous delivery and operational excellence.",
      image: "https://placehold.co/600x400/0f766e/ffffff?text=Cloud" // Placeholder image
    }
  ];

  return (
    <div className="font-inter antialiased text-gray-200 bg-gray-900 min-h-screen">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Font Inter CDN */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/ffffff?text=Background+Pattern')" }}></div>
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Future-Proof Your Business.
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-80 max-w-3xl mx-auto">
            Empowering innovation and accelerating growth with bespoke digital solutions.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-full shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 font-bold text-lg flex items-center justify-center mx-auto">
            Explore Our Vision <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={el => sectionRefs.current[0] = el} className="py-24 px-6 bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-10">Our Philosophy</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We are a team of dedicated experts committed to pushing the boundaries of what's possible. Our OurKnowledge3roach combines deep industry knowledge with agile methodologies to deliver solutions that are not just effective, but truly transformative. We believe in collaboration, transparency, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Tasks/Services Section - Alternating Layout */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-16">Our Core Offerings</h2>
          <div className="grid grid-cols-1 gap-12"> {/* Changed to a single column grid for better flow with alternating layout */}
            {tasks.map((task, index) => (
              <div
                key={index}
                ref={el => taskRefs.current[index] = el}
                className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex justify-center p-4">
                  <img
                    src={task.image}
                    alt={task.title}
                    className="rounded-xl shadow-2xl w-full max-w-md object-cover h-64 md:h-80"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/4b5563/ffffff?text=${task.title.replace(/\s/g, '+')}`; }}
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left p-4">
                  <div className="mb-6 flex justify-center md:justify-start">
                    {task.icon}
                  </div>
                  <h3 className="text-4xl font-semibold text-white mb-6">{task.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">{task.description}</p>
                  <button className="mt-8 text-blue-400 hover:text-blue-300 transition duration-300 flex items-center justify-center md:justify-start mx-auto md:mx-0">
                    Learn More <ChevronRight className="ml-2" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section ref={el => sectionRefs.current[1] = el} className="py-24 px-6 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">Ready to Build Something Great?</h2>
          <p className="text-xl mb-10 opacity-90">
            We're eager to hear about your vision and discuss how our expertise can bring it to life.
          </p>
          <button className="bg-white text-blue-700 px-10 py-5 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 font-bold text-lg">
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer ref={el => sectionRefs.current[2] = el} className="py-12 px-6 bg-gray-950 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} [Your Company Name]. All rights reserved.</p>
          <div className="mt-6 flex justify-center space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurKnowledge3;