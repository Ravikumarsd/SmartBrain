import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/rank';

class App extends Component {
  state={
    width:''
  }
  render() {
    return (
      <div className="App" >
            <Navigation />
            <Rank/>
            <ImageLinkForm/>        
       </div>
    );
  }
}
export default App;
