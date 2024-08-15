"use client";
import { CHARACTERS } from "@/consts/characters";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import CharacterMainImage from "@/components/CharacterSlider/CharacterMainImage";
import CharacterDescription from "@/components/CharacterSlider/CharacterDescription";

export default function CharacterSlider() {
  const [indexOption, setindexOption] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  });

  useEffect(() => {
    setIsSmallScreen(window.innerWidth <= 720);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
      });
    } else {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 5,
      });
    }

    return () => {};
  }, [isSmallScreen]);

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

      <div style={{ width: `${isSmallScreen ? "300px" : "600px"}`, display: "block" }}>
        <Slider {...settings}>
          {CHARACTERS.map((character, i) => (
            <div
              className=""
              key={i}
              style={{ width: "100px", heigth: "100px" }}
            >
              <img
                className={i == indexOption ? "grayscale-0" : "grayscale-[50%]"}
                src={`/miniatures/${character.slug}`}
                alt={character.name}
                onClick={() => handleOptionClick(i)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
