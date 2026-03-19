
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import SectionHabits from './components/SectionHabits'
import HabitList from './components/HabitList'
import { HabitsProvider } from './contexts/HabitsContext'


function App() {
    return (
      <HabitsProvider>
    <div>
      <Header titulo="My Daily Habits" description="Building a better routine."/>
      <Welcome username="class iteam" />
      <SectionHabits title="My Habits">
        <HabitList/>
      </SectionHabits>
      <Footer/>
    </div>
    </HabitsProvider>
  )
}

export default App
