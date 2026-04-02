// IMPORT
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"



// COMPONENT
const GameDetail = () => {

const { id } = useParams()
const navigate = useNavigate()

const [game, setGame] = useState(null)


  // FETCH DATA
    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_RAWG_KEY}`)
        .then(res => res.json())
        .then(data => setGame(data))
    }, [id])



  // LOADING STATE
    if (!game) {
        return (
        <div className="min-h-screen bg-[#1F1F1F] text-white flex items-center justify-center">
            <p className="text-gray-400 animate-pulse">Loading game data...</p>
        </div>
        )
    }



  // UI
return (
    <motion.div
        className="min-h-screen bg-[#1F1F1F] text-white px-8 py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >

    <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6">
            {game.name}
        </h1>

        {/* IMAGE + GRADIENT */}
        {game.background_image && (
            <div className="relative mb-6">
            <img
                src={game.background_image}
                alt={game.name}
                className="w-full rounded-lg object-cover"
            />

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-transparent to-transparent rounded-lg" />
        </div>
        )}

        {/* INFO */}
        <div className="flex flex-col gap-2 mb-6">
        <p className="text-yellow-400 text-lg">
            ⭐ {game.rating} / 5
        </p>

        <p className="text-gray-400">
            Release Date: {game.released}
        </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 leading-relaxed">
            {game.description_raw}
        </p>

    </div>

      {/* FLOATING BACK BUTTON */}
    <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-8 right-8 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-lg hover:bg-white/20 transition z-50"
    >
        ← Back
    </motion.button>

    </motion.div>
    )
}

export default GameDetail