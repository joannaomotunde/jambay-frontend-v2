const Toggle = ({ checked, onChange }) => {
  return (
    <div
      className={`toggle ${checked ? "active" : ""}`}
      onClick={() => onChange(!checked)}
    >
      <div className="knob" />
    </div>
  );
};

export default Toggle;