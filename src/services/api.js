const BASE_URL = "https://api.rawg.io/api"

export const getGames = async () => {
try {
    const res = await fetch(
        `${BASE_URL}/games?key=${import.meta.env.VITE_RAWG_KEY}`
    )

    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    return data.results

    } catch (error) {
        console.error("Error fetch games:", error)
        return []
    }
}
