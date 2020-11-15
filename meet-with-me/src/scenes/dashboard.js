import { useHistory } from "react-router-dom";

import SessionCard from "../components/session-card";

export default function Dashboard() {
  const history = useHistory();

  const handleClickAvailability = (sessionId) => {
    history.push(`/session?sessionId=${sessionId}`);
  };

  return (
    <div class="container">
      <h2>Dashboard</h2>
      <div id="sessions-container">
        <div class="sessions-column">
          <h3 class="text-muted">Hosting</h3>
          <SessionCard
            sessionTitle="Spikeball Tourney"
            startDate="11/20/2020"
            endDate="11/27/2020"
            handleClickAvailability={handleClickAvailability}
          />
          <SessionCard
            sessionTitle="Hot Dog Eating Contest"
            startDate="11/20/2020"
            endDate="11/27/2020"
            handleClickAvailability={handleClickAvailability}
          />
        </div>
        <div class="sessions-column">
          <h3 class="text-muted">Participating</h3>
          <SessionCard
            sessionTitle="Meet and Greet"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
            handleClickAvailability={handleClickAvailability}
          />
          <SessionCard
            sessionTitle="Nerf and Nuggs"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
            handleClickAvailability={handleClickAvailability}
          />
          <SessionCard
            sessionTitle="Movie Night"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
            handleClickAvailability={handleClickAvailability}
          />
        </div>
      </div>
    </div>
  );
}
