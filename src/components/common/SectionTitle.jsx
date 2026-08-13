const SectionTitle = ({ hi, sub }) => {
  return (
    <div className="section-head">
      <h2 className="section-title">{hi}</h2>

      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
};

export default SectionTitle;