const Header = ({ setLoginModal, setSignupModal }) => {
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
      </div>
    </header>
  );
};

export default Header;
