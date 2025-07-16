
import { Navbar } from "../../../components/navbar/Navbar";
import { Footer } from "../../../components/footer/Footer";
import { Carousel_component } from "../../../components/carrusel/Carrusel.jsx";
import { EventCardGrid } from "../../../components/EventCardGrid.jsx";
import { Img_statica } from "../../../components/img_statica/img_statica.jsx";
import {Card} from '../../../components/card/CardComponet.jsx'
export const ViewLandindPageComponent = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="mb-5">.</div>
    <Carousel_component />
    <Card/>
    <Img_statica />
    <EventCardGrid/>
     
    
      
       
      
      
      
      
      
      
      
      
      <Footer></Footer>
    </>
  );
};
