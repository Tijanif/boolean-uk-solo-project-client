import { useHistory } from 'react-router';
import useStore from '../../store';

const NologinHeader = () => {
  const history = useHistory();
  const setLogoutUser = useStore((state) => state.setLogoutUser);
  const logOut = useStore((state) => state.logOut);

  const handlelogout = () => {
    setLogoutUser();
    history.push('/');
    console.log('I am clicked');
  };

  return (
    <header>
      <div className='header-left'>
        <h1 className='logo'>
          CoupleFinance<span>.</span>
        </h1>
      </div>
      <div className='header-btns'>
        <button className='btn btn-primary' onClick={handlelogout}>
          Logout
        </button>
        {/* <button className='btn btn-primary' onClick={() => {}}>
          Print your
        </button> */}
      </div>
    </header>
  );
};

export default NologinHeader;
