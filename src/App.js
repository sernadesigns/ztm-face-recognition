import './App.css';
import Particles from "react-tsparticles";
import { particlesOptions } from './options';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div className="App">
      <Particles
        className="particles"
        options={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
