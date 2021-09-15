import React from 'react';
import styled from 'styled-components';
import useStore from '../store';
// import LogInModal from './LogInModal';
import SignupModal from './SignupModal';
// import LoginErrorModal from './LoginErrorModal';
// import FlightBookingError from './FlightBookingError';
// import ConfirmRemoveAccount from './ConfirmRemoveAccount';

const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  display: grid;
  place-content: center;
  background-color: rgb(255, 182, 193, 0.5);
  z-index: 1000;
  .modal {
    border-radius: 5px;
    padding: 20px 40px;
    background-color: white;
    position: relative;
    display: grid;
    grid-gap: 5px;
  }
`;

function ModalContainer() {
  const modal = useStore((state) => state.modal);
  const setModal = useStore((state) => state.setModal);

  if (modal === '') {
    return null;
  }
  return (
    <StyledContainer>
      <div className='modal'>
        {/* {modal === 'logIn' ? <LogInModal /> : null} */}
        {modal === 'signUp' ? <SignupModal /> : null}
        {/* {modal === 'loginError' ? <LoginErrorModal /> : null}
        {modal === 'selectFlight' ? <FlightBookingError /> : null}
        {modal === 'removeAccount' ? <ConfirmRemoveAccount /> : null} */}
      </div>
    </StyledContainer>
  );
}

export default ModalContainer;
