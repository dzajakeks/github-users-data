import { createContext, useEffect, useState } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const GithubContext = createContext();

const rateLimitUrl = 'https://api.github.com/rate_limit';
const baseUrl = 'https://api.github.com/users/';

const GithubContextProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const [remainingReq, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState({
    show: false,
    message: '',
  });
  function toggleError(show, message) {
    setError({ show, message });
  }

  async function checkRequests() {
    try {
      const { data } = await axios(rateLimitUrl);
      const remaining = data.rate.remaining;
      setRequests(remaining);
      if (remaining === 0) {
        toggleError(true, 'You have exceeded your hourly limit  ');
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkRequests();
  }, []);

  async function searchGithubUser(user) {
    setIsLoading(true);
    try {
      const response = await axios(`${baseUrl}${user}`);
      setGithubUser(response.data);
      toggleError(false, '');
      setIsLoading(false);
      if (response) {
        setGithubUser(response.data);
        const { login, followers_url } = response.data;
        axios(`${baseUrl}${login}/repos?per_page=100`).then((response) =>
          setRepos(response.data)
        );

        axios(`${followers_url}?per_page=100`).then((response) =>
          setFollowers(response.data)
        );
      }
    } catch (error) {
      toggleError(true, 'there is no user with that username');
    }
    checkRequests();
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        remainingReq,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContextProvider, GithubContext };
