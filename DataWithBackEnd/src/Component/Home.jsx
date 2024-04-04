import React, { useState } from "react";
import "../App.css";
import List from "./List";
import axios from "axios";

function Home() {
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    console.log(userField);
  };

  const [loading, setLoading] = useState();
  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3271/create",
        userField
      );
      console.log(response);
      setLoading(true);
    } catch (err) {
      console.log("Wrong!!!");
    }
  };
  if (loading) {
    return <Home />;
  }

  return (
    <>
      <div className="container">
        <h1>Add user details</h1>
        <div className="main-box">
          <div className="box">
            <h2>Form</h2>
            <div>
              <label htmlFor="form-label">Name:-</label> <br />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div>
              <label htmlFor="form-label">Email:-</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div>
              <label htmlFor="form-label">Password:-</label> <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div>
              <button type="submit" onClick={(e) => onSubmitChange(e)}>
                Add user
              </button>
            </div>
          </div>
          <div className="box">
            List of data
            <List></List>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
