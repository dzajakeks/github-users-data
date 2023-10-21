import React from 'react';
import { Info, Repos, Search, User, Followers } from '../components/index';
import { GithubContext } from '../context/context';

const Home = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main className='mx-auto w-[90%] '>
        <Search />
        <div className='grid place-content-center w-full h-screen'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      </main>
    );
  }

  return (
    <div className='mx-auto w-[90%] '>
      <Search />
      <div className='flex flex-col content-center mt-4 sm:flex-row'>
        <div className='border-[2px] border-zinc-500 w-full max-w-[300px] py-3 text-center mx-auto'>
          <User />
          <Info />
        </div>
        <Repos />
      </div>
      <Followers />
    </div>
  );
};

export default Home;
