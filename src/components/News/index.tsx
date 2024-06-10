import { NewContainer } from './styles';
import { formatarDataBrasileira } from '../../utils/formatDate';
import { categories } from '../../utils/constants';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import NewsListProps from '../../types/NewsListPropsType';

export const News = ({ category, news }: NewsListProps) => {
  const { setTotalNews } = useContext(AppContext);
  let listOfNews = [];

  if (category === '') {
    listOfNews = news.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } else {
    listOfNews = news
      .filter((newsItem) => newsItem.category === category)
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  }

  setTotalNews(listOfNews.length);

  return (
    <NewContainer>
      <ul className="card-news">
        {listOfNews.map((newsItem, key) => {
          return (
            <li key={key}>
              <div className="infoData">{`${formatarDataBrasileira(
                new Date(newsItem.date)
              )} | ${categories[newsItem.category].label}`}</div>
              <h2>{newsItem.title}</h2>
              <p>{newsItem.description}</p>
            </li>
          );
        })}
      </ul>
    </NewContainer>
  );
};
