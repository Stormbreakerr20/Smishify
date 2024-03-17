import React from "react";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <div className=" h-[100vh] py-10">
        <div className="flex flex-col items-center justify-between h-[100%] mx-10">
            <Sign className="mt-12 text-black font-bold text-3xl p-3 rounded-md">Welcome To Smishify</Sign>
            <Description className= "rounded-md">
            Smishify is a web app which helps user to enhance ones productivity to max level.
            </Description>
        </div>
        <BgImage></BgImage>
      </div>
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


const Description = styled.div`
  font-size:30px;
  letter-spacing: 3px;
  color: black;
  font-weight: bolder;
  background-color: rgb(240, 248, 255,0.3);
  `
const Sign = styled.div`
  font-size:30px;
  letter-spacing: 3px;
  color: black;
  font-weight: bolder;
  background-color: rgb(240, 248, 255,0.3);
  `