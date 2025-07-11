"use client";
import { motion } from "motion/react";
import Header from "@/components/header";

export default function LandingPage() {
  return (
    <div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* main content goes here  */}
      <div className="relative z-10">
        {/* header  */}

        <Header />
      </div>
    </div>
  );
}

// <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-800 to-gray-900 text-white">

//   <motion.header
//     className="p-4 flex justify-between items-center bg-opacity-20 backdrop-blur-lg"
//     initial={{ y: -50, opacity: 0 }}
//     animate={{ y: 0, opacity: 1 }}
//     transition={{ duration: 0.7 }}
//   >
//     <motion.h1 className="text-2xl font-bold">neura</motion.h1>
//     <nav className="space-x-4">
//       <a href="#hero" className="hover:underline">Home</a>
//       <a href="#about" className="hover:underline">About</a>
//       <a href="#footer" className="hover:underline">Contact</a>
//     </nav>
//   </motion.header>

//   {/* Hero Section */}
//   <motion.section
//     id="hero"
//     className="h-screen flex flex-col justify-center items-center text-center px-4"
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 1 }}
//   >
//     <motion.h2
//       className="text-5xl font-bold mb-6"
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ duration: 0.5, delay: 0.5 }}
//     >
//       Welcome to the Future
//     </motion.h2>
//     <motion.p className="text-lg max-w-xl mb-8 text-gray-300">
//       This is a 3D inspired landing page with smooth animations powered by Framer Motion.
//     </motion.p>
//     <motion.button
//       className="px-6 py-3 bg-blue-600 rounded-full text-white font-semibold shadow-xl hover:bg-blue-700"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//     >
//       Get Started
//     </motion.button>
//   </motion.section>

//   {/* About Section */}
//   <motion.section
//     id="about"
//     className="min-h-screen px-8 py-20 bg-gray-800 text-center"
//     initial={{ y: 50, opacity: 0 }}
//     whileInView={{ y: 0, opacity: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1 }}
//   >
//     <h3 className="text-3xl font-bold mb-4">About Us</h3>
//     <p className="max-w-2xl mx-auto text-gray-400">
//       We craft stunning digital experiences using the latest web technologies, providing our clients with interactive and engaging solutions that drive results.
//     </p>
//   </motion.section>

//   {/* Footer */}
//   <motion.footer
//     id="footer"
//     className="p-6 bg-gray-900 text-center"
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1 }}
//   >
//     <p className="text-sm text-gray-400">&copy; 2025 My3DLanding. All rights reserved.</p>
//   </motion.footer>

// </div>
