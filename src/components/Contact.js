import React from "react";
import "./style.css";

export default function Contact() {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div>
      <div className="container">
        <h1 className="textContact">Contact Us</h1>
        <div>
          <h3 className="textContact">Email:</h3>
          <Mailto
            email="pubpubny@gmail.com"
            subject=" "
            body=" "
          >
            pubpubny@gmail.com
          </Mailto>
          <h3 className="textContact"> Phone:</h3>
          <Callto className="phone" phone="+12123456789">
            (212)-245-6789
          </Callto>
        </div>
      </div>
    </div>
  );
}
