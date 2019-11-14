import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShopingList from './components/ShopingList';


function App() {
  return (
    <div className="App">
    <AppNavbar />
    <ShopingList />
      <h1>Hello Debarun</h1>
    </div>
  );
}

export default App;
