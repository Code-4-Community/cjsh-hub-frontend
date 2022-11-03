import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const Navbar = () => {
  const {
    isOpen: isLoginOpen,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isSignupOpen,
    onOpen: onOpenSignup,
    onClose: onCloseSignup,
  } = useDisclosure();

  // todo implement login
  const isLoggedIn = false;

  return (
    <Box backgroundColor='#000' color='#FFF'>
      <Flex alignItems='center' justifyContent='space-between' padding='1rem'>
        <Heading>
          {/*todo style on hover*/}
          <a href='/'>Northeastern University</a>
        </Heading>
        <Stack direction='row'>
          <Button as='a' variant='ghost' href='/opportunities'>
            Opportunities
          </Button>
          {!isLoggedIn && (
            <Button variant='solid' colorScheme='green' onClick={onOpenLogin}>
              Log In
            </Button>
          )}
          {!isLoggedIn && (
            <Button
              variant='outline'
              colorScheme='green'
              backgroundColor='#FFFF'
              onClick={onOpenSignup}
            >
              Sign Up
            </Button>
          )}
        </Stack>
      </Flex>
      <LoginModal isOpen={isLoginOpen} onClose={onCloseLogin} />
      <SignupModal isOpen={isSignupOpen} onClose={onCloseSignup} />
    </Box>
  );
};

export default Navbar;
