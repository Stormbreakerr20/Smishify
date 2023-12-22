import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <Content>
        <CTA>
            <Sign>Welcome To Smishify</Sign>
            <Description>
            Smishify is a web app which helps user to enhance ones productivity to max level.
            </Description>
        </CTA>
        <BgImage></BgImage>
      </Content>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 0;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  padding-top:350px;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/PXL_20230304_094852946.MP.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.9;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;


  `;

const Sign = styled.button`
  background-color: #00559A;
  color: white;
  border: none;
  border-radius: 5px;
  width: 95%;
  height: 100px;
  margin: 30px 20px;
  font-size:30px ;
  letter-spacing: 1.5px;
  transition: all 1s;

  &:hover{
    background-color: #24A0ED ;
    color:black
  }
`

const Description = styled.div`
  font-size:30px;
  letter-spacing: 3px;
  color: black;
  font-weight: bolder;
  background-color: rgb(240, 248, 255,0.3);
  `