import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import { GoRepo } from 'react-icons/go';
import { HiOutlineUsers } from 'react-icons/hi';
import { FiUserPlus } from 'react-icons/fi';
import { BsFileEarmarkCode } from 'react-icons/bs';

const Info = () => {
  const { githubUser } = useContext(GithubContext);
  const { followers, following, public_repos, public_gists } = githubUser;
  const userInfoItems = [
    {
      id: 1,
      text: 'repos',
      value: public_repos,
      icon: <GoRepo className='text-green-400 mx-3 text-2xl' />,
    },
    {
      id: 2,
      text: 'followers',
      value: followers,
      icon: <HiOutlineUsers className='text-indigo-400 mx-3 text-2xl' />,
    },
    {
      id: 3,
      text: 'following',
      value: following,
      icon: <FiUserPlus className='text-red-400 mx-3 text-2xl' />,
    },
    {
      id: 4,
      text: 'gists',
      value: public_gists,
      icon: <BsFileEarmarkCode className='text-teal-300 mx-3 text-2xl' />,
    },
  ];
  return (
    <div className='w-36 mx-auto'>
      {userInfoItems.map((userInfo) => {
        const { id, text, value, icon } = userInfo;
        return (
          <div key={id} className='flex items-center my-2 '>
            <span className='bg-slate-600 py-3 ml-2 my-2 rounded-full'>
              {icon}
            </span>
            <div className=' text-center w-full'>
              <h1 className='text-white font-bold text-2xl'>{value}</h1>
              <p className='text-gray-400'>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
