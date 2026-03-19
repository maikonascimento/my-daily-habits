import { createContext, useContext, useState, useEffect } from "react";

export const HabitsContext = createContext(null)

export function HabitsProvider({ children }) {
    const [habits, setHabits] = useState(() => {
        const stored = localStorage.getItem('my-daily-habits')
        if (!stored) return [
            { id: 1, name: 'Exercise',    description: 'Strength Training', meta: 5, active: true,  daysDones: 5 },
            { id: 2, name: 'Read',        description: 'Book or Article',   meta: 7, active: true,  daysDones: 3 },
            { id: 3, name: 'Meditation',  description: 'Breath and Focus',  meta: 7, active: false, daysDones: 0 },
            { id: 4, name: 'Hidratation', description: 'Drink 2L of water', meta: 7, active: true,  daysDones: 6 },
        ]
        try { return JSON.parse(stored) } catch { return [] }
    })

    useEffect(() => {
        localStorage.setItem('my-daily-habits', JSON.stringify(habits))
    }, [habits])

    const addHabit = (newHabit) => {
        setHabits(prev => [...prev, newHabit])
    }

    const removeHabit = (id) => {
        setHabits(prev => prev.filter(h => h.id !== id))
    }

    return (
        <HabitsContext.Provider value={{ habits, addHabit, removeHabit}}>
            {children}
        </HabitsContext.Provider>
    )
}

export function useHabits() {
    return useContext(HabitsContext)
}