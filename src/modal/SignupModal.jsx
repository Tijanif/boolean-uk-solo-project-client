import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useStore from '../store';
import { useHistory } from 'react-router';

function SignupModal(props) {
  const setSignupUser = useStore((state) => state.setSignupUser);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;

    const newUser = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
      avatar: target.avatar.value,
    };
    console.log(newUser);
    setSignupUser(newUser);
  };
  return (
    <Modal
      {...props}
      size='m'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='name' name='name' placeholder='Name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' name='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='Password'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicAvatar'>
            <Form.Label>Avatar</Form.Label>
            <Form.Control type='avatar' name='avatar' placeholder='Avatar' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default SignupModal;
