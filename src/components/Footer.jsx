import '../App.css'; 

const Footer = () => {
  return (
    <div className='mt-52'>
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-link last">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#project">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Ameen. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
