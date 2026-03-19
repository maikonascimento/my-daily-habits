import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import HabitCard from './HabitCard'
import { useHabits } from '../contexts/HabitsContext'

function HabitList() {
    const { habits, addHabit, removeHabit } = useHabits()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        newName: '',
        newDescription: '',
        newCategory: '',
        newMeta: '7',
    })

    const [errorName, setErrorName] = useState ('')
    const nameInputRef = useRef(null)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({...prev, [name]: value}))
        if (name === 'newName') {
            if (value.length > 0 && value.length < 3) {
                setErrorName('The name must have at least 3 caracter.')
            }else{
                setErrorName('')
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!form.newName.trim() || errorName){
            nameInputRef.current?.focus()
            return
        }

        const newHabit = {
            id: Date.now(),
            name: form.newName,
            description: form.newDescription,
            category: form.newCategory || 'General',
            meta: parseInt (form.newMeta) || 7,
            active: true,
            daysDones: 0,
            
        }

        addHabit(newHabit)
        setForm({  newName: '', newDescription: '', newCategory: '', newMeta: '7' })
        setErrorName('')
        navigate('/habits')
    }


    if (!habits) return null

    return (
        <section>
            <form onSubmit={handleSubmit} className="habitForm">
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
                    Weekly Meta (Days)
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

        
            {habits.length === 0 && (
                <p>No habits registered yet. How about starting now?</p>
            )}

        <ul>
          {habits.map((habit) =>(
            <HabitCard
                key={habit.id}
                id={habit.id}
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