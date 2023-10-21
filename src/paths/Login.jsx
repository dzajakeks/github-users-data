import React from 'react';
import loginImg from '../../public/images/login.svg';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='grid place-items-center h-screen mx-auto w-screen'>
        <div>
          <h1 className='text-4xl text-center mb-8'>GitHub Users</h1>
          <div className='max-w-md mx-4'>
            <img draggable={false} src={loginImg} alt='login image' />
          </div>
          <div className='w-full text-center'>
            {!isAuthenticated && (
              <button
                className='btn w-full'
                onClick={() => loginWithRedirect()}
              >
                Log In / Sign up
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
