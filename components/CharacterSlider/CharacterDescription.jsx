export default function CharacterDescription({ title, description, index }) {
  return (
    <div className="info-box">
      <div className="w-3/4 md:w-6/12 h-auto info-slider">
        <div className="info-item" style={{ "--i": index }}>
          <h2>{title}</h2>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
