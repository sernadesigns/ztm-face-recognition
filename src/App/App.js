import { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Particles from "react-tsparticles";
import { clarifaiInstance, particlesOptions } from './options';
import Logo from '../components/Logo/Logo';
import Rank from '../components/Rank/Rank';
import Navigation from '../components/Navigation/Navigation';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../components/FaceRecognition/FaceRecognition';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    console.dir(clarifaiInstance);
    clarifaiInstance.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
      .then(
        function (response) {
          console.log('success', response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function (err) {
          console.log('error', err);
        }
      )
  }

  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          options={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
};

export default App;
