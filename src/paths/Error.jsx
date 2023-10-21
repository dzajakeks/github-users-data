import React from 'react';
import errorImg from '../../public/images/error.svg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='grid place-items-center h-screen mx-auto w-screen'>
      <div>
        <div className='max-w-md mx-4'>
          <img draggable={false} src={errorImg} alt='error image 404' />
        </div>
        <div className='text-center'>
          <h1 className='text-6xl my-4'>404</h1>
          <p className='text-lg'>Sorry, the page doesn't exist</p>
        </div>
        <div className='w-full text-center'>
          <Link to='/' className='btn mt-4'>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
