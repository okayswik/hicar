import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";
import JeepImg from "../../../images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`

  w-full
  flex
  flex-wrap
  items-center
  justify-center
  pt-4
pb-4
pr-7
pl-7
md: pl-0
md: pr-0
bg-white
`}
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`

md:w-1/2
flex
flex-col
md: ml-6
2xl:ml-16


`}
`;

const Title = styled.div`
  ${tw`

  text-black
  text-2xl
  md:text-5xl
font-extrabold
md:font-black
md: leading-normal
`}
`;

const InfoText = styled.p`
  ${tw`
md:max-w-2xl
text-sm
md: text-base
text-gray-500
mt-4
font-normal
`}
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Us. </Title>
        <InfoText>
          Hey how's it going mate. Lorem ipsum... Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
          was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.{" "}
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}
