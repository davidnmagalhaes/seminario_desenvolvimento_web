import { useEffect, useState } from 'react';
import FloatingAddButton from '../components/FloatButton';
import { News } from '../components/News';
import { Topbar } from '../components/Topbar';
import { NewsForm } from '../components/NewsForm';
import NewsProps from '../types/NewsPropsType';
import api from '../services/api';

export const Home = () => {
  // Se o estado category estiver com string vazia todas as notícias serão exibidas
  const [category, setCategory] = useState('');
  // O estado news lista as notícias, inicializando por padrão com um array vazio
  const [news, setNews] = useState<NewsProps[]>([]);
  // O estado isModalOpen controla a abertura e fechamento do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Função que é executada quando o componente é montado
    const fetchNews = async () => {
      // Simula uma requisição a uma API
      const response = await api.get('/news');
      // Atualiza o estado news com a lista de notícias vinda da API
      setNews(response.data);
    };

    fetchNews();
  }, []);

  // Função que é executada quando o botão de adicionar notícia é clicado
  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  // Função que é executada quando um botão de categoria é selecionado
  const handleChangeCategory = (category: string) => {
    setCategory(category);
  };

  // Função que é executada quando o modal é fechado
  const onClose = () => {
    setIsModalOpen(false);
  };

  // Função que é executada quando o formulário do modal é submetido
  const onSubmit = async (values: NewsProps) => {
    try{
      const response = await api.post('/news', values);
      setNews([...news, response.data]);
      setIsModalOpen(false);
    }catch (error){
      console.log(error);
    }
  };

  return (
    <div>
      {/* Componente de botão flutuante que chama a função handleAddClick quando clicado */}
      <FloatingAddButton onClick={handleAddClick} />
      {/* Componente de formulário de notícias que é aberto quando o botão flutuante é clicado */}
      <NewsForm isOpen={isModalOpen} onClose={onClose} onSubmit={onSubmit} />
      {/* Componente de barra de navegação superior que chama a função handleChangeCategory quando um botão de categoria é clicado */}
      <Topbar handleChangeCategory={handleChangeCategory} />
      {/* Componente de lista de notícias que recebe a categoria e a lista de notícias como parâmetro */}
      <News category={category} news={news} />
    </div>
  );
};
