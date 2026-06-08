import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Placeholder from './components/Placeholder';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    navigateTo('detail');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <Categories />
            <ProductList onViewDetail={handleViewDetail} />
          </>
        );
      case 'products':
        return <ProductList onViewDetail={handleViewDetail} />;
      case 'detail':
        return <ProductDetail product={selectedProduct} onBack={() => navigateTo('home')} />;
      case 'about':
        return <Placeholder title="Giới Thiệu" message="Trang giới thiệu về Tiệm Bánh Ngọt Ngào đang được xây dựng." onBack={() => navigateTo('home')} />;
      case 'contact':
        return <Placeholder title="Liên Hệ" message="Form liên hệ với cửa hàng đang được xây dựng." onBack={() => navigateTo('home')} />;
      case 'login':
        return <Placeholder title="Đăng Nhập" message="Chức năng đăng nhập sẽ được làm ở bài sau." onBack={() => navigateTo('home')} />;
      case 'register':
        return <Placeholder title="Đăng Ký" message="Chức năng đăng ký sẽ được làm ở bài sau." onBack={() => navigateTo('home')} />;
      case 'admin':
        return <Placeholder title="Quản Trị Viên" message="Khu vực dành cho chủ shop." onBack={() => navigateTo('home')} />;
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div>
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      {renderContent()}
    </div>
  );
}

export default App;
