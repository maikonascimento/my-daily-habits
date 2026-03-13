
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import SectionHabits from './components/SectionHabits'
import HabitList from './components/HabitList'

function App() {
  const habits =[
    {id: 1, title: 'Exercise', meta: 5, active: true, daysDones: 5},
    {id: 2, title: 'Read', meta: 7, active: true, daysDones: 3},
    {id: 3, title: 'Meditation', meta: 7, active: false, daysDones: 0},
    {id: 4, title: 'Hidratation', meta: 7, active: true, daysDones: 6},
  ]

  return (
    <div>
      <Header
    //    title='My Daily Habits'
      //  description='Building a better routine, one habit at a time.'
      />
      <Welcome username="class iteam" totalHabits={habits.length}/>
      
      <SectionHabits title="My Habits">
        <HabitList habits={habits} />
      </SectionHabits>
      <Footer/>
    </div>
  )
}

export default App
