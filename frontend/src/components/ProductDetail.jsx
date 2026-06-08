import React from 'react';

function ProductDetail({ product, onBack }) {
  if (!product) return null;

  return (
    <div className="container" style={styles.wrapper}>
      <button className="btn-outline" onClick={onBack} style={styles.backBtn}>
        ← Quay lại danh sách
      </button>

      <div style={styles.content}>
        <div style={styles.imageCol}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        <div style={styles.infoCol}>
          <span style={styles.category}>{product.category}</span>
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.price}>{product.price}</p>
          <p style={styles.description}>{product.description}</p>
          
          <div style={styles.actions}>
            <button className="btn-primary" style={{ flex: 2 }}>Thêm vào giỏ hàng</button>
            <button className="btn-secondary" style={{ flex: 1 }}>Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    padding: '40px 20px',
    minHeight: '60vh'
  },
  backBtn: {
    marginBottom: '30px'
  },
  content: {
    display: 'flex',
    gap: '50px',
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    flexWrap: 'wrap'
  },
  imageCol: {
    flex: 1,
    minWidth: '300px'
  },
  image: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '15px'
  },
  infoCol: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  category: {
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    letterSpacing: '2px'
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-color)',
    margin: '10px 0 20px 0'
  },
  price: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    margin: '0 0 30px 0'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: 'var(--text-light)',
    marginBottom: '40px'
  },
  actions: {
    display: 'flex',
    gap: '15px'
  }
};

export default ProductDetail;
