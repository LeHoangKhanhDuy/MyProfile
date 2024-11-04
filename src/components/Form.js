import "./Form.css"

import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Form = () => {

  //contact submit api
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "94359d3f-b2d2-4683-a60c-8a655cfe4b0e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Done!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <div className="form">
        <h1>Send me anything you want</h1>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" placeholder="Enter your name" required name="name"></input>
            <label>Email</label>
            <input type="text" placeholder="Enter your email" required name="email"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Enter your message" required name="message"></textarea>
            <button className="btn" type="submit">Send</button>
        </form>
    </div>
  )
}

export default Form