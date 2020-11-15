import React from "react";

export default function SessionCard({
  sessionTitle,
  startDate,
  endDate,
  host,
}) {
  return (
    <div class="card session-card">
      <div class="card-body">
        <h5 class="card-title">{sessionTitle}</h5>
        <h6 class="card-text text-muted">Host: {host}</h6>
        <p class="card-text">
          {startDate} - {endDate}
        </p>
        <a href="#" class="btn btn-primary">
          Your Availability
        </a>
      </div>
    </div>
  );
}
