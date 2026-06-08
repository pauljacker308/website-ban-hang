import React from 'react';

function Header({ onNavigate, currentPage }) {
  return (
    <header style={styles.header}>
      <div style={styles.logo} onClick={() => onNavigate('home')}>
        🍰 Sweet Bakery
      </div>
      
      <nav style={styles.mainNav}>
        <span 
          style={currentPage === 'home' ? styles.activeLink : styles.link} 
          onClick={() => onNavigate('home')}
        >Trang chủ</span>
        <span 
          style={currentPage === 'products' ? styles.activeLink : styles.link} 
          onClick={() => onNavigate('products')}
        >Sản phẩm</span>
        <span 
          style={currentPage === 'about' ? styles.activeLink : styles.link} 
          onClick={() => onNavigate('about')}
        >Giới thiệu</span>
        <span 
          style={currentPage === 'contact' ? styles.activeLink : styles.link} 
          onClick={() => onNavigate('contact')}
        >Liên hệ</span>
      </nav>

      <nav style={styles.authNav}>
        <button className="btn-outline" onClick={() => onNavigate('login')}>Đăng nhập</button>
        <button className="btn-primary" onClick={() => onNavigate('register')}>Đăng ký</button>
        <button 
          style={{...styles.link, fontSize: '0.8rem', color: '#ccc', marginLeft: '10px'}} 
          onClick={() => onNavigate('admin')}
        >Admin</button>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 40px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    cursor: 'pointer',
    flex: 1
  },
  mainNav: {
    display: 'flex',
    gap: '30px',
    flex: 2,
    justifyContent: 'center'
  },
  link: {
    cursor: 'pointer',
    color: 'var(--text-color)',
    fontWeight: '500',
    transition: 'color 0.2s'
  },
  activeLink: {
    cursor: 'pointer',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    borderBottom: '2px solid var(--primary-color)',
    paddingBottom: '2px'
  },
  authNav: {
    display: 'flex',
    gap: '10px',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
};

export default Header;
