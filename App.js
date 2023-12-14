import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ProductList from './ProductList';
import Header from './Header';
import SearchBox from './SearchBox';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBox />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;