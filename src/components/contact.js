import React from "react";

function cleanupUrl(url) {
  return url.replace(/(^")|("$)/g, "");
}

const Conferences = ({ conferences }) => {
  return (
    <div className="card-container">
      {conferences.map(conference => (
        <div className="card-body">
          <img
            className="image"
            src={cleanupUrl(conference.imageURL)}
            alt="Conference Poster"
          />
          <div className="intro">
            <h5 className="conf-name">
              {""}
              {conference.confName}
            </h5>

            <p className="conf-entry">{conference.entryType}</p>
          </div>
          <div className="description">
            <p className="conf-date">
              {" "}
              <img
                src="https://i.postimg.cc/gkhhtgdR/Business-Overtime-icon.png"
                alt="date"
              />
              {"  "}
              {conference.confStartDate} - {conference.confEndDate}
            </p>
            <p className="location">
              {" "}
              <img
                src="https://i.postimg.cc/2yKsK4p9/Location-Map-icon.png"
                alt="location"
              />{" "}
              {conference.city}, {conference.country}
            </p>
            <div>
              <a
                className="details"
                href={conference.confUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conferences;
