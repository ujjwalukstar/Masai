import { Grid, Box, Text, useColorModeValue } from '@chakra-ui/react';

const products = [
  'Premium Widget',
  'Deluxe Gadget',
  'Ultimate Tool',
  'Basic Component',
  'Advanced Module',
  'Professional Kit'
];

const MainContent = () => {
  const bg = useColorModeValue('white', 'gray.700');
  const cardBg = useColorModeValue('gray.50', 'gray.600');

  return (
    <Box flex="1" p={4} bg={bg}>
      <Grid
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap={6}
      >
        {products.map((product) => (
          <Box
            key={product}
            p={4}
            borderRadius="md"
            boxShadow="md"
            bg={cardBg}
          >
            <Text fontWeight="bold">{product}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default MainContent;