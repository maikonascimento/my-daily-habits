import { useState, useEffect, useRef } from 'react'
import HabitCard from './HabitCard'

const storage_key = 'my-daily-habits'

const initial_habits = [
        { id: 1, name: 'Exercise',    description: 'Strength Training', meta: 5, active: true,  daysDones: 5 },
        { id: 2, name: 'Read',        description: 'Book or Article',   meta: 7, active: true,  daysDones: 3 },
        { id: 3, name: 'Meditation',  description: 'Breath and Focus',  meta: 7, active: false, daysDones: 0 },
        { id: 4, name: 'Hidratation', description: 'Drink 2L of water', meta: 7, active: true,  daysDones: 6 },
]

const inital_forms = {
    newName: '',
    newDescription: '',
    newCategory: '',
    newMeta: '7',
}

const normalizeHabit = (habit) => ({
    id: habit.id,
    name: habit.name ?? '',
    description: habit.description ?? '',
    category: habit.category ?? 'General',
    meta: Number(habit.meta) || 7,
    active: habit.active ?? true,
    daysDones: Number(habit.daysDones) || 0,
})

function HabitList(){
    const [habits, setHabits] = useState(() => {
        const storedHabits = localStorage.getItem(storage_key)
        
        if (!storedHabits){
            return initial_habits
        }

        try {
            const parsedHabits = JSON.parse(storedHabits)
        
        if (!Array.isArray(parsedHabits)){
            return []
        }

        return parsedHabits.map(normalizeHabit)
    } catch {
        return []
        }
    })

    const [form, setForm] = useState(inital_forms)
    const [errorName, setErrorName] = useState ('')
    const nameInputRef = useRef(null)

    useEffect (() => {
        localStorage.setItem(storage_key, JSON.stringify(habits))
    }, [habits])
    
    const handleChange = (event) => {
        const { name, value } = event.target

        setForm((currentForm) => ({
            ...currentForm,
            [name]: value,
        }))

        if (name === 'newName') {
            const trimmedValue = value.trim()

            if (trimmedValue.length > 0 && trimmedValue.length < 3) {
                setErrorName('The name must have at least 3 caracter.')
            }else{
                setErrorName('')
            }
        }
    }

    const removeHabit = (id) => {
        setHabits((currentHabits) => currentHabits.filter((habit) => habit.id !== id))
    }

    const addHabit = (event) => {
        event.preventDefault()

        if(!form.newName.trim()) {
            alert('Type a name to habit.')
            nameInputRef.current?.focus()
            return
        }

        if (errorName) {
            nameInputRef.current?.focus()
            return
        }

        const meta = Number(form.newMeta)

        const newHabit = {
            id: Date.now(),
            name: form.newName.trim(),
            description: form.newDescription.trim(),
            category: form.newCategory.trim() || 'General',
            meta: meta >= 1 && meta <= 7 ? meta : 7,
            active: true,
            daysDones: 0,
            
        }

        setHabits((currentHabits) => [...currentHabits, newHabit])
        setForm(inital_forms)
        setErrorName('')
        nameInputRef.current?.focus()
    }


    const totalHabits = habits.length


    return (
        <section>
            <form onSubmit={addHabit} className="habitForm">
                <div>
                    <label>
                        Habit name *
                        <input
                            type="text"
                            name="newName"
                            value={form.newName}
                            onChange={handleChange}
                            ref={nameInputRef}
                            aria-invalid={Boolean(errorName)}
                        />
                    </label>
                    {errorName && <p style={{ color: 'red', fontSize: '0.8rem' }}>{errorName}</p>}
                </div>
                <div>
                    <label>
                        Description
                        <input
                            type="text"
                            name="newDescription"
                            value={form.newDescription}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Category
                        <input
                            type="text"
                            name="newCategory"
                            value={form.newCategory}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                    Meta (Days by week)
                        <input
                            type="number"
                            name="newMeta"
                            min="1"
                            max="7"
                            value={form.newMeta}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit">Add habit</button>
            </form>

        <ul>
            {totalHabits === 0 
                ? <p>No habits registered yet. How about starting now?</p>
                : <p>You have {habits.length} habit(s) added(s).</p>
            }

          {habits.map((habit) =>(
            <HabitCard
                key={habit.id}
                name={habit.name}
                description={habit.description}
                category={habit.category}
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