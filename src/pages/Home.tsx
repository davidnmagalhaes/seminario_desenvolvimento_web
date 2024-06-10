import { useState } from 'react';
import FloatingAddButton from '../components/FloatButton';
import { News } from '../components/News';
import { Topbar } from '../components/Topbar';
import newsMock from '../mocks/news.json';
import { NewsForm } from '../components/NewsForm';
import NewsProps from '../types/NewsPropsType';

export const Home = () => {
  // Se o estado category estiver com string vazia todas as notícias serão exibidas
  const [category, setCategory] = useState('');
  // O estado news lista as notícias mocadas por padrão vindo de um arquivo JSON
  const [news, setNews] = useState(newsMock as NewsProps[]);
  // O estado isModalOpen controla a abertura e fechamento do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const onSubmit = (values: NewsProps) => {
    setNews([...news, values]);
    setIsModalOpen(false);
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
