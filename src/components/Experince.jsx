import tickIcon from '../assets/tick64.png'; // Import your tick icon
import '../App.css'; 

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <p className="section_text_p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Full Stack Development</h2>
              <div className="article-container">
                {[
                  { title: "React.js", level: "Experienced" },
                  { title: "Next.js", level: "Experienced" },
                  { title: "Redux", level: "Experienced" },
                  { title: "Tailwind CSS", level: "Experienced" },
                  { title: "Node.js", level: "Experienced" },
                  { title: "Express.js", level: "Experienced" },
                  { title: "MongoDB", level: "Basic" },
                  { title: "MySQL", level: "Experienced" },
                  { title: "JavaScript", level: "Experienced" },
                  { title: "TypeScript", level: "Experienced" },
                  { title: "HTML5", level: "Experienced" },
                  { title: "CSS", level: "Experienced" },
                  { title: "AWS", level: "Experienced" },
                  { title: "Git", level: "Experienced" },
                  { title: "Swagger", level: "Experienced" },
                  { title: "Jest", level: "Experienced" }
                ].map(skill => (
                  <article key={skill.title}>
                    <img src={tickIcon} alt={`${skill.title} icon`} className="icon" />
                    <div>
                      <h3>{skill.title}</h3>
                      <p>{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
