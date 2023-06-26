// import { url } from 'inspector';
import '../App.css';
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import IMAGES from '../assets/index'


function Skills() {
 
 
  return (
    <div className='skills--container'>
      <SnapList  direction='horizontal' className='snapList'>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
            <img src={IMAGES.reactLogo} alt="" className='snap-item' />
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <img src={IMAGES.redux} alt="" className='snap-item' />
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <img src={IMAGES.typescript} alt="" className='snap-item' />
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <img src={IMAGES.node} alt="" className='snap-item' />
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <img src={IMAGES.express} alt="" className='snap-item' />
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <img src={IMAGES.angular} alt="" className='snap-item' />
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <img src={IMAGES.css} alt="" className='snap-item' />
        </SnapItem>
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <img src={IMAGES.html} alt="" className='snap-item' />
        </SnapItem>
      </SnapList>
      <div className="contact">
        <h4>Phone: 410-508-4105</h4>
        <h4>Email: cabiediger@gmail.com</h4>
        <h4>linkedIn: <a href='https://www.linkedin.com/in/biediger/' target="_blank" rel="noreferrer">LinkedIn Account</a></h4>
      </div>
    </div>
  );
}

export default Skills;