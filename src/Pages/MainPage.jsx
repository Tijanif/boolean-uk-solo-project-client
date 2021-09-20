import MainLeft from '../components/Main/MainLeft';

const MainPage = () => {
  return (
    <>
      <div className='wrapper'>
        <h1>Welcome to main page</h1>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
              <MainLeft />
            </div>
            <div className='col-sm'>
              {/* Mainright */}
              <p>Main Right</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
