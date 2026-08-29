import "./Sidebar.css";
import { useTranslation } from "react-i18next";
//import MainPicture from "../../assets/ignaciofigueroa.jpg";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMap } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

const Sidebar = ({ isOpen = true, onClose }) => {
  const { t } = useTranslation();
  const languages = t("mainContent.languages", { returnObjects: true });

  const handleNavClick = () => {
    // Close sidebar on mobile when a nav item is clicked
    if (onClose && window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <div
      className={`sidebar-background sidebar ${isOpen ? "open" : "closed"}`}
    >
      <div className="sidebar-header">
        {isOpen && (
          <img
            //className="main-picture m-auto"
            //src={MainPicture}
            //alt="José Ignacio Figueroa"
          />
        )}
      </div>
      <ul className="sidebar-menu">
        {/* Menu items. In a real app, you might map over data */}
        <li className="sidebar-item">
          <a className="text-decoration-none" href="tel:+56986030209">
            <FaPhoneAlt className="me-2" />
            <span>+569 8603 0209</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="mailto:sergioluisleon.d.v@gmail.com">
            <IoMdMail className="me-2" />
            <span>sergioluisleon.d.v@gmail.com</span>
          </a>
        </li>
        <li className="sidebar-item">
          <FaMap className="me-2" />
          <span>Ñuñoa, Región Metropolitana.</span>
        </li>
        <li className="sidebar-item">
          <a
            href="https://www.linkedin.com/in/sergioduranv/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="me-2" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className="sidebar-item">
          <NavLink
            exact
            to="/OnlineResume/"
            activeClassName="activeClicked"
            onClick={handleNavClick}
          >
            <FaUser className="me-2" />
            <span>{t("sidebar.aboutMe")}</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            exact
            to="/OnlineResume/job_experience"
            activeClassName="activeClicked"
            onClick={handleNavClick}
          >
            <FaLaptopCode className="me-2" />
            <span>{t("sidebar.jobExperience")}</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink
            exact
            to="/OnlineResume/education"
            activeClassName="activeClicked"
            onClick={handleNavClick}
          >
            <FaUniversity className="me-2" />
            <span>{t("sidebar.education")}</span>
          </NavLink>
        </li>
      </ul>
      {isOpen && (
        <>
          <div className="p-2 bold mb-2 accent-background custom-text">
            <FaCode className="me-2" /> {t("sidebar.technologies")}
          </div>
          <ul>
            <li>Python</li>
            {/*<li>Streamlit</li>*/}
            <li>AutoCAD</li>
            <li>Civil 3D</li>
            <li>MS Project</li>
            <li>Microsoft Office</li>
            <li>Oracle NetSuite</li>
            {/*<li>Django</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>React</li>
            <li>Docker</li>
            <li>Git</li>
            <li>AWS</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>TypeScript</li>
            <li>Jira</li>
            <li>Slack</li>
            <li>Linux/Windows/MacOS</li>*/}
          </ul>
          <div className="p-2 bold mb-2 accent-background custom-text">
            <MdLanguage className="me-2" />
            {t("sidebar.languages")}
          </div>
          <ul>
            {languages.map((language) => (
              <li>{language}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
