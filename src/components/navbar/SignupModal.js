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

const SignupModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <b>Sign Up</b>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className='m-2'>
            <label htmlFor='firstname'>
              <b>First Name</b>
            </label>
          </div>
          <div className='m-2 border border-success rounded-3'>
            <input
              className='m-1'
              type='text'
              placeholder='Enter First Name'
              name='firstname'
              required
            />
          </div>

          <div className='m-2'>
            <label htmlFor='lastname'>
              <b>Last Name</b>
            </label>
          </div>
          <div className='m-2 border border-success rounded-3'>
            <input
              className='m-1'
              type='text'
              placeholder='Enter Last Name'
              name='lastname'
              required
            />
          </div>

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

          <div className='m-2'>
            <label htmlFor='reenterpsw'>
              <b>Re-enter Password</b>
            </label>
          </div>
          <div className='m-2 border border-success rounded-3'>
            <input
              className='m-1'
              type='password'
              placeholder='Confirm Password'
              name='reenterpsw'
              required
            />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Sign Up
          </Button>
          <Button variant='ghost'>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

SignupModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default SignupModal;
