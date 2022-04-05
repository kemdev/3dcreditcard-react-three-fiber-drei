import React, { useState, useEffect, useRef } from "react";
// import { useLoader } from "@react-three/fiber";
import "./scene.css";
// import * as THREE from "three";
import data from "../data/data.json";
import { Glitch, EffectComposer } from "@react-three/postprocessing";

import { folder, useControls, Leva } from "leva";

// Componenets
import PrimaryButtons from "./primaryButtons";
import Header from "./header";

import FullCard from "./fullCard";
// import GetCardNumber from "./getCardNumber";

// THREEjs Frameworks
import {
  OrbitControls,
  useProgress,
  Html,
  FirstPersonControls,
} from "@react-three/drei";

import Buttons from "./buttons";
import Card from "./card";
import Canvas from "./canvas";
function Loader() {
  const { progress } = useProgress();
  return (
    <div
      style={{ fontSize: "4em", color: "hotpink", fontWeight: "bolder" }}
      className="textShadow"
    >
      <Canvas>
        {progress} % loaded
        <EffectComposer>
          <Glitch />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default function Scene() {
  const mesh = useRef();

  const [customCard, setCustomCardData] = useState("");
  const [cardDetails, setCardDetails] = useState({});
  // const [show, setShow] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [index, setIndex] = useState();
  // set the random card number
  const [cardInformation, setCardInformation] = useState({});

  const [edit, setEdit] = useState(true);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  useEffect(() => {
    setCardInformation(data);
    setIndex(randomNumber(0, 100));
    console.log("Use Effect worked");
  }, [isRandom === "yes"]);

  console.log("Index", index);
  const customCardHandler = (para) => {
    setCustomCardData(para);
  };

  const handleSubmitButton = (para) => {
    setIndex(randomNumber(0, 100));

    setCardDetails({
      fullname: cardInformation[index]?.data?.customer.name,
      expYear: cardInformation[index]?.data?.card.expirationYear
        .toString()
        .substring(2),
      cardNumber: cardInformation[index]?.data?.card.number,
      expMonth: cardInformation[index]?.data?.card.expirationMonth.toString(),
    });
    // setShow(true);

    // console.log("s;lkfmvksdnfkjesbnfehjdbn");
  };
  // console.log(firstName);

  return (
    <main>
      <Leva collapsed oneLineLabels />

      {isRandom === false ? (
        <Buttons
          setIsRandom={setIsRandom}
          handleSubmitButton={handleSubmitButton}
        />
      ) : isRandom == "yes" ? (
        <>
          <Canvas>
            <FullCard cardDetails={cardDetails} />

            <OrbitControls />
          </Canvas>
          <PrimaryButtons
            handleSubmitButton={handleSubmitButton}
            setIsRandom={setIsRandom}
            leftText="Back To Home Page"
            rightText="Generat Another Card"
          />
          {/* <Environment preset="city" /> */}
        </>
      ) : // </Suspense>
      isRandom === "no" ? (
        <Canvas>
          <Card width="40" height="10">
            <Html transform occlude position={[0, 0, 0.2]}>
              <Header
                handlesubmitbutton={handleSubmitButton}
                customCardHandler={customCardHandler}
              />
            </Html>
            <OrbitControls />
          </Card>
          {/* <OrbitControls enablePan={false} zoomSpeed={0.5} /> */}

        </Canvas>
      ) : null}
    </main>
  );
}
