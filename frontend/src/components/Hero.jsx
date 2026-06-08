import React from 'react';

function Hero({ onNavigate }) {
  return (
    <div style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Thưởng thức vị ngọt yêu thương</h1>
        <p style={styles.subtitle}>Khám phá bộ sưu tập bánh kem, bánh nướng và đồ ngọt tuyệt hảo được làm từ nguyên liệu tươi mới nhất mỗi ngày.</p>
        <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '15px 30px' }} onClick={() => onNavigate('products')}>
          Xem Menu Bánh
        </button>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    height: '450px',
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1200")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    padding: '0 50px',
    color: 'white'
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '15px',
    maxWidth: '500px',
    color: 'var(--text-color)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 15px 0',
    color: 'var(--primary-color)'
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '25px',
    lineHeight: '1.5'
  }
};

export default Hero;
