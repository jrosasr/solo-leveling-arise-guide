export default function CharacterMain({ slugImage, index }) {
  return (
    <div className="img-box">
      <div className="img-slider">
        <div className="img-item" style={{ "--i": index }}>
          <img src={`/characters/${slugImage}`} />
        </div>
      </div>
    </div>
  );
}
