import { useHistory } from 'react-router-dom';
import { useProfileContext } from '../contexts/profile-context';
import calendarImg from '../images/undraw_calendar_dutt.svg';
import googleLogo from '../images/icons8-google.svg';

export default function Home({ googleSignIn }) {
  const history = useHistory();
  const profile = useProfileContext();

  return (
    <div class="container" id="home-container">
      <div class="home-content">
        <div>
          <img className="d-none d-sm-block" src={calendarImg} width="200" />
          <p>
            Want to plan an event but don't know everyone's availability? Send
            them a <span>Meet with Me</span>!
          </p>
        </div>
        <button class="btn" type="button" onClick={googleSignIn}>
          <img src={googleLogo} width="40px" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
