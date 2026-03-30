import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const projects = [
  {
    number: "01",
    title: "Portfolio Website",
    desc: "Website portfolio personal yang dibangun menggunakan React, Vite, dan TailwindCSS. Menampilkan informasi diri, skills, dan project.",
    tags: ["React", "Vite", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/AhmadNrsy/my-portfolio",
    live: null,
  },
  {
    number: "02",
    title: "Coming Soon",
    desc: "Project berikutnya sedang dalam proses pengerjaan. Stay tuned!",
    tags: ["—"],
    github: null,
    live: null,
  },
  {
    number: "03",
    title: "Coming Soon",
    desc: "Project berikutnya sedang dalam proses pengerjaan. Stay tuned!",
    tags: ["—"],
    github: null,
    live: null,
  },
]

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-32 px-8 bg-[#1F1F1F] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase text-xs tracking-[0.15em] text-gray-400 mb-4">
            Portfolio
          </p>
          <h2 className="text-[#F5F5F5] font-bold leading-tight text-[clamp(2rem,4vw,3.5rem)]">
            Proyek yang Telah<br />
            <span className="text-gray-400">Saya Kerjakan.</span>
          </h2>
        </motion.div>

        {/* List */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-[80px_1fr_auto] gap-6 items-start py-10 border-t border-white/10 hover:border-white/20 transition-all group"
            >
              {/* Number */}
              <span className="text-gray-400 text-sm tracking-widest">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[#F5F5F5] font-bold group-hover:text-white transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-widest text-gray-400 border border-white/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 items-center mt-1 opacity-70 group-hover:opacity-100 transition">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white text-xl transition"
                  >
                    <FaGithub />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white text-xl transition"
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Portfolio