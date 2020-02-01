import React from 'react';

// components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';

// includes
import './Assets/css/app.min.css';

const App = ()=> {
  return (
    <div className="App">
     
      <Header />
      <Homepage />

    </div>
  );
}

export default App;
