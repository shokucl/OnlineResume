import "./Sidebar.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaMap, FaLinkedin, FaLaptopCode, FaUser, FaUniversity, FaCode } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
const Sidebar = ({ isOpen = true, onClose }) => {
  const { t } = useTranslation();
  const rawLanguages = t("mainContent.languages", { returnObjects: true });
  const languages = Array.isArray(rawLanguages) ? rawLanguages : [];
  const rawTechnologies = t("mainContent.technologies", { returnObjects: true });
  const technologies = Array.isArray(rawTechnologies) ? rawTechnologies : [];
  const handleNavClick = () => {
    if (onClose && window.innerWidth <= 768) {
      onClose();
    }
  };
  const navLinkClassName = ({ isActive }) => (isActive ? "activeClicked" : "");
  return (
    <div className={`sidebar-background sidebar ${isOpen ? "open" : "closed"}`}>
      <ul className="sidebar-contact">
        <li>
          <a href="tel:+56986030209">
            <FaPhoneAlt className="me-2" />
            <span>+569 8603 0209</span>
          </a>
        </li>
        <li>
          <a href="mailto:sergioluisleon.d.v@gmail.com">
            <IoMdMail className="me-2" />
            <span>sergioluisleon.d.v@gmail.com</span>
          </a>
        </li>
        <li>
          <FaMap className="me-2" />
          <span>Ñuñoa, Región Metropolitana.</span>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sergioduranv/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="me-2" />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="sidebar-nav">
        <li>
          <NavLink
            end
            to="/OnlineResume/"
            className={navLinkClassName}
            onClick={handleNavClick}
          >
            <FaUser className="me-2" />
            <span>{t("sidebar.aboutMe")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/OnlineResume/job_experience"
            className={navLinkClassName}
            onClick={handleNavClick}
          >
            <FaLaptopCode className="me-2" />
            <span>{t("sidebar.jobExperience")}</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            end
            to="/OnlineResume/education"
            className={navLinkClassName}
            onClick={handleNavClick}
          >
            <FaUniversity className="me-2" />
            <span>{t("sidebar.education")}</span>
          </NavLink>
        </li>
      </ul>
      {isOpen && (
        <>
          <div className="sidebar-section-header accent-background custom-text">
            <FaCode className="me-2" />
            <span>{t("sidebar.technologies")}</span>
          </div>
          <ul className="sidebar-list">
            {technologies.map((tech, index) => (
              <li key={`${tech}-${index}`}>{tech}</li>
            ))}
          </ul>
          <div className="sidebar-section-header accent-background custom-text">
            <MdLanguage className="me-2" />
            <span>{t("sidebar.languages")}</span>
          </div>
          <ul className="sidebar-list">
            {languages.map((language, index) => (
              <li key={`${language}-${index}`}>{language}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
export default Sidebar;