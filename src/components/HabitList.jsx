import HabitCard from './HabitCard';

function HabitList ({ habits }){
    if (!habits) return null

    if (habits.length === 0) {
        return <p>No habits registered yet. How about starting now?</p>
    }

    return(
        <ul>
            {habits.map((habit) => (
                <HabitCard
                    key={habit.id}
                    title={habit.title}
                    meta={habit.meta}
                    active={habit.active}
                    daysDones={habit.daysDones}
                />
            ))}
        </ul>
    )
}

export default HabitList