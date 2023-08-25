const Box = (props) => {
  const { className, text } = props;
  const classContainer = className;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="small-box" text="Small" />
      <Box className="medium-box" text="medium" />
      <Box className="large-box" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
