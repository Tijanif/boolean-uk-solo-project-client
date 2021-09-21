import React from 'react';
import './Landing.css';
import '../../index.css';
const Landing = () => {
  const [signupModal, setSignupModal] = React.useState(false);

  return (
    <>
      <div className='wrapper'>
        {/* // section */}
        <section id='hero'>
          <div className='hero-left'>
            <h5>Finally, an APP for you and your partner.</h5>
            <h1 className='hero-title'>What Is Your Share?</h1>
            <p className='hero-desc'>
              Calculate how much you and your partner should contribute towards
              shared household expenses...
            </p>
            <button
              className='btn btn-primary'
              onClick={() => setSignupModal(true)}
            >
              Get Started
            </button>
          </div>
          <img
            src='https://cdn3d.iconscout.com/3d/premium/thumb/startup-3025714-2526912.png'
            alt=''
          />
        </section>
      </div>
    </>
  );
};

export default Landing;
