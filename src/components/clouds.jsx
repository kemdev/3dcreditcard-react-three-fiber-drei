import React from "react";
import { Group } from "three";
import { Cloud } from "@react-three/drei";

import { folder, useControls, Leva } from "leva";

export default function Clouds() {
  const {
    segments1,
    width1,
    depth1,
    segments2,
    width2,
    depth2,
    segments3,
    width3,
    depth3,
    segments4,
    width4,
    depth4,
    cl1x,
    cl1y,
    cl1z,
    cl2x,
    cl2y,
    cl2z,
    cl3x,
    cl3y,
    cl3z,
    cl4x,
    cl4y,
    cl4z,
  } = useControls("Clouds Position", {
    cloud_1: folder({
      position: folder({
        cl1x: { value: -4, min: -15, max: 15, step: 0.1 },
        cl1y: { value: 12, min: -15, max: 15, step: 0.1 },
        cl1z: { value: 0, min: -15, max: 15, step: 0.1 },
      }),
      arguments: folder({
        segments1: { value: 15, min: 1, max: 150, step: 1 },
        width1: { value: 0, min: -15, max: 15, step: 1 },
        depth1: { value: 0, min: -15, max: 15, step: 1 },
      }),
    }),
    cloud_2: folder({
      position: folder({
        cl2x: { value: -4, min: -15, max: 15, step: 0.1 },
        cl2y: { value: 15, min: -15, max: 15, step: 0.1 },
        cl2z: { value: 0, min: -15, max: 15, step: 0.1 },
      }),
      arguments: folder({
        segments2: { value: 0, min: 1, max: 15, step: 1 },
        width2: { value: 0, min: -15, max: 15, step: 1 },
        depth2: { value: 0, min: -15, max: 15, step: 1 },
      }),
    }),
    cloud_3: folder({
      position: folder({
        cl3x: { value: 4, min: -15, max: 15, step: 0.1 },
        cl3y: { value: 10, min: -15, max: 15, step: 0.1 },
        cl3z: { value: 0, min: -15, max: 15, step: 0.1 },
      }),
      arguments: folder({
        segments3: { value: 0, min: 1, max: 15, step: 1 },
        width3: { value: 0, min: -15, max: 15, step: 1 },
        depth3: { value: 0, min: -15, max: 15, step: 1 },
      }),
    }),
    cloud_4: folder({
      position: folder({
        cl4x: { value: 4, min: -15, max: 15, step: 0.1 },
        cl4y: { value: 12, min: -15, max: 15, step: 0.1 },
        cl4z: { value: 0, min: -15, max: 15, step: 0.1 },
      }),
      cloud_4_Args: folder({
        segments4: { value: 0, min: 1, max: 15, step: 1 },
        width4: { value: 0, min: -15, max: 15, step: 1 },
        depth4: { value: 0, min: -15, max: 15, step: 1 },
      }),
    }),
  });

  return (
    <group>
      <Cloud
        position={[cl1x, cl1y, cl1z]}
        segments={segments1}
        width={width1}
        depth={depth1}
      />
      <Cloud
        position={[cl2x, cl2y, cl2z]}
        segments={segments2}
        width={width2}
        depth={depth2}
      />
      <Cloud
        position={[cl3x, cl3y, cl3z]}
        segments={segments3}
        width={width3}
        depth={depth3}
      />
      <Cloud
        position={[cl4x, cl4y, cl4z]}
        segments={segments4}
        width={width4}
        depth={depth4}
      />

      <Cloud
      position={[0, 10, 0]}
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
      />
    </group>
  );
}
