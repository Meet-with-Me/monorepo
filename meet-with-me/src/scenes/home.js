import { useHistory } from 'react-router-dom';
import { useProfileContext } from '../contexts/profile-context';

export default function Home({ googleSignIn }) {
  const history = useHistory();
  const profile = useProfileContext();

  return (
    <div class="container" id="home-container">
      <div class="home-content">
        <div>
          <img
            className="d-none d-sm-block"
            src={process.env.PUBLIC_URL + '/undraw_calendar_dutt.svg'}
            width="200"
          />
          <p>
            Want to plan an event but don't know everyone's availability? Send
            them a <span>Meet with Me</span>!
          </p>
        </div>
        <button class="btn" type="button" onClick={googleSignIn}>
          <img
            src={process.env.PUBLIC_URL + '/icons8-google.svg'}
            width="40px"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
