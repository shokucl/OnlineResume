import "./Body.css";

const Body = (props) => {
  return (
    <>
      <div className="mb-5 h2 accent-text font-weight-bold text-decoration-underline">
        {props.title}
      </div>
      <div className="body-content">{props.content}</div>
    </>
  );
};

export default Body;
