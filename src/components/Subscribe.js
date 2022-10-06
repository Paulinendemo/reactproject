

import React, { useEffect, useState } from "react";
import Axios from "axios";

function Reviews() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("Getting response from ::::", response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const postData = (e) => {
    e.preventDefault();
    Axios.post("https://jsonplaceholder.typicode.com/users", {
      name,
      email,
    })
      .then((response) => console.log("Posting data", response))
      .catch((err) => console.log(err));
  };

  const postDelete = (id, e) => {
    e.preventDefault();
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        console.log("Deleted !!!", response);
      })
      .catch((err) => console.log(err));
  };

  const arr = data.map((data, index) => {
    return (
      <tr>
        <td style={{ border: "1px solid black" }}>{data.id}</td>
        <td style={{ border: "1px solid black" }}> {data.name}</td>
        <td style={{ border: "1px solid black" }}>{data.email}</td>
        <td style={{ border: "1px solid black" }}>
          <button onClick={(e) => postDelete(data.id, e)}>Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div className="form-div">
      <form className="review-form">
        <label>Name</label>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        <label>Email</label>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <hr />
        <button onclick={postData}>POST</button>
      </form>

      <table style={{ border: "1px solid black" }}>
        <tr>
          <th style={{ border: "1px solid black" }}>ID</th>
          <th style={{ border: "1px solid black" }}>Name</th>
          <th style={{ border: "1px solid black" }}>Email</th>
        </tr>

        {arr}
      </table>
    </div>
  );
}

export default Reviews;