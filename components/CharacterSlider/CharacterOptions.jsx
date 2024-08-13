import { CHARACTERS } from "../../consts/characters";

export default function CharacterSlider() {
  return (
    <ul className="thumb">
      {CHARACTERS.map((character, i) => (
        <li key={i}>
          <img src={`/miniatures/${character.slug}`} />
        </li>
      ))}
    </ul>
  );
}
