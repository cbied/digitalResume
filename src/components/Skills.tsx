import EmblaCarousel from "./EmblaCarousel";
import '../App.css';

const slides = Array.from(Array(7).keys());
function Skills() {
 
 
  return (
    <div className='skills--container'>
      <EmblaCarousel slides={slides} />

      <div className="contact">
        <h4>Phone: 410-508-4105</h4>
        <h4>Email: cabiediger@gmail.com</h4>
        <h4>linkedIn: <a href='https://www.linkedin.com/in/biediger/' target="_blank" rel="noreferrer">LinkedIn Account</a></h4>
      </div>
    </div>
  );
}

export default Skills;