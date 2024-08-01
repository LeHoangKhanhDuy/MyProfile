import "./Form.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <h1>Send me anything you want</h1>
        <form>
            <label>Your name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message"></textarea>
            <button className="btn">Send</button>
        </form>
    </div>
  )
}

export default Form