import { Facebook, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-[#EFE4D2] text-white">
      {/* Main Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 px-6 md:px-16 text-center flex flex-col items-center gap-y-6"
      >
        {/* Logo */}
        <img src="/logo.png" alt="Palash Logo" className="h-12" />

        {/* Description */}
        <p className="max-w-xl text-sm md:text-base text-white-300 leading-relaxed">
          Palash SMM is your one-stop solution for all things social media. Our services are
          designed to enhance your visibility, engage your audience, and drive measurable results.
        </p>

        {/* Socials */}
        <div className="flex gap-4 mt-4">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-700 rounded-full hover:scale-110 transition-transform duration-300"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-700 rounded-full hover:scale-110 transition-transform duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="bg-[#000d2b] text-center text-sm text-gray-400 py-4">
        Copyright © 2025 <span className="text-[#954C2E] font-medium">CLOUSTY SMM</span>. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
