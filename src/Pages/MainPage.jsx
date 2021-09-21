import MainLeft from '../components/Main/MainLeft';
import MainRight from '../components/Main/MainRight';
import LogoutHeader from '../components/Header/LogoutHeader';
import './MainPage.css';
const MainPage = () => {
  return (
    <div className='wrapper'>
      <LogoutHeader />
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <MainLeft />
          </div>
          <div className='col-sm'>
            <MainRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
