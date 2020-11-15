import React from 'react';

export default function SessionCard({
  sessionTitle,
  startDate,
  endDate,
  host = null,
  handleClickAvailability,
}) {
  return (
    <div className="card session-card">
      <div className="card-body">
        <h5 className="card-title">{sessionTitle}</h5>
        {!!host && <h6 className="card-text text-muted">Host: {host}</h6>}
        <p className="card-text">
          {startDate} - {endDate}
        </p>
        <button
          className="btn btn-primary"
          onClick={() => handleClickAvailability(1234)}
        >
          Your Availability
        </button>
      </div>
    </div>
  );
}
