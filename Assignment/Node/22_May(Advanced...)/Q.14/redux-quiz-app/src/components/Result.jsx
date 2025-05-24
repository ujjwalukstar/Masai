import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || {};

  return (
    <Box textAlign="center" mt="100px">
      <Heading mb={4}>Your Score</Heading>
      <Text fontSize="2xl">{score} / {total}</Text>
      <Button mt={6} colorScheme="teal" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Box>
  );
}
