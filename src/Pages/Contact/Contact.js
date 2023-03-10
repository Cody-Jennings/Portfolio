// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useState } from "react";
// import './Contact.css'
// function Contact() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
//     const mailToLink = `mailto:jenningscc9@gmail.com?subject=Contact Request&body=${encodeURIComponent(body)}`;
//     window.location.href = mailToLink;
//     setName('');
//     setEmail('');
//     setMessage('');

//     alert(`Your message has been sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

//   }

//   const contactConfig = {
//     YOUR_EMAIL: 'jenningscc9@gmail.com',
//     YOUR_FONE: '(336)709-6999',
//     description:
//       'I look forward to hearing from you and our future collaborations! ',
//     YOUR_SERVICE_ID: 'service_id',
//     YOUR_TEMPLATE_ID: 'template_id',
//     YOUR_USER_ID: 'user_id',
//   };


//   return (

//     <Container className="contain" >

//       <Row>
//         <Col>
//           <h1>Contact Me</h1>
//           <hr/>
//         </Col>
//       </Row>
//       <Row>
//         <Col>
//           <h3>Cody Jennings</h3>
//           <address>
//             <strong>Email:</strong>{" "}
//             <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
//               {contactConfig.YOUR_EMAIL}
//             </a>
//             <br />
//             <br />
//             {contactConfig.hasOwnProperty("YOUR_FONE") ? (
//               <p>
//                 <strong>Phone:</strong> {contactConfig.YOUR_FONE}
//               </p>
//             ) : (
//               ""
//             )}
//           </address>
//           <p>{contactConfig.description}</p>
//         </Col>
//         <Col>
//           <form onSubmit={handleSubmit}>
//             <Row>
//               <Col>
//                 <input
//                   id="name"
//                   name="name"
//                   placeholder="Name"
//                   type="text"
//                   value={name}
//                   onChange={e => setName(e.target.value)}
//                   required
//                 />
//               </Col>
//               <Col>
//                 <input
//                   id="email"
//                   name="email"
//                   placeholder="Email"
//                   type="email"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   required
//                 />
//               </Col>
//             </Row>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Message"
//               rows="5"
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//               required
//             ></textarea>
//             <br />
//             <Row>
//               <Col>
//                 <button type="submit">
//                   Send
//                 </button>
//               </Col>
//             </Row>
//           </form>
//         </Col>
//       </Row>
//     </Container>


//   );
// }

// export default Contact

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import './Contact.css'

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const mailToLink = `mailto:jenningscc9@gmail.com?subject=Contact Request&body=${encodeURIComponent(body)}`;
    window.location.href = mailToLink;
    setName('');
    setEmail('');
    setMessage('');

    alert(`Your message has been sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

  }

  const contactConfig = {
    YOUR_EMAIL: 'jenningscc9@gmail.com',
    YOUR_FONE: '(336)709-6999',
    description:
      'I look forward to hearing from you and discussing our future collaborations! ',
    YOUR_SERVICE_ID: 'service_id',
    YOUR_TEMPLATE_ID: 'template_id',
    YOUR_USER_ID: 'user_id',
  };


  return (

    <Container fluid className="contact-container">
      <Row className="text-center">
        <Col>
          <h1 className="display-4">Contact Me</h1><br></br>
          <hr/><br></br>
        </Col>
      </Row>
      <Row className="info-container">
  <Col className="my-info">
    <h3 className="text-center mb-3">Cody Jennings</h3>
    <address className="mb-3">
      <strong>Email:</strong>{" "}
      <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="text-decoration-none">
        {contactConfig.YOUR_EMAIL}
      </a>
      <br />
      <br />
      {contactConfig.hasOwnProperty("YOUR_FONE") ? (
        <p>
          <strong>Phone:</strong> {contactConfig.YOUR_FONE}
        </p>
      ) : (
        ""
      )}
    </address>
    <br></br>
    <p>{contactConfig.description}</p>
  </Col>
  <Col className="contact-info">
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Row className='input-row'>
          <Col>
            <input
              id="name"
              name="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="form-name input-box"
            />
          </Col>
          <Col>
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="form-email input-box"
            />
          </Col>
        </Row>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows="5"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          className="form-email input-box"
        ></textarea>
        <Row>
          <Col className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Send Me a Message
            </button>
          </Col>
        </Row>
      </form>
    </div>
  </Col>
</Row>

    </Container>
  );
}

export default Contact;