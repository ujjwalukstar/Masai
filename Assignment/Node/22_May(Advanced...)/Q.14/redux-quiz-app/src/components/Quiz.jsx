import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuizData } from '../redux/quizReducer';
import {
  Box, Button, Heading, RadioGroup, Radio, Stack, Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { questions, isLoading } = useSelector((state) => state.quiz);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    dispatch(fetchQuizData());
  }, [dispatch]);

  const handleNext = () => {
    if (answer === questions[current]?.correctOption) {
      setScore(score + 1);
    }
    setAnswer('');
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Box maxW="lg" mx="auto" mt="50px" p={4} borderWidth="1px" borderRadius="lg">
      <Heading mb={4}>Quiz</Heading>
      <Text mb={4}><strong>Q{current + 1}:</strong> {questions[current]?.question}</Text>
      <RadioGroup onChange={setAnswer} value={answer}>
        <Stack>
          {questions[current]?.options.map((opt, i) => (
            <Radio key={i} value={opt}>{opt}</Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Button mt={6} colorScheme="teal" onClick={handleNext}>
        {current + 1 === questions.length ? 'Submit' : 'Next'}
      </Button>
    </Box>
  );
}
