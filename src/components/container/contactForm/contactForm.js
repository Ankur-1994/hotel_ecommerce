import React, { useState, useEffect } from "react";
import "./contactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSendButtonVisible, setIsSendButtonVisible] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const checkAllFieldDone = () => {
    return (
      name.length > 0 &&
      email.length > 0 &&
      phone.length > 0 &&
      subject.length > 0 &&
      message.length > 0 &&
      isEmailValid &&
      isPhoneValid
    );
  };

  const submitForm = () => {
    setSuccessMsg(
      "Thanks for contacting with us!! we’ll get back to you as soon as possible"
    );
    setTimeout(() => {
      setSuccessMsg("");
    }, 5000);
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  const checkEmailFormat = str => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(str).toLowerCase())) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

  const checkPhoneFormat = phone => {
    var re = /^[789]\d{9}$/;
    if (re.test(String(phone).toLowerCase())) {
      setIsPhoneValid(true);
    } else {
      setIsPhoneValid(false);
    }
  };

  useEffect(() => {
    if (checkAllFieldDone()) {
      setIsSendButtonVisible(true);
    } else {
      setIsSendButtonVisible(false);
    }
  });

  return (
    <div className="form_container">
      <div className="form_box">
        <h1 className="form_title">Contact Us</h1>
        <p className="form_desc">
          Send us a message and we’ll get back to you as soon as possible. You
          can also reach us by phone at{" "}
          <span style={{ color: "rgb(233, 197, 94)" }}>(959) 901-5901</span>.
          Looking forward to hearing from you!
        </p>
        {successMsg.length > 0 ? (
          <span style={{ color: "rgb(233, 197, 94)" }} className="success_msg">
            {successMsg}
          </span>
        ) : null}
        <div className="form_ui">
          <label htmlFor="name">
            <input
              id="name"
              className="form_input"
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </label>

          {!isEmailValid ? (
            <span style={{ color: "rgb(233, 197, 94)" }}>
              Incorrect Email Format
            </span>
          ) : null}
          <label htmlFor="email">
            <input
              id="email"
              className="form_input"
              type="email"
              placeholder="Email"
              required
              value={email}
              autoComplete="email"
              onChange={e => {
                setEmail(e.target.value);
                checkEmailFormat(e.target.value);
              }}
            />
          </label>

          {!isPhoneValid ? (
            <span style={{ color: "rgb(233, 197, 94)" }}>
              Incorrect Phone Number
            </span>
          ) : null}
          <label htmlFor="phone">
            <input
              id="phone"
              className="form_input"
              type="text"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
                checkPhoneFormat(e.target.value);
              }}
            />
          </label>

          <label htmlFor="subject">
            <input
              id="subject"
              className="form_input"
              type="text"
              placeholder="What are you getting in touch about?"
              required
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
          </label>

          <label htmlFor="message">
            <textarea
              id="message"
              className="form_input"
              type="text"
              placeholder="Your Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        {isSendButtonVisible ? (
          <div className="form_action">
            <button
              type="submit"
              className="btn_send"
              onClick={() => submitForm()}
            >
              Send
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ContactForm;
