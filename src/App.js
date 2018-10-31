import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/rank';
import Particles from 'react-particles-js';
import { particles } from './particles'
import Clarifai  from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

const app = new Clarifai.App({
  apiKey: '3e507f749cfa4015afa4854812165b38'
 });

class App extends Component {
  state={
    input:'',
    imageURL:'',
    box:{},
    route:'signin'
  }

  calculateFaceLocation = (data) => {
     const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
     const image = document.getElementById('inputimage');
     const width = Number(image.width);
     const height = Number(image.height);
     return {
        leftCol: clarifaiFace.left_col * width,
        topRow:  clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
     }
  }

  displayFace = (box) => {
      this.setState({box:box})   //we can also use ES7 syntax : this.setState({box})
  }
 

  onInputChange = (event) => {
    this.setState({input:event.target.value})
  }

  onButtonClick = () =>{
    
    const {input} = this.state;
    const {displayFace,calculateFaceLocation} = this;

    this.setState({imageURL:input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input)     // Don't use this.state.imageURL
    .then(response => displayFace(calculateFaceLocation(response)))
     .catch(err => console.log(err)) 
  }

  onRouteChange = (route) => {
    this.setState({route:route})
  }

  render() {
    
    const {onRouteChange,onInputChange,onButtonClick} = this;
    const{route,imageURL,box} = this.state;
    
    return (
      <div className="App" >
      <Particles className="particles"
                 params={particles}/>
        {(route === 'signin') ? 
            <Signin onRouteChange={onRouteChange}/> 
        : (route === 'register') ?  
        <Register onRouteChange={onRouteChange}/> 
        : <div>
            <Navigation onRouteChange={onRouteChange} />
            <Rank/>
            <ImageLinkForm 
                          onInputChange={onInputChange} 
                          onButtonClick={onButtonClick}/>    
            <FaceRecognition 
            box={box}
            imageURL={imageURL}/> 
        </div>
        }         
       </div>
    );
  }
}

export default App;
