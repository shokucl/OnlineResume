import "./NameTitle.css";
import { Row, Col } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";
import ResumeEnglish from "../../assets/CV_SD_ENG.pdf";
import ResumeSpanish from "../../assets/CV_SD_ESP.pdf";
const NameTitle = ({ selectedLanguage }) => {
  const isEnglish = selectedLanguage === "en";
  return (
    <Row
      className="mx-0 accent-background title-container custom-text align-items-center"
      style={{ height: "max-content", flex: "0 0 auto", overflow: "hidden" }}
    >
      <Col className="col-12 col-md-8 mb-3 mb-md-0 px-0">
        <div className="full-name">
          Sergio Luis León Durán Velásquez
        </div>
        <div className="subtitle custom-text mt-2" style={{ lineHeight: "1.45" }}>
          {isEnglish ? (
            <>
              University Technician in Mining and Metallurgy <br />
              Industrial Maintenance Engineering Student
            </>
          ) : (
            <>
              Técnico Universitario en Minería y Metalurgia <br />
              Estudiante de Ingeniería en Mantenimiento Industrial
            </>
          )}
        </div>
      </Col>
      <Col className="col-12 col-md-4 px-0 d-flex justify-content-start justify-content-md-end align-items-center resume-download">
        <a
          href={isEnglish ? ResumeEnglish : ResumeSpanish}
          download={isEnglish ? "Sergio_León_CV_ENG.pdf" : "Sergio_León_CV_ESP.pdf"}
          className="d-flex align-items-center justify-content-center text-decoration-none"
          style={{ height: "40px", width: "max-content", padding: "0 16px", border: "1px solid var(--custom-text)", borderRadius: "6px", gap: "8px", backgroundColor: "transparent", color: "var(--custom-text)" }}
        >
          <FaDownload size={16} />
          <span>{isEnglish ? "Download Resume" : "Descargar CV"}</span>
        </a>
      </Col>
    </Row>
  );
};
export default NameTitle;