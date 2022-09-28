import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllCountries from './components/allCountries';
import Header from './components/header';
import Search from './components/search';
import DetailCountry from './components/detailCountry'
function App() {
  return (
    <Router>
      <Header />
      {/* <Search /> */}
      <Routes>
        <Route path='/' element={<AllCountries />}>
          </Route>
        <Route path='/countries/:name' element={<DetailCountry />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
