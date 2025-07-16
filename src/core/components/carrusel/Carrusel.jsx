import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Carrusel.css";

export const Carousel_component = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % slides.length;
    setSelectedIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (selectedIndex - 1 + slides.length) % slides.length;
    setSelectedIndex(newIndex);
  };

  const slides = [
    { image: "https://cdn.discordapp.com/attachments/1120503923942371369/1395181107703713804/comida1.jpg?ex=68798329&is=687831a9&hm=48021262f0b29eeac7917ab1509014445aaf9fb96d95bdaae8ac02f502dea104&", alt: "Slide 1" },
    { image: "https://cdn.discordapp.com/attachments/1120503923942371369/1395181107976208384/comida2.jpg?ex=68798329&is=687831a9&hm=6e0c44f81e36fe0991b91bc84a5291b76cdfa60eabee0ec26616f9b2575e03bd&", alt: "Slide 2" },
    { image: "https://cdn.discordapp.com/attachments/1120503923942371369/1395181108315820062/comida3.jpg?ex=68798329&is=687831a9&hm=300e19b936078f61c7415cad127d58260cb3af6c719605244747cbb7a4e54f56&", alt: "Slide 3" },
  ];

 return (
    <div className="contenedor-principal ">
      <div className="contenedor-texto">
        <h1>Delicious Steaks</h1>
        <p className="rating">
          <strong>4.4/5</strong> ⭐⭐⭐⭐<br />
          From <strong>1,206+</strong> Customer Reviews
        </p>
      </div>

      <div className="contenedor-carrusel">
        <Carousel
          selectedItem={selectedIndex}
          showArrows={false}
          autoPlay={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          onChange={(index) => setSelectedIndex(index)}
        >
          {slides.map((slide, i) => (
            <div key={i} className="slide-derecha">
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </Carousel>

        <div className="botones">
          <button onClick={handlePrev} className="boton-anterior">
            <i className="bi bi-arrow-up-left"></i>
          </button>
          <button onClick={handleNext} className="boton-siguiente">
            <i className="bi bi-arrow-up-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};