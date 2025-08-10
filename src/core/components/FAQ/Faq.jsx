import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faq.css"; // Puedes agregar estilos adicionales aquí

const faqs = [
  {
    question: "¿Cuáles son sus horarios de atención?",
    answer:
      "Abrimos de lunes a sábado, de 9:00 a 22:00. También atendemos pedidos a domicilio durante ese horario.",
  },
  {
    question: "¿Ofrecen servicio a domicilio?",
    answer:
      "Sí, realizamos entregas a domicilio a través de apps como Uber Eats, Rappi, Didi Food o directamente desde nuestra página web.",
  },
  {
    question: "¿Se puede hacer un pedido por teléfono o WhatsApp?",
    answer:
      "Claro, puedes contactarnos al 7711867720 para hacer tu pedido o resolver cualquier duda.",
  },
  {
    question: "¿Cuentan con opciones vegetarianas o veganas?",
    answer:
      "Sí, tenemos platillos especialmente diseñados para vegetarianos y veganos. Pregunta por nuestras opciones libres de carne o productos animales.",
  },
  {
    question: "¿Ofrecen menús para niños?",
    answer:
      "Sí, contamos con un menú infantil con porciones adecuadas y platillos pensados para los más pequeños.",
  },
  {
    question: "¿Tienen opciones sin gluten o para personas con alergias alimentarias?",
    answer:
      "Algunos de nuestros platillos pueden ser preparados sin gluten o sin ciertos alérgenos. Por favor, avísanos al hacer tu pedido para tomar precauciones.",
  },
  {
    question: "¿Aceptan pagos con tarjeta?",
    answer:
      "Sí, aceptamos pagos con tarjetas de crédito, débito y pagos digitales como Apple Pay, MercadoPago, etc.",
  },
  {
    question: "¿Necesito reservar con anticipación?",
    answer:
      "No es obligatorio, pero recomendamos hacer reservación si planeas visitarnos en horas pico o fines de semana. Puedes reservar en línea o por teléfono.",
  },
  {
    question: "¿Puedo celebrar mi cumpleaños o evento en Crispy Kitchen?",
    answer:
      "¡Claro que sí! Contamos con espacio para eventos. Contáctanos para más información sobre paquetes y disponibilidad.",
  },
];

export const Faq = () => {
  return (
    <div className="contenedor py-5 bg">
      <div className="row align-items-start">
        {/* Imagen - 6 columnas */}
        <div className="col-md-6 mb-4 mb-md-0 faq-image">
          <img
            src="https://media.istockphoto.com/id/1369561386/photo/having-a-great-lunch-and-time-with-you.jpg?s=612x612&w=0&k=20&c=2Gj9ChgYNzp3CK1zxRqJunu4oQHN8YkoOMBZyV6uXNw=" // Reemplaza con la ruta correcta
            alt="Crispy Kitchen"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Preguntas - 6 columnas */}
        <div className="col-md-6">
          <h3 className="mb-4 text-light ">Preguntas Frecuentes</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-2">
              <div className="faq-question   rounded shadow-lg">
                <strong>{faq.question}</strong>
                <div className="faq-answer mt-1 text-muted">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
