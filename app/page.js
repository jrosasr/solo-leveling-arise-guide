"use client";
// import CharacterSlider from "@/components/CharacterSlider/index.jsx";
import { CHARACTERS } from "@/consts/characters";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import CharacterMainImage from "@/components/CharacterSlider/CharacterMainImage";
import CharacterDescription from "@/components/CharacterSlider/CharacterDescription";

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 5,
};
export default function Home() {
  const [indexOption, setindexOption] = useState(0);

  useEffect(() => {
    const infoSlider = document.querySelectorAll(".info-slider");
    const imgSlider = document.querySelectorAll(".img-slider");
    const items = document.querySelectorAll(".item");

    imgSlider.forEach((slide) => {
      slide.style.transform = `translateX(${indexOption * -100}%)`;
    });

    infoSlider.forEach((slide) => {
      slide.style.transform = `translateY(${indexOption * -100}%)`;
    });

    document.querySelector(".item.active")?.classList.remove("active");
    items[indexOption]?.classList?.add("active");

    // return () => {
    //   document.querySelector(".item.active")?.classList?.remove("active");
    //   items[0]?.classList.add("active");
    // };
  }, [indexOption]);

  function handleOptionClick(index) {
    setindexOption(index);
  }

  return (
    <main className="min-h-screen max-w-7xl mx-auto p-24 bg-gray-900 relative">
      <section className="flex min-h-screen flex-col items-center justify-between">
        {CHARACTERS.map((character, i) => (
          <div className="item" key={i}>
            <div className="bg"></div>
            <CharacterMainImage className="-mr-10" slugImage={character.slug} index={i} />
            <CharacterDescription
              title={character.name}
              description={character.description}
              index={i}
            />
          </div>
        ))}

        <div style={{ width: "600px", display: "block" }}>
          <Slider {...SETTINGS}>
            {CHARACTERS.map((character, i) => (
              <div
                className=""
                key={i}
                style={{ width: "100px", heigth: "100px" }}
              >
                <img
                  className={
                    i == indexOption ? "grayscale-0" : "grayscale-[50%]"
                  }
                  src={`/miniatures/${character.slug}`}
                  alt={character.name}
                  onClick={() => handleOptionClick(i)}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
}
