import { motion } from "framer-motion"
import { FaGithub, FaInstagram } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const contacts = [
  {
    label: "Email",
    value: "ahmadyt024@gmail.com",
    href: "mailto:ahmadyt024@gmail.com",
    icon: HiOutlineMail,
    color: "text-red-400",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/AhmadNrsy",
    href: "https://github.com/AhmadNrsy",
    icon: FaGithub,
    color: "text-gray-300",
    external: true,
  },
  {
    label: "Instagram",
    value: "@madd.py",
    href: "https://instagram.com/madd.py",
    icon: FaInstagram,
    color: "text-pink-400",
    external: true,
  },
]

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-8 bg-[#0A1A2F] border-t border-white/10"
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
            Contact
          </p>
          <h2 className="text-[#F5F5F5] font-bold leading-tight text-[clamp(2rem,4vw,3.5rem)]">
            Jangan ragu,<br />
            <span className="text-gray-400">untuk menghubungi saya.</span>
          </h2>
        </motion.div>

        {/* List */}
        <div className="flex flex-col">
          {contacts.map((item, i) => {
            const Icon = item.icon

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[80px_1fr_auto] gap-6 items-center py-8 border-t border-white/10 hover:border-white/20 transition group"
              >
                {/* Number */}
                <span className="text-gray-400 text-sm tracking-widest">
                  0{i + 1}
                </span>

                {/* Text */}
                <div className="flex flex-col gap-1">
                  <p className="uppercase text-[11px] tracking-widest text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-[#F5F5F5] text-sm group-hover:text-white transition">
                    {item.value}
                  </p>
                </div>

                {/* Icon */}
                <Icon className={`text-2xl ${item.color} group-hover:text-white transition`} />
              </motion.a>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Contact