import React from 'react';
import {
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';
import HomePage from './pages/homepage';
import aboutpage from './pages/aboutpage';
import articlepage from './pages/article';
import articleslist from './pages/articleslist';
import Navbar from './navbar';

import './App.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={aboutpage} exact/>
          <Route path="/articles" component={articleslist} exact/>
          <Route path="/article" component={articlepage} exact/>
        </div>
      </div>
    </Router>
  );
}

export default App;