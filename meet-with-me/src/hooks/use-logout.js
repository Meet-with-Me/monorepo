import { useGoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId =
  '877322371128-l9veif124rl10eirk6fc4godt9t9nssd.apps.googleusercontent.com';

export default function useLogout(setIsSignedIn) {
  const history = useHistory();

  const onLogoutSuccess = (response) => {
    console.log('Logout success... Response:', response);
    setIsSignedIn(false);
    history.push('/');
  };

  const onFailure = (response) => {
    console.log('Logout failed... Response:', response);
  };

  const { signOut: googleSignOut } = useGoogleLogout({
    clientId,
    onFailure,
    onLogoutSuccess,
  });

  return {
    googleSignOut,
  };
}
