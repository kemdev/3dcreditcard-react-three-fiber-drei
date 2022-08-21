import React, { useRef, useState } from "react";
import { RoundedBox } from "@react-three/drei";

export default function Card({ children, width, height }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <RoundedBox
      args={[width || 12, height || 7, 0.2]}
      radius={0.2}
      ref={mesh}
      smoothness={4}
    >
 
      
      {children}
      <meshStandardMaterial
        attach="material"
        // color={"hotpink"}
        color={"#ff69b4"}
        roughness={0.1}
        metalness={0.1}
      />
    </RoundedBox>
  );
}
