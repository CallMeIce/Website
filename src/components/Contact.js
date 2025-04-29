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
      <div class="container text-center">
  <div class="row">
    <div class="col">
      <h1 className="textContact">Contact Us</h1>
      <br></br>
      <p className="textHours"><span >Email:</span><Mailto
            email="pubpubny@gmail.com"
            subject=" "
            body=" "
          >
            pubpubny@gmail.com
          </Mailto> </p>

          <p className="textHours"><span>Phone:</span>
            <Callto className="phone" phone="+12123456789">
            (212)-245-6789
          </Callto>
          </p>
          <p className="textHours">15 E 7th Street, New York, NY 10003</p>
          <div>
            <p className="textHours">Find us on Instagram!</p><a href="https://www.instagram.com/pub.ny_?igsh=MXF6eXp5OXYyN2NkZA%3D%3D&utm_source=q"><svg className="textIcon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></a></div>
    </div>
    <div class="col">
      <h1 className="textContact">Hours Of Operations</h1>
      <div className="textHours">
        <br></br>
      <ul>Sun   10:00 AM - 1:00 AM</ul>
      <ul>Mon  11:00 AM - 2:00 AM</ul>
      <ul>Tues  11:00 AM - 2:00 AM</ul>
      <ul>Wed  11:00 AM - 2:00 AM</ul>
      <ul>Thu   11:00 AM - 2:00 AM</ul>
      <ul>Fri     11:00 AM - 4:00 AM</ul>
      <ul>Sat    10:00 AM - 4:00 AM</ul>
      </div>
    </div>
  </div>
  </div>


    </div>
  );
}
