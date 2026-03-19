import { useParams, useNavigate } from "react-router-dom"
import { useHabits } from "../contexts/HabitsContext"

function DetailsPage() {
    const {id} = useParams()
    const {habits, removeHabit} = useHabits()
    const navigate = useNavigate()

    const habit = habits.find(h => h.id === Number(id))

    if (!habit) {
        return (
            <main className="details-page">
                <h1>Habit not found</h1>
                <button onClick={()=> navigate('/habits')}>
                     ← Back to the list
                </button>
            </main>
        )
    }

    const metaAccomplished = habit.daysDone >= habit.meta

    const handleRemove = () => {
        removeHabit(habit.id)
        navigate('/habits')
    }

    return (
        <main className="details-page">
            <button onClick={()=> navigate(-1)} className="btn-back">
                ← Back
            </button>

            <div className="detail-card">
                <h1>{habit.name}</h1>
                <p>{habit.description}</p>

                <ul className="detail-info">
                    <li><strong>Category:</strong>{habit.category || 'General'}</li>
                    <li><strong>Weekly meta:</strong>{habit.meta} days</li>
                    <li><strong>Days done:</strong>{habit.daysDone}</li>
                    <li><strong>Status:</strong>{''}
                        <span style={{color: habit.active ? '#16a34a':'#9ca3af'}}>
                            {habit.active ? '✅ Active' : '⏸️ Paused'}
                        </span>
                    </li>
                    {metaAccomplished && (
                        <li>🏆 Weekly meta accomplished!</li>
                    )}
                </ul>

                <button onClick={handleRemove} className="btn-remove">
                    Remove habit    
                </button>
            </div>
        </main>
    )
}

export default DetailsPage