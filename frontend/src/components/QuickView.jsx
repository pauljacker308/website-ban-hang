import React from 'react';

function QuickView({ product, onClose }) {
  if (!product) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeBtn} onClick={onClose}>&times;</button>
        <div style={styles.content}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <div style={styles.info}>
            <h2>{product.name}</h2>
            <p style={styles.price}>{product.price}</p>
            <p>{product.description}</p>
            <button className="btn-primary" style={{ marginTop: '20px' }}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    position: 'relative',
    maxWidth: '600px',
    width: '90%'
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#333'
  },
  content: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    flexWrap: 'wrap'
  },
  image: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  info: {
    flex: 1,
    minWidth: '200px'
  },
  price: {
    fontSize: '1.5rem',
    color: '#d32f2f',
    fontWeight: 'bold'
  }
};

export default QuickView;
