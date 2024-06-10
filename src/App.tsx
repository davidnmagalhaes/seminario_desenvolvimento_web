import React, { useState } from 'react';

// Importações dos componentes e contexto
import { AppContext } from './contexts/AppContext';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// Componente principal App
const App: React.FC = () => {
  const [totalNews, setTotalNews] = useState(0);

  const contextValues = {
    totalNews,
    setTotalNews,
  };

  return (
    <AppContext.Provider value={contextValues}>
      <ChakraProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </AppContext.Provider>
  );
};

export default App;
