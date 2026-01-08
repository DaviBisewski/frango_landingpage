import "./Footer.css";

import phoneIcon from "../../../icons/telefoneamarelo.png";
import instagramIcon from "../../../icons/instagram.png";
import facebookIcon from "../../../icons/facebook.png";
import githubIcon from "../../../icons/link.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <span className="footer-address">
            Rua Santa Catarina, 683 - Floresta - 89211-300 - Joinville - SC
          </span>

          <div className="footer-info">
            <span className="footer-phone">
              <img src={phoneIcon} alt="Telefone" />
              (47) 93426-1024
            </span>

            <div className="footer-social">
              <span>Redes Sociais:</span>
              <a href="https://www.instagram.com/lacasadifrangojoinville/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/lacasadifrangofloresta/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <a
          href="https://github.com/DaviBisewski"
          target="_blank"
          className="footer-credit"
        >
          <img src={githubIcon} alt="GitHub" />
          <span>
            Site desenvolvido por <strong>Davi Bisewski</strong>
          </span>
        </a>
      </div>
    </footer>
  );
}
