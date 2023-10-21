import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import {
  LangChart,
  MostPopularChart,
  StarsChart,
  MostForkedChart,
} from './charts/index';

const Repos = () => {
  const { repos } = useContext(GithubContext);

  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (language === null) return total;
    if (!total[language]) {
      total[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  let populars = repos.reduce((total, item) => {
    const { name, stargazers_count, forks } = item;
    if (name === null) return total;
    total[name] = {
      ...total[name],
      label: name,
      value: stargazers_count,
      forks: forks,
    };
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostPopular = Object.values(populars)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const mostForked = Object.values(populars)
    .sort((a, b) => {
      return b.forks - a.forks;
    })
    .map((item) => {
      return { ...item, value: item.forks };
    })
    .slice(0, 5);

  const mostStars = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  return (
    <div className='w-full grid xl:grid-cols-2 place-content-center rounded-md py-2 grid-cols-1'>
      {mostStars.length === 0 ? (
        <h1 className='grid place-content-center text-3xl'>no languages...</h1>
      ) : (
        <div className='m-1 '>
          <LangChart data={mostUsed} />
        </div>
      )}
      {mostStars.length === 0 ? (
        <h1 className='grid place-content-center text-3xl'>
          0 stars per language...
        </h1>
      ) : (
        <div className='m-1 '>
          <StarsChart data={mostStars} />
        </div>
      )}

      {mostStars.length === 0 ? (
        <h1 className='grid place-content-center text-3xl'>0 repos...</h1>
      ) : (
        <div className='m-1 '>
          <MostPopularChart data={mostPopular} />
        </div>
      )}

      {mostStars.length === 0 ? (
        <h1 className='grid place-content-center text-3xl'>0 forks...</h1>
      ) : (
        <div className='m-1 '>
          <MostForkedChart data={mostForked} />
        </div>
      )}
    </div>
  );
};

export default Repos;
