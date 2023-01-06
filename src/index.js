import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css'

import Header from './components/single/Header';
import Footer from './components/single/Footer';

import Home from './page/Home';
import NoPage from './page/NoPage';
import Casts from './page/Casts';
import Categories from './page/Categories';
import Studios from './page/Studios';

export default function App() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/videos" element={<Home/>} />
            <Route path="/casts" element={<Casts/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/studios" element={<Studios/>} />
            
            <Route path="/casts/:slug" element={<Home/>} />
            <Route path="/studios/:slug" element={<Home/>} />
            {/* <Route path="/video/:slug" element={<Categories/>} /> */}
            <Route path="*" element={<NoPage/>} />
        </Routes>
        <Footer/>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);