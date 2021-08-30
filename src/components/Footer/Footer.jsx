import "./style.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LogoFooter from "../../assets/logo-footer.png"
import { Face } from "@material-ui/icons";

const Footer = () => {
  return(
  <>
    <footer className="footer">
      <div className="logo-footer">        
          <img src={LogoFooter} alt="logotipo insole" />
      </div>

      <div className="developer">
            <div className="developer-social__media">
              <a href="https://www.linkedin.com/in/allanaevellyn/" target="_blank"><LinkedInIcon className="icon-footer" fontSize="large" /></a>
              <a href="https://github.com/allanina" target="_blank"><GitHubIcon className="icon-footer" fontSize="large" /></a>
              <a href="https://www.instagram.com/allanina__/" target="_blank"><InstagramIcon className="icon-footer" fontSize="large" /></a>
            </div>
          <p>Desenvolvido por Allana Evellyn</p>
      </div>

      <div className="social-media">
          <a href="https://www.linkedin.com/company/insole-energia/" target="_blank"><LinkedInIcon className="icon-footer" fontSize="large" /></a>
      </div>
    </footer>
  </>
  )
}

export default Footer