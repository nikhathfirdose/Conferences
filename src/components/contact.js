import React from "react";

function cleanupUrl(url) {
  return url.replace(/(^")|("$)/g, "");
}

const Conferences = ({ conferences }) => {
  return (
    <div>
      {conferences.map(conference => (
        <div className="card">
          <div className="card-body">
            <img
              className="image"
              src={cleanupUrl(conference.imageURL)}
              alt="Conference Poster"
            />
            <h5 className="conf-date">Date: {conference.confStartDate}</h5>
            <h6 className="conf-name">
              Conference Name: {conference.confName}
            </h6>
            <p className="conf-entry">{conference.entryType}</p>
            <p className="location">
              {" "}
              Location: {conference.city}, {conference.country}
            </p>
            <a
              className="details"
              href={conference.confUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conferences;
