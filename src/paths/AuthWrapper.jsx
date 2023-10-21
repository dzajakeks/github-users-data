import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div className='grid w-full h-screen place-content-center'>
        <span className='loading loading-spinner w-20'></span>
      </div>
    );
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <>{children}</>;
}

export default AuthWrapper;
