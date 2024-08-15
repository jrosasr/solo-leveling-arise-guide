export default function CharacterDescription({ title, description, index }) {
  return (
    <div className="info-box">
      <div className="info-slider w-3/4 md:w-6/12 h-auto">
        <div className="info-item" style={{ "--i": index }}>
          <h2>{title}</h2>
          <p className="">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
