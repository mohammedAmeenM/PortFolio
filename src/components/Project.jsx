import eco from '../assets/eco.png'; 
import mini from '../assets/mini.png';
import high from '../assets/highh.png';

const Project = () => {
    return (
      <div className="mt-20">
        <section id="project">
          <p className="section_text_p1">Browse My Recent</p>
          <h1 className="title">Projects</h1>
          <div className="about-details-container">
            <div className="about-containers">
              {/* E-Commerce project */}
              <a   rel="noopener noreferrer" className="details-container color-container">
                <div className="article-container">
                  <img src={eco} alt="E-Commerce" className="project-img" />
                </div>
                <h5 className="experience-sub-title project-title">E Commerce</h5>
              </a>
              
              {/* PostStream project */}
              <a href="https://www.poststream.site/" target="_blank" rel="noopener noreferrer" className="details-container color-container">
                <div className="article-container">
                  <img src={mini} alt="PostStream" className="project-img" />
                </div>
                <h5 className="experience-sub-title project-title">Social Media</h5>
              </a>
              
              {/* High Hydration project */}
              <a href="https://highhydration-web-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="details-container color-container">
                <div className="article-container">
                  <img src={high} alt="High Hydration" className="project-img" />
                </div>
                <h5 className="experience-sub-title project-title">High Hydration [Live]</h5>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Project;
