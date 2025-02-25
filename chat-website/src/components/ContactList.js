import React from "react";

const contacts = [
  { id: 1, name: "Jessica Drew", lastMessage: "Ok, see you later", time: "8:30 pm", avatar: "JD" },
  { id: 2, name: "David Moore", lastMessage: "You: I don't remember anything", time: "8:16 pm", avatar: "DM" },
  { id: 3, name: "Greg James", lastMessage: "I got a job at SpaceX", time: "8:02 pm", avatar: "GJ" },
  { id: 4, name: "Emily Dorson", lastMessage: "Table for four, 5PM. Be there.", time: "7:42 am", avatar: "ED" }
];

const ContactList = () => {
  return (
    <div className="contacts">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact">
          <span className="avatar">{contact.avatar}</span>
          <div className="contact-info">
            <h4>{contact.name}</h4>
            <p>{contact.lastMessage}</p>
          </div>
          <span className="time">{contact.time}</span>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
