import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Accueil from './pages/Accueil'
import TodoList from './pages/TodoList'
import APropos from './pages/APropos'
import Blagues from './pages/Blagues'
import Meteo from './pages/Meteo'

function Navbar() {
  return (
    <nav style={{
      background: '#E91E8C', padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem' }}>Rebecca App</span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link>
        <Link to="/todo" style={{ color: 'white', textDecoration: 'none' }}>Todo List</Link>
        <Link to="/apropos" style={{ color: 'white', textDecoration: 'none' }}>À propos</Link>
        <Link to="/blagues" style={{ color: 'white', textDecoration: 'none' }}>Blagues</Link>
        <Link to="/meteo" style={{ color: 'white', textDecoration: 'none' }}>Météo</Link>
      </div>
    </nav>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#f0f4f8', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/blagues" element={<Blagues />} />
          <Route path="/meteo" element={<Meteo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App