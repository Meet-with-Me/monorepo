import React, { createContext, useContext, useEffect, useRef } from 'react';

const Profile = createContext();
export default Profile;

export function useProfileContext(options = { fetch: false }) {
  const profile = useContext(Profile);
  const shouldFetch = useRef(options.fetch);

  useEffect(() => {
    if (shouldFetch.current) {
      profile.fetch();
      shouldFetch.current = false;
    }
  }, [profile]);

  return profile;
}

export function ProfileContextProvider({ children }) {
  // TODO: Create hook to perform fetch requests and set isFetched to false
  const profile = {
    email: 'email',
    fetch: () => {},
    name: 'Name',
    id: 'id',
    isFetched: true,
  };

  return <Profile.Provider value={profile}>{children}</Profile.Provider>;
}
