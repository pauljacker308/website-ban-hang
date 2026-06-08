import React from 'react';

function Placeholder({ title, message, onBack }) {
  return (
    <div className="container" style={{ padding: '80px 20px' }}>
      <div style={styles.box}>
        <div style={styles.icon}>🚧</div>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.message}>{message}</p>
        <button className="btn-primary" onClick={onBack}>Quay lại trang trước</button>
      </div>
    </div>
  );
}

const styles = {
  box: {
    backgroundColor: '#fff',
    padding: '50px',
    borderRadius: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
  },
  icon: {
    fontSize: '4rem',
    marginBottom: '20px'
  },
  title: {
    fontSize: '2rem',
    color: 'var(--text-color)',
    margin: '0 0 15px 0'
  },
  message: {
    fontSize: '1.1rem',
    color: 'var(--text-light)',
    marginBottom: '30px',
    lineHeight: '1.5'
  }
};

export default Placeholder;
