import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShopingList from './components/ShopingList';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap'

import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
        <ItemModal />
          <ShopingList />
            <h1>Hello Debarun</h1>
          </Container>
      </div>
   </Provider>
  );
}

export default App;
