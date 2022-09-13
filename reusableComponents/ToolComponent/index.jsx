const ToolComponent = ({ icon, title }) => {
  return (
    <div className="tool-component">
      <div className="tool-icon">{icon}</div>
      <div className="tool-title">{title}</div>
    </div>
  );
};

export default ToolComponent;
