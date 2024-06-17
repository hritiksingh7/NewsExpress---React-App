import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} apiKey={apiKey} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={6} apiKey={apiKey} country="in" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} apiKey={apiKey} country="in" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={6} apiKey={apiKey} country="in" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={6} apiKey={apiKey} country="in" category="health" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} apiKey={apiKey} country="in" category="sports" />} />
            <Route path="/science" element={<News key="science" pageSize={6} apiKey={apiKey} country="in" category="science" />} />
            <Route path="/technology" element={<News key="technology" pageSize={6} apiKey={apiKey} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
}

export default App
