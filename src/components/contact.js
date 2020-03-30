import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      {/* <center>
        <h1>Conferences</h1>
      </center> */}
      {contacts.map(contact => (
        <div class="card">
          <div class="card-body">
            <img class="image" src={contact.imageURL} alt="Poster Image" />
            <h5 class="conf-date">Date: {contact.confStartDate}</h5>
            <h6 class="conf-name">Conference Name: {contact.confName}</h6>
            <p class="conf-entry">{contact.entryType}</p>
            <p class="location">
              {" "}
              Location: {contact.city}, {contact.country}
            </p>
            <a class="details" href={contact.confUrl} target="_blank">
              Read More{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
