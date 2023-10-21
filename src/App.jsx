import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login, Home, Error } from './paths';
import PrivateRoute from './paths/PrivateRoute';
import AuthWrapper from './paths/AuthWrapper';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
