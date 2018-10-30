import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/rank';
import Particles from 'react-particles-js';
import { particles } from './particles'
import Clarifai  from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '3e507f749cfa4015afa4854812165b38'
 });

 
class App extends Component {
  state={
    input:'',
    imageURL:''
  }
  onInputChange = (event) => {
    this.setState({input:event.target.value})
  }
  onButtonClick = () =>{
    this.setState({imageURL:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
    (response) => {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    },
    (err) => {
    }
  );

  }
  render() {
    return (
      <div className="App" >
      <Particles className="particles"
                 params={particles}/>
            <Navigation />
            <Rank/>
            <ImageLinkForm 
                          onInputChange={this.onInputChange} 
                          onButtonClick={this.onButtonClick}/>    
            <FaceRecognition imageURL={this.state.imageURL}/>    
       </div>
    );
  }
}
export default App;
