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
    { image: "https://media.discordapp.net/attachments/1120503923942371369/1395181107703713804/comida1.jpg?ex=68968429&is=689532a9&hm=f912a774ece66c0d383df8657c3ce9475b0f335083ad7f7b8368b17ffda60b9f&=&format=webp&width=1215&height=810", alt: "Slide 1" },
    { image: "https://media.discordapp.net/attachments/1120503923942371369/1395181107976208384/comida2.jpg?ex=68968429&is=689532a9&hm=866e8601196f5eb03148ce4edae2c45b78f7feb9aa91c253e6e70033793abfc1&=&format=webp&width=1215&height=810", alt: "Slide 2" },
    { image: "https://media.discordapp.net/attachments/1120503923942371369/1395181108315820062/comida3.jpg?ex=68968429&is=689532a9&hm=aa3a2e193e73116c15c2a4679f05668859c2741431b81da378f64dc17c6cc840&=&format=webp&width=1215&height=810", alt: "Slide 3" },
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