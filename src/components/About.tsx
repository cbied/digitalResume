import '../App.css';
// import resumePDF from '../'

function About() {
  return (
    <div className='about'>
        <div className='intro'>    
            <div className='profilePicture' />
            <h2 className='about--text'>Christopher Biediger</h2>
            <h3 className='about--text'>Software Engineer</h3>
        </div>
        <div className="links">
            {/* build pop up model for resume -- option to download */}
            <a className='link web tooltip'
            href="https://google.com" target="_blank" rel="noreferrer">
                <span className="tooltiptext">Portfolio</span>
            </a>
            <a className='link resume tooltip'
            href={require('../assets/resumePDF.pdf')} target="_blank" rel="noreferrer">
                <span className="tooltiptext">Resume</span>
            </a>
            
            <a className='link github tooltip'
            href="https://github.com/cbied" target="_blank" rel="noreferrer">
                <span className="tooltiptext">Github</span>
            </a>
        </div>
    </div>
  );
}

export default About;
