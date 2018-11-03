import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import { particles } from './particles'
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

class App extends Component {
  state = {
    input:'',
    imageURL:'',
    box:{},
    route:'signin',
    user:{
      id:'',
      name:'',
      email:'',
      entries:0,
      joined:''
    }
  }

  //Loading data from backend and storing them in states
  loadUser = (data) => {
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joined:data.joined
      }
    })
  }

  //Calculating coordinates for Box
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
    fetch('https://salty-meadow-85226.herokuapp.com/imagesurl',{
          method:'post',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({
            input:input
          })
        })
    .then(response => response.json())    
    .then(response => {
      if(response) {
        fetch('https://salty-meadow-85226.herokuapp.com/images',{
          method:'put',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({
            id:this.state.user.id
          })
        })
        .then(response => response.json())
        .then( count => {
            this.setState(Object.assign(this.state.user,{entries:count}))
         })
      }
      displayFace(calculateFaceLocation(response))
    })
     .catch(err => console.log(err)) 
  }

  onRouteChange = (route) => {
    this.setState({route:route})
  }

  render() {
    
    const {onRouteChange,onInputChange,onButtonClick} = this;
    const{route,imageURL,box,user} = this.state;

    return (
      <div className="App">
      <Particles className="particles"
                 params={particles}/>
        {(route === 'signin') ? 
            <Signin loadUser = {this.loadUser} onRouteChange={onRouteChange}/> 
        : (route === 'register') ?  
        <Register loadUser = {this.loadUser} onRouteChange={onRouteChange}/> 
        : <div>
            <Navigation onRouteChange={onRouteChange} />
            
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
