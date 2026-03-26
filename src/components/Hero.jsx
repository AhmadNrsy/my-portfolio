import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center px-8 min-h-screen bg-[#1F1F1F]"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="uppercase mb-6 text-xs tracking-[0.15em] text-gray-400"
          style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
        >
          Mahasiswa Informatika — UIN SUSKA RIAU
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-4 text-[#F5F5F5] font-bold leading-tight"
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "clamp(2.8rem, 5vw, 6rem)",
          }}
        >
          Hi, I'm Ahmad.
        </motion.h1>

        {/* Sub Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 text-gray-400 font-bold leading-tight"
          style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "clamp(2.8rem, 5vw, 6rem)",
          }}
        >
          Web Developer in Progress, Building Real Projects.
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-6"
        >
          {/* Button 1 */}
          <a
            href="#portfolio"
            className="uppercase px-6 py-3 text-xs font-semibold tracking-widest bg-[#F5F5F5] text-[#1F1F1F] hover:opacity-80 transition"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            See My Work
          </a>

          {/* Button 2 */}
          <a
            href="#about"
            className="uppercase text-xs tracking-widest text-gray-400 border-b border-gray-400 pb-[2px] hover:text-white hover:border-white transition"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            About Me
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero