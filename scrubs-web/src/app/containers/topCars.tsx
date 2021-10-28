import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../typings/car";
import { Car } from "../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const TopCarsContainer = styled.div`
  ${tw`
  max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
`}
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;
const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;
const EmptyCars = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

export function TopCars() {
  const [current, setCurrent] = useState(0);
  const testCar1: ICar = {
    name: "Audi Car",
    mileage: "10k",
    thumbnailSrc:
      "https://www.freepnglogos.com/uploads/car-png/car-png-large-images-40.png",
    gearType: "Auto",
    dailyPrice: 50,
    monthlyPrice: 100,
    gas: "petrol",
  };
  const testCar3: ICar = {
    name: "Audi Car",
    mileage: "10k",
    thumbnailSrc:
      "https://www.freepnglogos.com/uploads/car-png/car-png-large-images-40.png",
    gearType: "Auto",
    dailyPrice: 50,
    monthlyPrice: 100,
    gas: "petrol",
  };
  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Reviews</Title>
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={[
            <Car {...testCar1} />,
            <Car {...testCar2} />,
            <Car {...testCar3} />,
            <Car {...testCar2} />,
            <Car {...testCar1} />,
            <Car {...testCar1} />,
          ]}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                "clickToChange",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={3} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
