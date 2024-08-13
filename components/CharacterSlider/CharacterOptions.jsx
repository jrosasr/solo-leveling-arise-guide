import { CHARACTERS } from "../../consts/characters";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 5,
};
export default function CharacterSlider() {

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
    items[indexOption].classList?.add("active");
    
    // return () => {
    //   document.querySelector(".item.active")?.classList?.remove("active");
    //   items[0]?.classList.add("active");
    // };
  }, [indexOption])

  function handleOptionClick(index) {
    setindexOption(index);
  }

  return (
    // <ul className="thumb">
    //   {CHARACTERS.map((character, i) => (
    //     <li key={i}>
    //       <img src={`/miniatures/${character.slug}`} />
    //     </li>
    //   ))}
    // </ul>
    <div style={{ width: "600px", display: "block"}} >
      <Slider {...SETTINGS}>
      {CHARACTERS.map((character, i) => (
        <div className="" key={i} style={{ width: "100px", heigth: "100px" }}>
          <img className={i == indexOption ? "grayscale-0" : "grayscale-[50%]"} src={`/miniatures/${character.slug}`} alt={character.name} onClick={() => handleOptionClick(i)} />
        </div>
      ))}
    </Slider>
    </div>
  );
}
