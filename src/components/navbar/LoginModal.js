import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <b>Log In</b>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className='m-2'>
            <label htmlFor='email'>
              <b>Email</b>
            </label>
          </div>
          <div className='m-2 border border-success rounded-3'>
            <input
              className='m-1'
              type='text'
              placeholder='Enter Email'
              name='email'
              required
            />
          </div>

          <div className='m-2'>
            <label htmlFor='psw'>
              <b>Password</b>
            </label>
          </div>
          <div className='m-2 border border-success rounded-3'>
            <input
              className='m-1'
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Log In
          </Button>
          <Button variant='ghost'>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LoginModal;
