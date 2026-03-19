import { useHabits } from "../contexts/HabitsContext"

const Welcome = ({ username }) => {
    const { habits } = useHabits()

    const totalHabits = habits.length
    const habitsActives = habits.filter(h => h.ativo).length

    return(
        <div>
            <h2>Hello, {username.toUpperCase()}!</h2>
            <p>You have <strong>{totalHabits}</strong> habit(s) added(s).</p>
            <p><strong>{habitsActives}</strong> active(s) in moment.</p>
        </div>
    )
}

export default Welcome