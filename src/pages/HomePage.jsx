import { Link } from 'react-router-dom'
import { useHabits } from '../contexts/HabitsContext'

function HomePage() {
    const { habits } = useHabits()

    const habitsActive = habits.filter(h => h.active).length

    return(
        <main className='home-page'>
            <h1>My Daily Habits</h1>
            <p>Building a better routine, one habit at once.</p>

            <div className='resume'>
                <div className='resume-card'>
                    <strong>{habits.length}</strong>
                    <span>habits added</span>
                </div>
                <div className='resume-card'>
                    <strong>{habitsActive}</strong>
                    <span>actives now</span>
                </div>
            </div>
            <Link to="/habits" className='btn-primary'>
                See my habits →
            </Link>
        </main>
    )
}

export default HomePage