import { CHARACTERS } from "@/consts/characters";
import CharacterMainImage from "@/components/CharacterSlider/CharacterMainImage";
import CharacterDescription from "@/components/CharacterSlider/CharacterDescription";
import CharacterOptions from "@/components/CharacterSlider/CharacterOptions";

export default function CharacterSlider() {
  return (
    <>
      {CHARACTERS.map((character, i) => (
        <div className="item" key={i}>
          <div className="bg"></div>
          <CharacterMainImage
            className="-mr-10"
            slugImage={character.slug}
            index={i}
          />
          <CharacterDescription
            title={character.name}
            description={character.description}
            index={i}
          />
        </div>
      ))}

      <CharacterOptions />
    </>
  );
}
