import { useState } from 'react'

const meteoVilles = {
  paris: { ville: 'Paris', temp: '18°C', condition: 'Nuageux', emoji: '☁️' },
  lome: { ville: 'Lomé', temp: '32°C', condition: 'Ensoleillé', emoji: '☀️' },
  london: { ville: 'Londres', temp: '12°C', condition: 'Pluvieux', emoji: '🌧️' },
  tokyo: { ville: 'Tokyo', temp: '22°C', condition: 'Partiellement nuageux', emoji: '⛅' },
  newyork: { ville: 'New York', temp: '15°C', condition: 'Venteux', emoji: '💨' },
}

function Meteo() {
  const [recherche, setRecherche] = useState('')
  const [meteo, setMeteo] = useState(null)
  const [erreur, setErreur] = useState('')

  function chercherMeteo() {
    const cle = recherche.toLowerCase().replace(/\s/g, '')
    const resultat = meteoVilles[cle]
    if (resultat) {
      setMeteo(resultat)
      setErreur('')
    } else {
      setMeteo(null)
      setErreur('Ville non trouvée. Essaie : Paris, Lomé, Londres, Tokyo, New York')
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#E91E8C' }}>Météo</h1>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem' }}>
        <input
          type="text"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && chercherMeteo()}
          placeholder="Tape une ville..."
          style={{
            flex: 1, padding: '10px 14px', borderRadius: '8px',
            border: '1px solid #ddd', fontSize: '0.95rem', outline: 'none'
          }}
        />
        <button onClick={chercherMeteo} style={{
          padding: '10px 20px', borderRadius: '8px', border: 'none',
          background: '#E91E8C', color: 'white', cursor: 'pointer', fontWeight: 'bold'
        }}>
          Chercher
        </button>
      </div>

      {erreur && <p style={{ color: '#E91E8C', fontSize: '0.9rem' }}>{erreur}</p>}

      {meteo && (
        <div style={{
          background: 'white', borderRadius: '16px', padding: '2rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: '4rem' }}>{meteo.emoji}</div>
          <h2 style={{ color: '#333', margin: '0.5rem 0' }}>{meteo.ville}</h2>
          <p style={{ fontSize: '3rem', fontWeight: 'bold', color: '#E91E8C', margin: '0' }}>{meteo.temp}</p>
          <p style={{ color: '#888', marginTop: '0.5rem' }}>{meteo.condition}</p>
        </div>
      )}
    </div>
  )
}

export default Meteo