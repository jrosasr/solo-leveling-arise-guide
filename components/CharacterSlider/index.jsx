'use client';

import CharacterOptions from "@/components/CharacterSlider/CharacterOptions";
import { CHARACTERS } from "@/consts/characters";
import { useEffect } from "react";
import CharacterMainImage from "./CharacterMainImage";
import CharacterDescription from "./CharacterDescription";

export default function CharacterSlider() {
  useEffect(() => {
    // const thumbs = document.querySelectorAll(".thumb li");
    // const infoSlider = document.querySelectorAll(".info-slider");
    // const imgSlider = document.querySelectorAll(".img-slider");
    // const items = document.querySelectorAll(".item");

    // thumbs.forEach((thumb, ind) => {
    //   thumb.addEventListener("click", () => {
    //     document
    //       .querySelector(".thumb .selected")
    //       ?.classList?.remove("selected");
    //     thumb.classList.add("selected");

    //     const index = ind;

    //     infoSlider.forEach((slide) => {
    //       slide.style.transform = `translateY(${index * -100}%)`;
    //     });

    //     imgSlider.forEach((slide) => {
    //       slide.style.transform = `translateX(${index * -100}%)`;
    //     });

    //     document.querySelector(".item.active").classList.remove("active");
    //     items[index].classList.add("active");
    //   });
    // });

    // return () => {
    //   document.querySelector(".item.active")?.classList?.remove("active");
    //   items[0]?.classList.add("active");

    //   document.querySelector(".thumb .selected")?.classList?.remove("selected");
    //   thumbs[0]?.classList.add("selected");
    // };
  }, []);

  return (
    <div className="bg-[#221426] w-[130vw] md:w-[100vw] h-[130vh] md:h-[100vh]">
      {CHARACTERS.map((character, i) => (
        <div className="item" key={i}>
          <div className="bg"></div>
          <CharacterMainImage slugImage={character.slug} index={i} />
          <CharacterDescription title={character.name} description={character.description} index={i} />
        </div>
      ))}

      <div className="flex justify-center mt-full w-full">
        <CharacterOptions />
      </div>
    </div>
  );
}
