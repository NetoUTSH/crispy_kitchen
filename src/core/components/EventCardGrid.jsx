import { EventCard } from "./EventCard";
import "./EventCardGrid.css";
const cards = [
  {
    image:
      "https://www.tooplate.com/templates/2129_crispy_kitchen/images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg",
    title: "Healthy Lifestyle and happy living tips",
    tag: { label: "Featured", color: "bg-danger text-white" },
    cols: "col-md-6",
  },
  {
    image:
      "https://www.tooplate.com/templates/2129_crispy_kitchen/images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg",
    title: "How to make a healthy meal",
    tag: { label: "Featured", color: "bg-danger text-white" },
    cols: "col-md-6",
  },
  {
    image:
      "https://www.tooplate.com/templates/2129_crispy_kitchen/images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg",
    title: "Is Coconut good for you?",
    tag: { label: "Nutrition", color: "bg-info text-white" },
    date: "8 April 2022",
    cols: "col-md-4",
  },
  {
    image:
      "https://www.tooplate.com/templates/2129_crispy_kitchen/images/news/caroline-attwood-bpPTlXWTOvg-unsplash.jpg",
    title: "Salmon Steak Noodle",
    cols: "col-md-4",
  },
  {
    image:
      "https://www.tooplate.com/templates/2129_crispy_kitchen/images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg",
    title: "Making a healthy salad",
    tag: { label: "Health", color: "bg-info text-white" },
    date: "30 April 2022",
    cols: "col-md-4",
  },
];

export const EventCardGrid = () => {
  return (
    <div id="rowid">
      <h1 className="mb-3 news&" id="news&events">
        Noticias y Eventos
      </h1>
      <div className="row">
        {cards.map((card, index) => (
          <EventCard key={index} {...card} />
        ))}
      </div>
          
    </div>
  );
};
