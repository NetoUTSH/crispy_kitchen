import React from 'react'
import { InlineWidget } from 'react-calendly'
import './FormComponentStyle.css'

export const FormComponent = () => {
  return (
    <InlineWidget  styles={{ width: "1200px", height: "700px" }} url='https://calendly.com/2022260-utsh/30min'/>  
  )
}
