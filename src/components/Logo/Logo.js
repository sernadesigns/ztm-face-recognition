import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0' style={{ height: '150px', width: '150px' }}>
      <Tilt
        className="Tilt"
      >
        <div className='br2 shadow-2' style={{ height: '150px' }}>
          <div className='pa3'>
            <img style={{ paddingTop: '10px' }} src={brain} alt="logo" />
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;