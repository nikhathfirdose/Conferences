import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Conferences</h1>
      </center>
      {contacts.map(contact => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.confStartDate}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.city}</h6>
            <p class="card-text">{contact.country}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
