import { useState, useEffect } from 'react'

function Blagues() {
  const [blague, setBlague] = useState(null)
  const [chargement, setChargement] = useState(true)

  function chargerBlague() {
    setChargement(true)
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        setBlague(data)
        setChargement(false)
      })
      .catch(() => {
        setBlague({ setup: 'Impossible de charger une blague.', punchline: '' })
        setChargement(false)
      })
  }

  useEffect(() => {
    chargerBlague()
  }, [])

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#E91E8C' }}>Blague du jour</h1>

      {chargement ? (
        <p style={{ color: '#888', fontSize: '1.1rem' }}>Chargement...</p>
      ) : (
        <div style={{
          background: 'white', borderRadius: '12px', padding: '2rem',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)', margin: '1.5rem 0'
        }}>
          <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '1rem' }}>
            {blague?.setup}
          </p>
          <p style={{ fontSize: '1.2rem', color: '#E91E8C', fontWeight: 'bold' }}>
            {blague?.punchline}
          </p>
        </div>
      )}

      <button onClick={chargerBlague} style={{
        background: '#E91E8C', color: 'white', border: 'none',
        padding: '12px 28px', borderRadius: '25px', cursor: 'pointer',
        fontSize: '1rem', fontWeight: 'bold'
      }}>
        Nouvelle blague
      </button>
    </div>
  )
}

export default Blagues