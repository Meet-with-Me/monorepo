import { useGoogleLogin } from 'react-google-login';
import refreshGoogleToken from '../utils/refresh-google-token';
import { postLogin } from '../server';

const clientId =
  '877322371128-l9veif124rl10eirk6fc4godt9t9nssd.apps.googleusercontent.com';

export default function useLogin(setIsSignedIn) {
  const onSuccess = async (response) => {
    console.log('Login success... Response:', response);
    refreshGoogleToken(response);
    setIsSignedIn(true);

    const postLoginResult = await postLogin(response.profileObj);
    console.log(postLoginResult);
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
