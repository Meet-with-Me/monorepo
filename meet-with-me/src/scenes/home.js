import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();

  function handleClickAbout() {
    history.push('/about');
  }

  function handleClickDashboard() {
    history.push('/dashboard');
  }

  return (
    <div>
      <div>
        <h2>Home</h2>
      </div>
      <div>
        <button type='button' onClick={handleClickAbout}>
          About
        </button>
      </div>
      <div>
        <button type='button' onClick={handleClickDashboard}>
          Dashboard
        </button>
      </div>
    </div>
  );
}
