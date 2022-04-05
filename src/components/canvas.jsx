import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { folder, useControls } from "leva";

import Cloud from "./clouds"
import {
  Environment,
  useProgress,
  Sky,
  Billboard,
  PresentationControls,
  OrbitControls,
  TransformControls,
  Stage,
} from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();
  return (
    <div
      style={{ fontSize: "4em", color: "hotpink", fontWeight: "bolder" }}
      className="textShadow"
    >
      {progress} % loaded
    </div>
  );
}

export default function ToCanvas({ children }) {
  /* ------------------------------- Leva Setup ------------------------------- */


  const environment = useControls({
    environment: folder({
      environment: {
        options: {
          sunset: "sunset",
          dawn: "dawn",
          night: "night",
          lobby: "lobby",
          park: "park",
          city: "city",
          studio: "studio",
          apartment: "apartment",
          forest: "forest",
          warehouse: "warehouse",
        },
      },
    }),
    preset: folder({ //rembrandt (default) | portrait | upfront | soft
      preset: {
        options: {
          rembrandt: "rembrandt",
          portrait: "portrait",
          upfront: "upfront",
          soft: "soft",
        },
      },
    }),
  });

 

  /* -------------------------------------------------------------------------- */
  /*                             RectAreaLight Leva                             */
  /* -------------------------------------------------------------------------- */

  const { x, y, z, x2, y2, z2 } = useControls({
    RectAreaLight_1_1: folder({
      x: { value: 10, min: -40, max: 40, step: 1 },
      y: { value: 10, min: -40, max: 40, step: 1 },
      z: { value: 10, min: -40, max: 40, step: 1 },
    }),
    rectAreaLight: folder({
      x2: { value: -10, min: -40, max: 40, step: 1 },
      y2: { value: -10, min: -40, max: 40, step: 1 },
      z2: { value: -10, min: -40, max: 40, step: 1 },
    }),
  });

  /* ----------------------------- END RectAreaLight Leva ----------------------------- */

  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        mode="concurrent"
        className="canvas"
        colorManagement
        frameloop="demand" // to turn the useFrame on when interact with the canvas
        // style={show ? { display: "block" } : { display: "none" }}
        // shadows
        shadowMap
        dpr={[1, 2]}
        pixelRatio={[1, 1.5]}
        camera={{ position: [0, 3, 75], fov: 25 }}
        resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
        onUpdate={(self) => self.camera.updateProjectionMatrix()}
        id="canvas"
        style={{ touchAction: "none" }}
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.35}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight
          position={[10, 10, 10]}
          angle={0.35}
          penumbra={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        {/* <rectAreaLight
          intensity={10}
          position={[x, y, z]}
          width={10}
          height={300}
          color="cyan"
          onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
        />
        <rectAreaLight
          intensity={10}
          position={[x2, y2, z2]}
          width={300}
          height={10}
          color="cyan"
          onUpdate={(self) => self.lookAt(new THREE.Vector3(0, 0, 0))}
        /> */}

        {/* <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        > */}
          <Cloud />
          {children}
        {/* </PresentationControls> */}
        {/* <OrbitControls /> */}
      </Canvas>
    </Suspense>
  );
}
