import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

function ProductList({ onViewDetail }) {
  return (
    <div className="container" style={{ padding: '20px 20px 80px 20px' }}>
      <h2 className="section-title">Bánh Ngọt Nổi Bật</h2>
      <div style={styles.grid}>
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onViewDetail={onViewDetail} 
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center'
  }
};

export default ProductList;
