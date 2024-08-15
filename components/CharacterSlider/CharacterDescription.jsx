export default function CharacterDescription({ title, description, index }) {
  return (
    <div className="info-box w-12">
      <div className="info-slider w-3/4 md:w-full h-auto">
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
