import { useHistory } from 'react-router-dom';
import { useProfileContext } from '../contexts/profile-context';
import calendarImg from '../images/undraw_calendar_dutt.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Home({ googleSignIn }) {
  const history = useHistory();
  const profile = useProfileContext();

  return (
    <div id="home-container">
      <div className="container">
        <div className="row justify-content-md-center justify-content-sm-center justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 text-center text-lg-left text-content">
            <h1>Event planning made simple</h1>
            <h4>
              Want to pick a date and time but don't know everyone's
              availability? Send them a <span>Meet with Me</span>!
            </h4>
            <button
              className="btn mx-auto mx-lg-0"
              type="button"
              onClick={googleSignIn}
            >
              <FontAwesomeIcon className="icon" icon={faGoogle} />
              Sign in with Google
            </button>
          </div>
          <img className="col-8 col-sm-8 col-md-7 col-lg-5" src={calendarImg} />
        </div>
      </div>
    </div>
  );
}
