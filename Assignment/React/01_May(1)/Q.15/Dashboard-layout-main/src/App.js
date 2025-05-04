import { ChakraProvider, Flex, useBreakpointValue } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <ChakraProvider>
      <AuthProvider>
        <ThemeProvider>
          <Flex direction="column" minH="100vh">
            <Navbar />
            <Flex flex="1">
              {!isMobile && <Sidebar />}
              <MainContent />
            </Flex>
            <Footer />
          </Flex>
        </ThemeProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;