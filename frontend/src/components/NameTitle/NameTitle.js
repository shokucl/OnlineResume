import "./NameTitle.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import ResumeEnglish from "../../assets/CV_SD_ENG.pdf";
import ResumeSpanish from "../../assets/CV_SD_ESP.pdf";

const NameTitle = ({ selectedLanguage }) => {
  const { t } = useTranslation();
  return (
    <Row 
      className="accent-background title-container custom-text"
      style={{ height: "max-content", flex: "0 0 auto", overflow: "hidden" }}>
      <Col className="col-12 col-md-6 mb-3 mb-md-0">
        <div className="full-name">
          Sergio Luis León Durán Velásquez
        </div>
        <div className="subtitle custom-text mt-2" style={{ lineHeight: "1.4" }}>
          Técnico Universitario en Mineria y Metalurgia <br/>
          Est. en Ingeniería en Mantenimiento Industrial
        </div>
      </Col>
      <Col className="d-flex justify-content-start justify-content-md-center align-items-center resume-download">
        <a
          href={selectedLanguage === "en" ? ResumeEnglish : ResumeSpanish}
          download={`Sergio_Duran_Resume_${selectedLanguage === "en" ? "English" : "Spanish"}.pdf`}
          className="d-flex align-items-center justify-content-center text-white text-decoration-none"
          style={{height:"40px", width:"max-content", padding:"0 16px", border:"1px solid white", borderRadius:"6px", gap:"8px", backgroundColor:"transparent", maxHeight:"40px"}}>
          <FaDownload size={20} />
          <span> {selectedLanguage === "en" ? t("Download Resume") : t("Descargar CV")} </span>
        </a>
      </Col>
    </Row>
  );
};

export default NameTitle;
