
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Welcome from './components/Welcome'

function App() {

  return (
    <div>
      <Header
        titulo='Meus hábitos diários'
        descricao='Construindo uma rotina melhor, um hábito por vez.'
      />
      <Welcome username="turma iteam" totalHabits={1239123}/>
      <Footer/>
    </div>
  )
}

export default App
