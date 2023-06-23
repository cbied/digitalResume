import '../App.css';

function About() {
  return (
    <div className='about'>
        <div className='intro'>    
            <div className='profilePicture' />
            <h2 className='about--text'>Christopher Biediger</h2>
            <h3 className='about--text'>Software Engineer</h3>
        </div>
        <div className="links">
            <div className='link resume tooltip'>
                <span className="tooltiptext">Resume</span>
            </div>
            <div className='link web tooltip'>
            <span className="tooltiptext">Portflio</span>
            </div>
            <div className='link github tooltip'>
            <span className="tooltiptext">Github</span>
            </div>
        </div>
    </div>
  );
}

export default About;
