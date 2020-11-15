export default function serverCalls() {
  const postLogin = async (profileObj) => {
    console.log(profileObj);
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
  };

  return { postLogin };
}
