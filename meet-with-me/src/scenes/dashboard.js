import SessionCard from "../components/SessionCard";

export default function Dashboard() {
  return (
    <div class="container">
      <h2>Dashboard</h2>
      <div id="sessions-container">
        <div class="sessions-column">
          <h3 class="text-muted">Hosting</h3>
          <SessionCard
            sessionTitle="Spikeball Tourney"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
          />
          <SessionCard
            sessionTitle="Hot Dog Eating Contest"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
          />
        </div>
        <div class="sessions-column">
          <h3 class="text-muted">Participating</h3>
          <SessionCard
            sessionTitle="Meet and Greet"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
          />
          <SessionCard
            sessionTitle="Nerf and Nuggs"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
          />
          <SessionCard
            sessionTitle="Movie Night"
            host="Patrick Hubbell"
            startDate="11/20/2020"
            endDate="11/27/2020"
          />
        </div>
      </div>
    </div>
  );
}
