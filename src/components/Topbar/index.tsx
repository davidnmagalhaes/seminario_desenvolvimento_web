import { Button, Stack } from '@chakra-ui/react';
import { TopBarContainer } from './styles';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import TopbarProps from '../../types/TopbarPropsType';

export const Topbar = ({ handleChangeCategory }: TopbarProps) => {
  const { totalNews } = useContext(AppContext);

  return (
    <TopBarContainer>
      <h1>Diário de Notícias</h1>
      <Stack spacing={4} direction="row" align="center">
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => handleChangeCategory('tecnologia')}
        >
          Tecnologia
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          onClick={() => handleChangeCategory('política')}
        >
          Política
        </Button>
      </Stack>
      <div>Total: {totalNews}</div>
    </TopBarContainer>
  );
};
