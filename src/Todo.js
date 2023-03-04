import React from 'react'
import styled from 'styled-components'
import "./Todo.css"
export default function Todo() {
  return (
    <div>
      <Bgimage></Bgimage>
    </div>
  )
}
const Bgimage =styled.div`
    height: 100%;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/images/under-construction-sign-typographic-design-vector-illustration-yellow-background-56644168.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.9;
`