import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UserPostData() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [city, setCity] = useState('');
  const { id } = useParams(); // Use destructuring to get id from useParams
  console.log("id: ", id);

  // Handle form submission (for new user)
  function handleSubmit(e) {
    e.preventDefault();

    // POST request to create a new user
    axios.post('http://localhost:8000/api/user', {
        name,
        email,
        age,
        city,
        contact,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Handle edit for an existing user
  function handleEdit(e) {
    e.preventDefault();

    // PUT request to update the user
    axios
      .put(`http://localhost:8000/api/user/${id}`, {
        name,
        email,
        age,
        city,
        contact,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Fetch user data to populate the form fields for editing
  function getOne() {
    axios
      .get(http://localhost:8000/api/user/${id})
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setContact(response.data.contact);
        setCity(response.data.city);
        setAge(response.data.age);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (id) {
      getOne(); // Fetch data if editing an existing user
    }
  }, [id]); // Run the effect only when the id changes

  return (
    <>
      <div id="container">
        <h1 id="title">User Form</h1>
        <p id="description">
          <em>Thank you for taking the time to answer these questions about you</em>
        </p>
        <form
          id="survey-form"
          onSubmit={id ? handleEdit : handleSubmit} // Dynamically use handleEdit or handleSubmit based on id
        >
          <label id="name-label">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
          />

          <label id="email-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <label id="number-label">Age</label>
          <input
            id="number"
            type="number"
            name=" age"
            value={age}
            placeholder=" Enter your age"
            onChange={(event) => setAge(event.target.value)}
          />

          <label id="number-label">Contact</label>
          <input
            id="number"
            type="text"
            name="contact"
            value={contact}
            placeholder=" Enter your Contact"
            onChange={(event) => setContact(event.target.value)}
          />

          <label id="number-label">City</label>
          <input
            id="number"
            type="text"
            name="city"
            value={city}
            placeholder=" Enter your City"
            onChange={(event) => setCity(event.target.value)}
          />

          <button id="submit" type="submit">
            {id ? 'Edit' : 'Submit'} {/* Display 'Edit' if id exists, otherwise 'Submit' */}
          </button>
        </form>
      </div>
    </>
  );
}

export default UserPostData;
