import { motion } from "framer-motion"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] border-t border-white/10 px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-[#F5F5F5] text-lg font-bold tracking-tight"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          Ahmad<span className="text-gray-400">.</span>
        </motion.a>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-xs tracking-widest uppercase text-center"
        >
          © {new Date().getFullYear()} Ahmad Nurdiansyah. All rights reserved.
        </motion.p>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-6"
        >
          <a
            href="mailto:ahmadyt024@gmail.com"
            className="text-gray-400 hover:text-red-400 transition text-xl"
          >
            <HiOutlineMail />
          </a>

          <a
            href="https://github.com/AhmadNrsy"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/madd.py"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-pink-400 transition text-xl"
          >
            <FaInstagram />
          </a>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer