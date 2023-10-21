import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import noFollowersImg from '../../public/images/noFollowers.webp';

const Followers = () => {
  const { followers } = useContext(GithubContext);
  return (
    <div className='max-w-xl max-h-80 overflow-y-scroll border-[2px] border-zinc-500 mx-auto'>
      <p className='text-center mt-2'>followers</p>
      {followers.length > 1 ? (
        followers.map((follower, index) => {
          const { avatar_url, login, html_url } = follower;
          return (
            <div key={index} className='p-3 flex '>
              <img
                className='w-12 rounded-full'
                src={avatar_url}
                alt='follower avatar'
              />
              <div className='ml-4'>
                <p className='font-bold'>{login}</p>
                <a className='text-gray-400' target='_blank' href={html_url}>
                  {html_url}
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <div className='p-3 flex '>
          <img
            className='w-12 rounded-full'
            src={noFollowersImg}
            alt='follower avatar'
          />
          <div className='ml-4'>
            <p className='font-bold'>No Followers</p>
            <p>no-follower link</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Followers;
