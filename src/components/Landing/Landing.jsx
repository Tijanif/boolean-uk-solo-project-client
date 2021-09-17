import React from 'react';

import './Landing.css';
import '../../index.css';
import Header from '../Header/Header';
import SignupModal from '../../modal/SignupModal';
import LoginModal from '../../modal/LoginModal';

const Landing = () => {
  const [signupModal, setSignupModal] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  return (
    <>
      <div className='wrapper'>
        <Header setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
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

        <SignupModal show={signupModal} onHide={() => setSignupModal(false)} />
        <LoginModal show={loginModal} onHide={() => setLoginModal(false)} />
      </div>
    </>
  );
};

export default Landing;
