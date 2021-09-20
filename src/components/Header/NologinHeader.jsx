import React from 'react';

import SignupModal from '../../modal/SignupModal';
import LoginModal from '../../modal/LoginModal';
const NologinHeader = () => {
  const [signupModal, setSignupModal] = React.useState(false);
  const [loginModal, setLoginModal] = React.useState(false);
  return (
    <header>
      <div className='header-left'>
        <h1 className='logo'>
          CoupleFinance<span>.</span>
        </h1>
      </div>
      <div className='header-btns'>
        <button
          className='btn btn-primary'
          onClick={() => setSignupModal(true)}
        >
          Signup
        </button>
        <button className='btn btn-primary' onClick={() => setLoginModal(true)}>
          Login
        </button>
        <SignupModal show={signupModal} onHide={() => setSignupModal(false)} />
        <LoginModal show={loginModal} onHide={() => setLoginModal(false)} />
      </div>
    </header>
  );
};

export default NologinHeader;
