import React from 'react';

function ProductCard({ product, onViewDetail }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.badge}>{product.category}</div>
      </div>
      <div style={styles.info}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.price}>{product.price}</p>
        <button className="btn-outline" style={{ width: '100%' }} onClick={() => onViewDetail(product)}>
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    width: '280px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  imageContainer: {
    position: 'relative',
    height: '220px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  badge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: 'var(--primary-color)',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  info: {
    padding: '20px'
  },
  name: {
    margin: '0 0 10px 0',
    fontSize: '1.2rem',
    color: 'var(--text-color)',
    height: '46px',
    overflow: 'hidden'
  },
  price: {
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    fontSize: '1.3rem',
    marginBottom: '20px',
    marginTop: 0
  }
};

export default ProductCard;
