import React from 'react';
import { categories } from '../data/products';

function Categories() {
  return (
    <div className="container" style={styles.wrapper}>
      <h2 className="section-title">Danh mục sản phẩm</h2>
      <div style={styles.grid}>
        {categories.map(cat => (
          <div key={cat.id} style={styles.card}>
            <div style={styles.icon}>{cat.icon}</div>
            <h3 style={styles.name}>{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '60px 20px'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    flexWrap: 'wrap'
  },
  card: {
    backgroundColor: '#fff',
    padding: '30px 20px',
    borderRadius: '15px',
    textAlign: 'center',
    width: '150px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    cursor: 'pointer',
    transition: 'transform 0.3s'
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '10px'
  },
  name: {
    margin: 0,
    color: 'var(--text-color)'
  }
};

export default Categories;
