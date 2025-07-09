import React from 'react'
import { InlineWidget } from 'react-calendly'
import '../css/FormComponentStyle.css'
import { WpButtonComponent } from '../../core/components/WpButtonComponent/WpButtonComponent'

export const FormComponent = () => {
  return (

    <>

    <InlineWidget  styles={{ Width: "1200px", height: "700px" }} url='https://calendly.com/2022260-utsh/30min'/>  
    <WpButtonComponent/>

     
    </>
  )
}
