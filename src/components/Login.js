import React from "react";
import styled from "styled-components";
import Card from "./cards/Cards";

export default function Login() {
  return (
    <Container className="bg-[#F1ECE4]">
      <div className=" h-[100vh] py-10">
        <div className="flex flex-col md:flex-row h-[100vh]">
          <div className="flex left-div w-full h-[50vh] md:w-[55vw] md:h-full">
            <img
              src="/images/img4.svg"
              alt=""
              className="justify-center items-center scale-[1.25]"
            />
          </div>
          <div className="right-div w-full h-[30vh] md:w-[45vw] md:h-full text-black md:flex flex-col justify-center font-['Poppins'] gap-4">
            <div>
              <h1 className="text-[#00535E] text-[4rem] md:text-[5rem] uppercase">
                Smishify
              </h1>
              <h2 className=" px-4 md:text-end text-[1.2rem] md:text-[1.5rem]">
                ...where productivity meets simplicity
              </h2>
            </div>
            <div className="text-[1.4rem]">
              <h3>Efficiency redefined.</h3> Experience the magic of{" "}
              <span className="text-[#00535E] uppercase text-[3rem] md:text-[1.4rem] ">
                Smishify
              </span>{" "}
              today.
            </div>
            <button className="mt-4 md:mt-0">
              <a
                href="#_"
                class="relative px-5 py-2 font-medium text-white group"
              >
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#00535E] group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#62bac2] group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                <span class="relative">Sign-Up</span>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="md:h-[40vh] w-full flex flex-col gap-4 md:flex-row md:justify-around items-center my-10">
        <Card
          src="./images/obj3.svg"
          title="Effortless Organization"
          desc="Say goodbye to chaos and hello to clarity. Smishify helps you organize your tasks, projects, and deadlines with ease."
        ></Card>
        <Card
          src="./images/obj2.svg"
          title="Boost Your Efficiency"
          desc=" Get more done in less time. Our intuitive interface and powerful features are designed to help you work smarter, not harder."
        ></Card>
        <Card
          src="./images/obj1.svg"
          title="Stay on Track"
          desc="Never miss a deadline again. With Smishify's reminders and notifications, you'll always be one step ahead."
        ></Card>
      </div>
      <div className=" md:h-[80vh] flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col left-div-section-2 text-black w-full h-[50vh] md:w-[50vw] md:h-full my-8">
          <h1 className="text-[#00535E] text-[1rem] md:text-[2rem] font-['Poppins']">
            Features That Make a Difference:
          </h1>
          <ul className="font-['roboto'] text-[0.75rem] md:text-[1.1rem] flex flex-col items-center gap-4 pl-8 mt-2">
            <li>
              ⚫ Note-Making App: Capture your thoughts instantly with our
              intuitive note-making app. Effortlessly jot down ideas, create
              to-do lists, and stay organized on the go.
            </li>
            <li>
              ⚫ News-Section: Stay informed with our curated news section. Get
              access to the latest headlines and updates on a variety of topics,
              keeping you up-to-date and informed throughout the day.
            </li>
            <li>
              ⚫ Text Editor: Our versatile text editor is your go-to tool for
              writing and editing documents with ease. From drafting emails to
              composing essays, it provides essential features for effective
              communication.
            </li>
            <li>
              ⚫ Weather App: Plan your activities confidently with our
              integrated weather app. Stay ahead of the forecast, receive
              real-time updates, and ensure you're prepared for whatever the
              weather brings.
            </li>
          </ul>
        </div>
        <div className="flex right-div-section-2 md:w-[50vw] md:h-full ">
          <img
            src="/images/img1.svg"
            alt=""
            className="justify-center items-center scale-[1.25] hidden md:block"
          />
        </div>
      </div>
      <div className="text-white text-[1rem] bg-black text-center mt-8 py-6">Made with ❤️ by Team Bit-By-Bit</div>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Description = styled.div`
  font-size: 30px;
  letter-spacing: 3px;
  color: black;
  font-weight: bolder;
  background-color: rgb(240, 248, 255, 0.3);
`;
const Sign = styled.div`
  font-size: 30px;
  letter-spacing: 3px;
  color: black;
  font-weight: bolder;
  background-color: rgb(240, 248, 255, 0.3);
`;
