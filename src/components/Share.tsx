import '../App.css';

function Share() {
  return (
    <div className="share">
        <h3 className='share--heading'>Welcome to my Digital Cover Letter!</h3>
        <p className='share--text'>My name is Chris but my friends call me Bied (pronounced Beed). Short for my last name, Biediger</p>
        <p className='share--text'>I have spent my career as a <span>Javascript</span> developer, developing in <span>React</span> and <span>Angular</span>. I have worked on big enterprise applications, as well as smaller applications professionally.</p>
        <p className='share--text'>Please click the links above to learn more me through my resume. You can also check out my work in my portfolio and Github account.</p>
        <p className="share--text">Finally, if you have any questions or would like to get in contact with me, my contact info in below. Have a great day!</p>
        <div className='contact'>
        <p className="share--text">Phone: 410-508-4105</p>
        <p className="share--text">Email: cabiediger@gmail.com</p>
        </div>

    </div>
  );
}

export default Share;