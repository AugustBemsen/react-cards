import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";
function App(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailsInfo={props.phone} />
        <Details detailsInfo={props.email} />
      </div>
    </div>
  );
}

export default App;
