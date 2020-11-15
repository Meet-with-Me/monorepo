export async function postLogin(profileObj) {
  try {
    const serverResponse = await fetch('http://localhost:4000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileObj),
    });
    const serverResult = await serverResponse.json();
    return serverResult;
  } catch (error) {
    return error;
  }
}
