export default function CharacterMain({ slugImage, index }) {
  return (
    // 
    <div className="right-[-5%] md:right-[0%] w-[800px] h-[700px] img-box">
      <div className="img-slider">
        <div className="img-item" style={{ "--i": index }}>
          <img width={500} height={450} src={`/characters/${slugImage}`} className="ml-[50%] md:ml-[30%]" />
        </div>
      </div>
    </div>
  );
}
