export default function CharacterMain({ slugImage, index }) {
  return (
    // 
    <div className="right-[-5%] md:right-40 img-box">
      <div className="img-slider">
        <div className="img-item" style={{ "--i": index }}>
          <img src={`/characters/${slugImage}`} className="ml-[50%] md:ml-[30%]" />
        </div>
      </div>
    </div>
  );
}
