
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import SectionHabits from './components/SectionHabits'
import HabitList from './components/HabitList'


function App() {
    return (
    <div>
      <Header/>
      <Welcome username="class iteam" />
      <SectionHabits title="My Habits">
        <HabitList/>
      </SectionHabits>
      <Footer/>
    </div>
  )
}

export default App
