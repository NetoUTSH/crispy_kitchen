import React from 'react'
import { Navbar } from '../../../components/navbar/Navbar'
import { Footer} from '../../../components/footer/Footer'
import { Carousel_component } from "../../../components/carrusel/Carrusel.jsx"
import { Img_statica } from "../../../components/img_statica/img_statica.jsx"

export const ViewLandindPageComponent = () => {
  return (
<>
    <Navbar></Navbar>
    <Footer></Footer>
    <Carousel_component />
    <Img_statica />
    </>
  )
}
