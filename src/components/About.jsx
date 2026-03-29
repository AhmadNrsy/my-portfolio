import { motion } from "framer-motion"

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-8 bg-[#1F1F1F] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase mb-6 text-xs tracking-[0.15em] text-gray-400"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            About Me
          </p>

          <h2
            className="text-[#F5F5F5] font-bold leading-tight"
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
            }}
          >
            Seorang mahasiswa yang<br />
            <span className="text-gray-400">
              suka eksplorasi teknologi.
            </span>
          </h2>
        </motion.div>

        {/* Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p
            className="text-gray-400 text-sm leading-relaxed"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Halo, saya Ahmad, mahasiswa Informatika di UIN Suska Riau, Pekanbaru. Saat ini saya tengah mendalami bidang web development, mencakup HTML, CSS, hingga React. Setiap proyek yang saya kerjakan menjadi sarana untuk terus mengembangkan kemampuan serta memperluas wawasan saya secara lebih mendalam.
          </p>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {[
              { label: "Nama", value: "AHMAD NURDIANSYAH" },
              { label: "Kampus", value: "UIN SUSKA RIAU" },
              { label: "Jurusan", value: "Informatika" },
              { label: "Kota", value: "Pekanbaru" },
            ].map((item) => (
              <div
                key={item.label}
                className="pt-3 border-t border-white/10"
              >
                <p className="uppercase mb-1 text-[11px] tracking-widest text-gray-400"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {item.label}
                </p>
                <p className="text-sm text-[#F5F5F5]"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* GitHub */}
          <a
            href="https://github.com/AhmadNrsy"
            target="_blank"
            rel="noreferrer"
            className="uppercase text-xs tracking-widest text-gray-400 border-b border-gray-400 w-fit pb-[2px] hover:text-white hover:border-white transition"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            GitHub →
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default About