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
//     window.location.href = "/contact"



//   }

//   const contactConfig = {
//     YOUR_EMAIL: 'jenningscc9@gmail.com',
//     YOUR_FONE: '(336)709-6999',
//     description:
//       'I look forward to discussing our future collaborations! ',
//     YOUR_SERVICE_ID: 'service_id',
//     YOUR_TEMPLATE_ID: 'template_id',
//     YOUR_USER_ID: 'user_id',
//   };


//   return (

//     <Container fluid className="contact-container">
//       <Row className="text-center">
//         <Col>
//           <h1 className="display-4">Contact Me</h1><br></br>
//           <hr /><br></br>
//         </Col>
//       </Row>
//       <Row className="info-container">
//         <Col className="my-info">
//           <h3 className="text-center mb-3">Cody Jennings</h3>
//           <address className="mb-3">
//             <strong>Email:</strong>{" "}
//             <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="text-decoration-none">
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
//           <br></br>
//           <p>{contactConfig.description}</p>
//         </Col>
//         <Col className="contact-info">
//           <div className="form-container">
//             <form onSubmit={handleSubmit}>
//               <Row className='input-row'>
//                 <Col>
//                   <input
//                     id="name"
//                     name="name"
//                     placeholder="Name"
//                     type="text"
//                     value={name}
//                     onChange={e => setName(e.target.value)}
//                     required
//                     className="form-name input-box"
//                   />
//                 </Col>
//                 <Col>
//                   <input
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     value={email}
//                     onChange={e => setEmail(e.target.value)}
//                     required
//                     className="form-email input-box"
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//                 required
//                 className="form-email input-box"
//               ></textarea>
//               <Row>
//                 <Col className="d-flex justify-content-center">
//                   <button type="submit" className="btn btn-primary">
//                     Send Me a Message
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Contact;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import './Contact.css'

// function Contact() {

//   const contactConfig = {
//     YOUR_EMAIL: 'jenningscc9@gmail.com',
//     YOUR_FONE: '(336)709-6999',
//     description:
//       'I look forward to discussing our future collaborations! ',
//   };

//   return (

//     <Container fluid className="contact-container">
//       <Row className="text-center">
//         <Col>
//           <h1 className="display-4">Contact Me</h1><br></br>
//           <hr /><br></br>
//         </Col>
//       </Row>
//       <Row className="info-container">
//         <Col className="my-info">
//           <h3 className="text-center mb-3">Cody Jennings</h3>
//           <address className="mb-3">
//             <strong>Email:</strong>{" "}
//             <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="text-decoration-none">
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
//           <br></br>
//           <p>{contactConfig.description}</p>
//         </Col>
//         <Col className="contact-info">
//           <div className="form-container">
//             <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
//               <input type="hidden" name="form-name" value="contact" />
//               <Row className='input-row'>
//                 <Col>
//                   <input
//                     id="name"
//                     name="name"
//                     placeholder="Name"
//                     type="text"
//                     required
//                     className="form-name input-box"
//                   />
//                 </Col>
//                 <Col>
//                   <input
//                     id="email"
//                     name="email"
//                     placeholder="Email"
//                     type="email"
//                     required
//                     className="form-email input-box"
//                   />
//                 </Col>
//               </Row>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Message"
//                 rows="5"
//                 required
//                 className="form-email input-box"
//               ></textarea>
//               <Row>
//                 <Col className="d-flex justify-content-center">
//                   <button type="submit" className="btn btn-primary">
//                     Send Me a Message
//                   </button>
//                 </Col>
//               </Row>
//             </form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Contact;

import React from "react"
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='contact-main'>
      <div className='contact-inner'>
        <div className='contact-title'>Contact Me<hr></hr></div>
        <div className='contact-body'>
          <address>
            <p className='contact-info-message'>Let's Stay Connected</p>
            <br />

            <p className='contact-name'><strong>Cody Jennings</strong></p>
            <br />
            <div className='contact-info'>
              <p><FontAwesomeIcon className="icon" icon={faMobileScreen} /><strong> Phone: </strong>(336) 709 - 6999</p>
              <br />
              <p><FontAwesomeIcon className="icon" icon={faEnvelope} /><strong> Email: </strong> <a className='email-link' href={"mailto:jenningscc9@gmail.com"}>jenningscc9@gmail.com</a></p>
              <br />
              <div className='resume'><p><FontAwesomeIcon className="icon" icon={faDownload} /><strong> Resume: </strong></p><a className='btn' id='download-btn' href="../assets/Cody_Jennings_Software_Engineer_Resume.pdf" download>Download</a></div>
              <br />
            </div>
            <p className='contact-message'><strong>I look forward to collaborating with you!</strong></p>
          </address>
          <div className='form'>
            <div className='form-message'>Leave Me A Message</div>
            <br />
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className='form-inputs'>
                <div>
                  <label>First name<br />
                    <input type="text" name="first-name" required />
                  </label>
                </div>
                <div>
                  <label>Last name<br />
                    <input type="text" name="last-name" required />
                  </label>
                </div>
                <div>
                  <label htmlFor="email">Email</label><br />
                  <input id="email" type="email" name="email" required />
                </div>
                <div>
                  <label>Message<br />
                    <textarea name="message" required cols={30} rows={10} ></textarea>
                  </label>
                </div>
              </div>
              <button className='btn' id='contact-button' type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact