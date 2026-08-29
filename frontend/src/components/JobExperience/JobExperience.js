import "./JobExperience.css";
import { useTranslation } from "react-i18next";
import Body from "../Body/Body";

const JobRecord = (props) => (
  <div className="job-record">
    <h3 className="job-role accent-text">{props.role}</h3>
    <h5>{props.companyName}</h5>
    <div className="">{props.period}</div>
    <ul>
      {props.descriptions.map((description) => (
        <li className="job-description">{description}</li>
      ))}
    </ul>
  </div>
);

const JobExperience = () => {
  const { t } = useTranslation();
  const jobRecords = t("mainContent.jobExperience.content", {
    returnObjects: true,
  });
  return (
    <Body
      title={t("mainContent.jobExperience.title")}
      content={jobRecords.map((record) => (
        <JobRecord
          role={record.role}
          companyName={record.companyName}
          period={record.period}
          descriptions={record.descriptions}
        />
      ))}
    />
  );
};

export default JobExperience;
