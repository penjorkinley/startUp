
function Footer() {
  return (
    <div className="flex flex-wrap items-start justify-between p-4">
      <div className="social block">
        <div className="ml-2">
          <p className="font-bold text-2xl">Connect</p>
        </div>
        <div className="flex mt-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src="instagram-logo.png" alt="Instagram" className="w-8 h-8 mx-2" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="facebook-logo.png" alt="Facebook" className="w-8 h-8 mx-2" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="linkedin-logo.png" alt="LinkedIn" className="w-8 h-8 mx-2" />
          </a>
        </div>
      </div>
      <div className="important-links block">
        <p className="font-bold text-2xl mb-4">Important links</p>
        <ul>
          <li><a href="https://www.bhutanyouth.org/" target="_blank" rel="noopener noreferrer">Bhutan Youth Development Fund</a></li>
          <li><a href="https://www.unicef.org/" target="_blank" rel="noopener noreferrer">UNICEF</a></li>
          <li><a href="https://www.undp.org/" target="_blank" rel="noopener noreferrer">United Nations Development Programme</a></li>
          <li><a href="https://www.accelerateincube.com/" target="_blank" rel="noopener noreferrer">Accelerate Incube</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <p className="font-bold text-2xl mb-4">Contact Us</p>
        <p>Thimphu, Bhutan</p>
        <p>+975 17638831 / 02-328096</p>
        <p>Email: innovatebhutan@bhutanyouth.org</p>
        <p>www.innovatebhutan.org</p>
      </div>
      <div className="w-full mt-4">
        <p className="text-center">Copyright © Innovate Bhutan. 2023</p>
      </div>
    </div>
  );
}

export default Footer;
