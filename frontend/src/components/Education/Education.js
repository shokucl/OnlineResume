import Body from "../Body/Body";
import { useTranslation } from "react-i18next";
import "./Education.css";

const EducationRecord = (props) => (
  <div className="education-record">
    <h3 className="education-institute accent-text">{props.instituteName}</h3>
    <div className="">{props.career}</div>
    <div className="">{props.period}</div>
  </div>
);

const Education = () => {
  const { t } = useTranslation();
  return (
    <Body
      title={t("mainContent.education.title")}
      content={
        <EducationRecord
          instituteName={t("mainContent.education.instituteName")}
          career={t("mainContent.education.career")}
          period={t("mainContent.education.period")}
        />
      }
    />
  );
};

export default Education;
