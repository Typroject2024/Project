import React from "react";
import "../App.css";
import List from "./List";


function Home() {
  return (
    <>
      <div className="container">
        <h1>Add user details</h1>

        <div className="main-box">
          <div className="box">
            <h2>Form</h2>
            
          </div>
          <div className="box">List of data
            <List></List>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
