const DEFAULT_REFRESH_TIME = 3300000;

export default function refreshGoogleToken(response) {
  let refreshTimeout = (response.tokenObj.expires_in * 1000) ?? DEFAULT_REFRESH_TIME

  const refreshToken = async () => {
    const newAuthResponse = await response.reloadAuthReponse();
    // saveUserToken(NewAuthResponse.access_token); <-- Save new token?
    console.log('newAuthReponse:', newAuthResponse);
    console.log('newAuthToken:', newAuthResponse.id_token);

    refreshTimeout = (newAuthResponse.tokenObj.expires_in * 1000) ?? DEFAULT_REFRESH_TIME;

    setTimeout(refreshToken, refreshTimeout);
  }

  setTimeout(refreshToken, refreshTimeout);
}
