import '../App.css';
import Ami from '../assets/ami1.jpg';
import LinkedIn from '../assets/linkdin64px.png';
import GitHub from '../assets/gitub64px.png';
import Insta from '../assets/insta64.png';


const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div className="section_pic-container">
          <img src={Ami} alt="ney" className="ney" />
        </div>
        <div className="section_text">
          <p className="section_text_p1">{`Heyyh ,,,I'm`}</p>
          <h1 className="title">Mohammed Ameen</h1>
          <p className="section_text_p2">Frontend Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={() => window.open("../assets/AmeenResume.pdf")}>Download CV</button>
            <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>Contact Info</button>
          </div>
          <div id="socials-container">
            <img src={LinkedIn} alt="My LinkedIn profile" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/ameen-amee-97757a218/'} />
            <img src={GitHub} alt="My Github profile" className="icon" onClick={() => window.location.href = 'https://github.com/amiiiiee'} />
            <img src={Insta} alt="My Instagram profile" className="icon" onClick={() => window.location.href = 'https://www.instagram.com/amiiiiiii.___/?next=%2F'} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
