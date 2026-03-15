import { useState } from 'react'
import HabitCard from './HabitCard';

function HabitList(){
    const [habits, setHabits] = useState([
        { id: 1, name: 'Exercise',    description: 'Strength Training', meta: 5, active: true, daysDones: 5 },
        { id: 2, name: 'Read',        description: 'Book or Article',   meta: 7, active: true, daysDones: 3 },
        { id: 3, name: 'Meditation',  description: 'Breath and Focus',  meta: 7, active: true, daysDones: 0 },
        { id: 4, name: 'Hidratation', description: 'Drink 2L of water', meta: 7, active: true, daysDones: 6 },
    ])

    const [newName, setNewName] = useState('')
    const [newDescription, setNewDescription] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newMeta, setNewMeta] = useState(7)

    const removeHabit = (id) => {
        console.log('Removing habit id:', id)
        setHabits(habits.filter(habit => habit.id !== id))
    }

    const addHabit = (event) => {
        event.preventDefault()

        if(!newName.trim()){
            alert('Type a name to habit.')
            return
        }

        const newHabit = {
            id: Date.now(),
            name: newName,
            description: newDescription,
            meta: newMeta,
            active: true,
            daysDones: 0,
            category: newCategory || 'General',
        }

        console.log('New habit added:', newHabit)
        setHabits([...habits, newHabit])

        setNewName('')
        setNewDescription('')
        setNewCategory('')
        setNewMeta(7)   
    }


    return (
        <section>
            <form onSubmit={addHabit} className="habitForm">
                <div>
                    <label>
                        Habit name *
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Description
                        <input
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Category
                        <input
                            type="text"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                    Meta (Days by week)
                        <input
                            type="number"
                            min="1"
                            max="7"
                            value={newMeta}
                            onChange={(e) => setNewMeta(parseInt(e.target.value) || 7)}
                        />
                    </label>
                </div>
                <button type="submit">Add habit</button>
            </form>

        <ul>
            {habits.length === 0 
                ? <p>No habits registered yet. How about starting now?</p>
                : <p>You have {habits.length} habit(s) added(s).</p>
            }

          {habits.map((habit) =>(
            <HabitCard
                key={habit.id}
                name={habit.name}
                description={habit.description}
                meta={habit.meta}
                active={habit.active}
                daysDones={habit.daysDones}
                onRemove={() => removeHabit(habit.id)}
            />
          ))}
        </ul>
      </section>
    )
}

export default HabitList