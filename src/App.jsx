import { useState } from 'react'

function App() {
  const [taches, setTaches] = useState([
    { id: 1, texte: 'Apprendre Git', fait: true },
    { id: 2, texte: 'Créer une page web', fait: true },
    { id: 3, texte: 'Apprendre React', fait: false },
  ])
  const [nouvelle, setNouvelle] = useState('')

  function ajouterTache() {
    if (nouvelle.trim() === '') return
    setTaches([...taches, { id: Date.now(), texte: nouvelle, fait: false }])
    setNouvelle('')
  }

  function toggleTache(id) {
    setTaches(taches.map(t =>
      t.id === id ? { ...t, fait: !t.fait } : t
    ))
  }

  function supprimerTache(id) {
    setTaches(taches.filter(t => t.id !== id))
  }

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', color: '#E91E8C' }}>Ma Todo List</h1>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
          <input
            type="text"
            value={nouvelle}
            onChange={(e) => setNouvelle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && ajouterTache()}
            placeholder="Nouvelle tâche..."
            style={{
              flex: 1, padding: '10px 14px', borderRadius: '8px',
              border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none'
            }}
          />
          <button onClick={ajouterTache} style={{
            padding: '10px 20px', borderRadius: '8px', border: 'none',
            background: '#E91E8C', color: 'white', cursor: 'pointer', fontWeight: 'bold'
          }}>+</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {taches.map(tache => (
            <div key={tache.id} style={{
              background: 'white', borderRadius: '8px', padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: '12px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              opacity: tache.fait ? 0.6 : 1
            }}>
              <input
                type="checkbox"
                checked={tache.fait}
                onChange={() => toggleTache(tache.id)}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <span style={{
                flex: 1, fontSize: '0.95rem', color: '#333',
                textDecoration: tache.fait ? 'line-through' : 'none'
              }}>{tache.texte}</span>
              <button onClick={() => supprimerTache(tache.id)} style={{
                background: 'none', border: 'none', color: '#ccc',
                cursor: 'pointer', fontSize: '1.1rem'
              }}>✕</button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: '#888', marginTop: '1rem', fontSize: '0.9rem' }}>
          {taches.filter(t => t.fait).length} / {taches.length} tâches complétées
        </p>
      </div>
    </div>
  )
}

export default App