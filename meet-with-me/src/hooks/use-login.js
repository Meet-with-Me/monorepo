import { useGoogleLogin } from 'react-google-login';
import refreshGoogleToken from '../utils/refresh-google-token';

const clientId =
  '877322371128-l9veif124rl10eirk6fc4godt9t9nssd.apps.googleusercontent.com';

export default function useLogin(setIsSignedIn) {
  const onSuccess = async (response) => {
    console.log('Login success... Response:', response);
    refreshGoogleToken(response);
    setIsSignedIn(true);

    try {
      const serverResponse = await fetch('http://localhost:4000/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response.profileObj),
      });
      const serverResult = await serverResponse.json();
      console.log(serverResult);
    } catch (error) {
      console.error(error);
    }
  };

  const onFailure = (response) => {
    console.log('Login failed... Response:', response);
  };

  const { signIn: googleSignIn } = useGoogleLogin({
    accessType: 'offline',
    clientId,
    isSignedIn: true,
    onFailure,
    onSuccess,
  });

  return {
    googleSignIn,
  };
}
