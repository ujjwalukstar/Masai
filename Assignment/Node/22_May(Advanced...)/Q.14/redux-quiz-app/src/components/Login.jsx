import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/authReducer';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Heading, Input, VStack, useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogin = () => {
    if (!email || !password) {
      toast({ title: 'Please enter email and password', status: 'warning' });
      return;
    }
    dispatch(loginUser(email, password)).then((res) => {
      if (res) {
        toast({ title: 'Login successful', status: 'success' });
        navigate('/quiz');
      } else {
        toast({ title: 'Login failed', status: 'error' });
      }
    });
  };

  return (
    <Box maxW="sm" mx="auto" mt="100px" p={4} borderWidth="1px" borderRadius="lg">
      <Heading mb={6}>Login</Heading>
      <VStack spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </VStack>
    </Box>
  );
}
