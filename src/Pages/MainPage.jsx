import MainLeft from '../components/Main/MainLeft';

const MainPage = () => {
  return (
    <>
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
    </>
  );
};

export default MainPage;
