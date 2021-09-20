import MainLeft from '../components/Main/MainLeft';
import LogoutHeader from '../components/Header/LogoutHeader';

const MainPage = () => {
  return (
    <>
      <LogoutHeader />
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
