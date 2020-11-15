import { useHistory } from 'react-router-dom';
import { useProfileContext } from '../contexts/profile-context';

export default function Home() {
  const history = useHistory();
  const profile = useProfileContext();

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
        <button type="button" onClick={handleClickAbout}>
          About me: {profile.name}
        </button>
      </div>
      <div>
        <button type="button" onClick={handleClickDashboard}>
          Dashboard
        </button>
      </div>
    </div>
  );
}
