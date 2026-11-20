import "./Body.css";

const Body = (props) => {
  return (
    <>
      <div className="body-section-title accent-text">
        {props.title}
      </div>
      <div className="body-content">{props.content}</div>
    </>
  );
};

export default Body;
