import React, { useEffect, useState } from "react";
import axious from "axios";

function List() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axious("http://localhost:3271/users");
      // console.log(result);
      setUserData(result.data);
    } catch (err) {
      console.log("Wrong!!!");
    }
  };
  return (
    <>
    
      <table border={1}>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => {
            return (
              <tr key={i}>
                <td> {i+1} </td>
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td> {user.password} </td>
              </tr>
            )   
          })}
        </tbody>
      </table>
    </>
  );
}

export default List;
