import { NewContainer } from './styles';
import { formatarDataBrasileira } from '../../utils/formatDate';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import NewsListProps from '../../types/NewsListPropsType';

export const News = ({ category, news }: NewsListProps) => {
  const { setTotalNews } = useContext(AppContext);
  let listOfNews = [];

  if (category === '') {
    listOfNews = news.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
    console.log(listOfNews);
  } else {
    listOfNews = news
      .filter((newsItem) => String(newsItem.category_id) === category)
      .sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
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
                new Date(newsItem.created_at)
              )} | ${newsItem.category_name}`}</div>
              <h2>{newsItem.title}</h2>
              <p>{newsItem.content}</p>
            </li>
          );
        })}
      </ul>
    </NewContainer>
  );
};
