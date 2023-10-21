import React, { useContext, useState } from 'react';
import searchImg from '../../public/images/search.png';
import { GithubContext } from '../context/context';
import { useAuth0 } from '@auth0/auth0-react';

const Search = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();
  const isUser = isAuthenticated && user;

  const [singleUser, setUser] = useState('');
  const { remainingReq, error, searchGithubUser, loading } =
    useContext(GithubContext);
  function handleOnSubmit(e) {
    e.preventDefault();
    if (singleUser) {
      searchGithubUser(singleUser);
    }
  }

  return (
    <div className='bg-zinc-900 flex flex-col justify-between align-middle md:flex-row '>
      <div
        className='flex items-center mx-auto
      '
      >
        {isUser && user.picture && (
          <img
            className='w-8 rounded-full ml-2 mobile:w-14 my-2'
            src={user.picture}
            alt={user.name}
          />
        )}
        {isUser && user.name && (
          <h4 className='mx-3 text-xs mobile:text-sm'>
            Welcome, <br></br> <strong>{user.name.toUpperCase()}</strong>
          </h4>
        )}
        {isUser ? (
          <button
            className='text-red-400'
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            logout
          </button>
        ) : (
          <button onClick={loginWithRedirect}>login</button>
        )}
      </div>
      <form
        onSubmit={handleOnSubmit}
        className='p-4 flex flex-col justify-end items-center mx-auto mobile:flex-row'
      >
        {error.show ? (
          <p className='text-red-400'>{error.message}</p>
        ) : (
          <p className='text-xl mb-2'>Requests: {remainingReq} / 60</p>
        )}

        <div className='flex'>
          <input
            type='text'
            value={singleUser}
            onChange={(e) => setUser(e.target.value)}
            placeholder='Search Github User'
            className='input input-bordered w-full max-w-xs mx-2'
          />
          {remainingReq > 0 && !loading && (
            <button type='submit'>
              <img className='w-6' src={searchImg} alt='search image' />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
