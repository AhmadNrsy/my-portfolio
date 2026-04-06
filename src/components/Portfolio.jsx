import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"
import { useEffect, useState } from "react"
import { getGames } from "../services/api"
import { Link } from "react-router-dom"


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
]

// COMPONENT
const Portfolio = () => {

  // STATE API
  const [games, setGames] = useState([])

  // FETCH DATA API
  useEffect(() => {
    getGames().then((data) => setGames(data))
  }, [])


  return (
    <section
      id="portfolio"
      className="py-32 px-8 bg-[#1F1F1F] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER UTAMA */}
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

        {/* LIST PROJECT LAMA */}
        <div className="flex flex-col">

          {projects.map((project, i) => (
            <motion.div
              key={project.number} // 🔥 FIX duplicate key
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
                <h3 className="text-[#F5F5F5] font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
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
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                )}

                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FiExternalLink />
                  </a>
                )}
              </div>

            </motion.div>
          ))}


          {/* HEADER API DARI RAWG API */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-32 mb-16"
          >
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
              Game Explorer
            </p>

            <h2 className="text-[#F5F5F5] font-bold text-[clamp(1.8rem,3vw,2.5rem)]">
              Powered by<br />
              <span className="text-gray-400">RAWG API</span>
            </h2>
          </motion.div>

        {/* GAME DARI API */}
          {games.slice(0, 20).map((game, i) => (
            <Link key={game.id} to={`/game/${game.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[80px_1fr] gap-6 items-start py-10 border-t border-white/10 hover:border-white/20 transition-all group hover:scale-[1.02] cursor-pointer"
              >

                <span className="text-gray-400 text-sm tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-3">

                  <p className="text-xs text-gray-500 uppercase tracking-widest">
                    RAWG GAME DATA
                  </p>

                  <h3 className="text-[#F5F5F5] font-bold">
                    🎮 {game.name}
                  </h3>

                  <p className="text-yellow-400 text-sm">
                    ⭐ {game.rating} / 5
                  </p>

                  {game.background_image && (
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="w-full max-w-lg rounded-lg mt-2 object-cover"
                    />
                  )}

                </div>

              </motion.div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Portfolio