import React, { useContext } from 'react';
import { GithubContext } from '../context/context';

import { UserBio } from './UserBio';

const User = () => {
  const { githubUser } = useContext(GithubContext);
  const {
    avatar_url,
    name,
    twitter_username,
    login,
    html_url,
    bio,
    company,
    location,
    email,
    blog,
  } = githubUser;

  return (
    <>
      <div className='max-w-[220px] mx-auto'>
        <img className='rounded-full' src={avatar_url} alt='avatar image' />
      </div>
      <div>
        <p className='font-bold mt-2 text-xl'>{name}</p>
        <p className='text-gray-400'>
          {twitter_username ? twitter_username : login}
        </p>
        <button className='my-2 btn bg-zinc-900'>
          <a target='_blank' href={html_url}>
            follow
          </a>
        </button>
        <p className='mb-3 break-before-all px-1 w-full mx-auto max-w-[300px]'>
          {bio}
        </p>
        <div className='text-center mb-2 '>
          <UserBio
            company={company}
            location={location}
            email={email}
            blog={blog}
          />
        </div>
      </div>
    </>
  );
};

export default User;
