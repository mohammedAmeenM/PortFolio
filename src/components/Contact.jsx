import '../App.css'; 
import emailIcon from '../assets/email64.png';
import locationIcon from '../assets/location64.png';
import phoneIcon from '../assets/phone64.png';

const Contact = () => {
  const sendMail = () => {
    // Add your mail sending logic here
    alert("Mail functionality is not implemented.");
  };

  return (
    <div className='mt-24'>
      <section id="contact">
        <p className="section_text_p1">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={emailIcon} alt="email-icon" className="icon contact-icon email-icon" />
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="input-field"
            />
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="input-field"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
              className="textarea-field"
            ></textarea>
            <button
              className="sub-btn"
              onClick={sendMail}
            >
              Submit
            </button>
          </div>
          <div className="contact-info-container">
            <img src={locationIcon} alt="location" className="icon" />
            <p>Aliparamba, Perinthalmanna</p>
            <img src={emailIcon} alt="email" className="icon" />
            <p>amiameen507@gmail.com</p>
            <img src={phoneIcon} alt="phone" className="icon" />
            <p>+918714710090</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
