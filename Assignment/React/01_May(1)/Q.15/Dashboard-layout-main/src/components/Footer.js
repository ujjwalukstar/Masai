import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bg = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.300');

  return (
    <Box
      as="footer"
      p={4}
      bg={bg}
      color={textColor}
      textAlign="center"
      mt="auto"
    >
      <Text>© 2023 Dashboard App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;