import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiVite } from "react-icons/si"
import { VscCode } from "react-icons/vsc"

const skills = [
  { name: "HTML5", icon: FaHtml5, level: 45, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, level: 30, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, level: 20, color: "text-yellow-400" },
  { name: "React", icon: FaReact, level: 20, color: "text-cyan-400" },
  { name: "Tailwind", icon: SiTailwindcss, level: 10, color: "text-sky-400" },
  { name: "Vite", icon: SiVite, level: 10, color: "text-purple-400" },
  { name: "Git", icon: FaGitAlt, level: 15, color: "text-red-500" },
  { name: "VS Code", icon: VscCode, level: 50, color: "text-blue-400" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-8 bg-[#0A1A2F] border-t border-white/10">
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
            Skills
          </p>
          <h2 className="text-[#F5F5F5] font-bold leading-tight text-[clamp(2rem,4vw,3.5rem)]">
            Hal-hal yang telah saya pelajari<br />
            <span className="text-gray-400">hingga saat ini.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex flex-col gap-3 p-5 border border-white/10 hover:border-white/20 transition-all"
              >
                {/* Icon */}
                <Icon className={`text-2xl ${skill.color}`} />

                {/* Name */}
                <p className="text-sm text-[#F5F5F5]">
                  {skill.name}
                </p>

                {/* Progress */}
                <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.08 + 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-white to-gray-400"
                  />
                </div>

                {/* Level */}
                <p className="text-[11px] text-gray-400 tracking-widest uppercase">
                  {skill.level}%
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Skills
