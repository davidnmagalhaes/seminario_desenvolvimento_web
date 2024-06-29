import { Button, Stack } from '@chakra-ui/react';
import { TopBarContainer } from './styles';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import TopbarProps from '../../types/TopbarPropsType';
import api from '../../services/api';

export const Topbar = ({ handleChangeCategory }: TopbarProps) => {
  const { totalNews } = useContext(AppContext);
  const [categories, setCategories] = useState<{ id: number; name: string; }[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get('/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  return (
    <TopBarContainer>
      <h1>Diário de Notícias</h1>
      <Stack spacing={4} direction="row" align="center">
        <Button size="md" onClick={() => handleChangeCategory('')}>
          Todas
        </Button>
        {categories.map((category) => {
          return (
            <Button
              key={category.id}
              colorScheme="teal"
              size="md"
              onClick={() => handleChangeCategory(category.id.toString())}
            >
              {category.name}
            </Button>
          );
        })}
      </Stack>
      <div>Total: {totalNews}</div>
    </TopBarContainer>
  );
};
