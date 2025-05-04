import { Flex, Button, Text, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const bg = useColorModeValue('gray.100', 'gray.900');

  return (
    <Flex
      as="nav"
      p={4}
      bg={bg}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontWeight="bold">Dashboard</Text>
      <Flex gap={4}>
        <Text>Status: {isLoggedIn ? 'Logged In' : 'Logged Out'}</Text>
        <Button onClick={toggleAuth}>
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;