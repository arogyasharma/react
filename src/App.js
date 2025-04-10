import React from 'react';
import Header from './Header';
import Lists from './list';
import Clickme from './Clickme';
import Counter from './counter'
import AgeChecker from './adultornot'
import Welcome from './userwithclass'

function App(){
  return (
  <div>
    <Header/>
    <Lists />
    <Clickme />
    <Counter />
    <AgeChecker/>
    <Welcome/>
  </div>);
}

export default App;



