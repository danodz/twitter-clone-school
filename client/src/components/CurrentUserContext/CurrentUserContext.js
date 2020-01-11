import React from 'react';

import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
  const [data, status] = useApiEndpoint('/me/profile');

  const value = React.useMemo(() => {
    const profile = data ? data.profile : null;

    return [profile, status];
  }, [data, status]);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
