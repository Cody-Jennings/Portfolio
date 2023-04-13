import React from "react"
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='contact-container'>
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
              {/* <div className='resume'><p><FontAwesomeIcon className="icon" icon={faDownload} /><strong> Resume: </strong></p><a className='btn' id='download-btn' href="../components/Cody_Jennings_Software_Engineer_Resume.pdf" download>Download</a></div>
              <br /> */}
            </div>
            <p className='contact-message'><strong>I look forward to collaborating with you!</strong></p>
          </address>
          <div className='form'>
            <div className='form-container'><strong>Leave Me A Message</strong></div>
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
                    <textarea name="message" required cols={30} rows={5} ></textarea>
                  </label>
                </div>
              </div>
              <button className='btn' id='contact-button' type="submit" >Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact