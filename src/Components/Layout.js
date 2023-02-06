import React from 'react';
import Footer from './Layout/Footer';
import Navigation from './Layout/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
