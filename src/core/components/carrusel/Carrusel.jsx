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
    { image: "./comi1.avif", alt: "Slide 1" },
    { image: "./comi2.webp", alt: "Slide 2" },
    { image: "./comi3.png", alt: "Slide 3" },
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