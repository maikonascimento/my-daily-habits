
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HabitsPage from './pages/HabitsPage'
import DetailsPage from './pages/DetailsPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
  return(
    <div>
      <Header/>

      <Routes>
        <Route path='/'           element={<HomePage/>}/>
        <Route path='/habits'     element={<HabitsPage />}/>
        <Route path='/habits/:id' element={<DetailsPage />} />
        <Route path='/'           element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
