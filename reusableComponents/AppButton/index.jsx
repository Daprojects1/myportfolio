const AppButton = ({ className, type, title, onClick }) => {
  return (
    <button className={`appButton ${className}`} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default AppButton;
