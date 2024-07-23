import '../App.css';
import PH1 from '../assets/PH1.jpg';
import experienceIcon from '../assets/experience64.png';
import educationIcon from '../assets/education64.png';

const About = () => {
  return (
    <div>
      <section id="about">
        <p className="section_text_p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section_pic-container">
            <img src={PH1} alt="profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={experienceIcon} alt="experience icon" className="icon1" />
                <h3><b>Experience</b></h3>
                <p><br />Mern Stack Developer</p>
              </div>
              <div className="details-container">
                <img src={educationIcon} alt="education icon" className="icon1" />
                <h3><b>Education</b></h3>
                <p><br />B.com. Bachelors Degree</p>
              </div>
            </div>
            <div className="text-container">
              <p>{`I'm a Mern Stack Developer. I love studying new technologies and always give my extra efforts at work.`}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
