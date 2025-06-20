import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import HeaderContent from './components/HeaderContent';
import Content1 from './components/Content1';

const HeaderLandingPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 300); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`transition-all duration-1500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <Header />
      <HeaderContent />
      <Content1 />
    </div>
  );
};

export default HeaderLandingPage;
