import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Sidebar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const bg = useColorModeValue('gray.200', 'gray.800');
  const borderColor = useColorModeValue('gray.300', 'gray.700');

  return (
    <Box
      w="250px"
      p={4}
      bg={bg}
      borderRight="1px solid"
      borderColor={borderColor}
    >
      {isLoggedIn ? (
        <Text fontSize="lg" fontWeight="bold">
          Welcome back!
        </Text>
      ) : (
        <Text>Please log in to see more options</Text>
      )}
    </Box>
  );
};

export default Sidebar;