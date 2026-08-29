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
      style={{ height: "max-content", maxHeight: "160px", flex: "0 0 auto", overflow: "hidden" }}>
      <Col className="col-12 col-md-6 mb-3 mb-md-0">
        <div className="full-name" style={{fontSize: "1.9rem", fontWeight:"bold" }}>
          Sergio Luis León Durán Velásquez
        </div>
        <div className="subtitle custom-text mt-2" style={{ lineHeight: "1.4" }}>
          Técnico Universitario en Mineria y Metalurgia <br/>
          Est. en Ingeniería en Mantenimiento Industrial
        </div>
      </Col>
      <Col className="d-flex justify-content-end align-items-center resume-download">
        <a
          href={selectedLanguage === "en" ? ResumeEnglish : ResumeSpanish}
          download={`Sergio_Duran_Resume_${selectedLanguage === "en" ? "English" : "Spanish"}.pdf`}
        >
          <FaDownload size={28} />
        </a>
      </Col>
    </Row>
  );
};

export default NameTitle;
