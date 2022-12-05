import {
  Box,
  Button,
  Flex,
  Heading,
  Stack, Text,
  useDisclosure,
} from '@chakra-ui/react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import colors from '../../theme/colors';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants';

const Navbar = () => {
  const navigate = useNavigate();

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
    <Box backgroundColor={colors.dark} color={colors.light}>
      <Flex
        align='center'
        height='4.25rem'
        justify='space-between'
        padding='0 1rem'
      >
        <Heading
          fontSize='1rem'
          width='20rem'
          _hover={{
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
          onClick={() => navigate(ROUTES.HOME)}
        >
          Northeastern University Climate Justice and Sustainability Hub
          Interactive Campus
        </Heading>
        <Flex align='center' height='100%' gap='1rem'>
          <Button
            variant='ghost'
            href={ROUTES.OPPORTUNITIES}
            _hover={{
              backgroundColor: 'transparent',
              color: colors.green[500]
            }}
          >
            Opportunities
          </Button>
          {!isLoggedIn && (
            <>
              <Button
                variant='outline'
                colorScheme='green'
                onClick={onOpenLogin}
              >
                Log In
              </Button>
              <Button colorScheme='green' onClick={onOpenSignup}>
                Sign Up
              </Button>
            </>
          )}
        </Flex>
      </Flex>
      <LoginModal isOpen={isLoginOpen} onClose={onCloseLogin} />
      <SignupModal isOpen={isSignupOpen} onClose={onCloseSignup} />
    </Box>
  );
};

export default Navbar;
