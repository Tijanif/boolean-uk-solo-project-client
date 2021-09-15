import React from 'react';
import Footer from './Footer';
import './Landing.css';
import '../../index.css';

const Landing = () => {
  return (
    <>
      <div className='wrapper'>
        <header>
          <div className='header-left'>
            <h1 className='logo'>
              CoupleFinance<span>.</span>
            </h1>
          </div>
          <div className='header-btns'>
            <button className='btn btn-primary'>Signup</button>
            <button className='btn btn-primary'>Login</button>
          </div>
        </header>
        {/* // section */}
        <section id='hero'>
          <div className='hero-left'>
            <h5>Finally, an APP for you and your partner.</h5>
            <h1 className='hero-title'>What Is Your Share?</h1>
            <p className='hero-desc'>
              Calculate how much you and your partner should contribute towards
              shared household expenses...
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
          <img
            src='https://cdn3d.iconscout.com/3d/premium/thumb/startup-3025714-2526912.png'
            alt=''
          />
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
