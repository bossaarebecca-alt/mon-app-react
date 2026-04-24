function APropos() {
  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#E91E8C' }}>À propos</h1>
      <p style={{ color: '#555', lineHeight: '1.7' }}>
        Je suis Rebecca, développeuse web en apprentissage. 
        J'ai appris Git, GitHub, HTML, CSS, JavaScript et React.
      </p>
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {['HTML', 'CSS', 'Git', 'GitHub', 'JavaScript', 'React'].map(skill => (
          <span key={skill} style={{ background: '#E91E8C', color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '0.9rem' }}>{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default APropos