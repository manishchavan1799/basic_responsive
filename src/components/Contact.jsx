import React from "react";

export const Contact = () => {
  return (
    <div className="contact">
      
      <div className="contactContainer">
      <h1>Contact Us</h1>
        <form action="" onSubmit="">
          <div className="inputfield">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="ex: Manish" />
          </div>
          <div className="inputfield">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="ex: manish@gmail.com" />
          </div>
          <div className="inputfield">
            <label htmlFor="Message">Message</label>
            <input type="text" placeholder="Tell us about your query" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};
