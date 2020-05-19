import React from "react";
import Card from "./Card";
import { contacts } from "../contacts";

const createContact = contacts => {
  return (
    <Card
      key={contacts.key}
      name={contacts.name}
      img={contacts.imgURL}
      phone={contacts.phone}
      email={contacts.email}
      id={contacts.key}
    />
  );
};

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createContact)};
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
