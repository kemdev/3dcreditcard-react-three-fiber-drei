import React from "react";

export default function dragedTest() {
  let isDragging = false;
  let previousMousePosition = {
    x: 0,
    y: 0,
  };

  const toRadians = (angle) => {
    return angle * (Math.PI / 180);
  };

  const toDegrees = (angle) => {
    return angle * (180 / Math.PI);
  };

  const renderArea = renderer.domElement;

  renderArea.addEventListener("mousedown", (e) => {
    isDragging = true;
  });

  renderArea.addEventListener("mousemove", (e) => {
    let deltaMove = {
      x: e.offsetX - previousMousePosition.x,
      y: e.offsetY - previousMousePosition.y,
    };

    if (isDragging) {
      let deltaRotationQuaternion = new THREE.Quaternion().setFromEuler(
        new THREE.Euler(
          toRadians(deltaMove.y * 1),
          toRadians(deltaMove.x * 1),
          0,
          "XYZ"
        )
      );

      molecule.quaternion.multiplyQuaternions(
        deltaRotationQuaternion,
        molecule.quaternion
      );
    }

    previousMousePosition = {
      x: e.offsetX,
      y: e.offsetY,
    };
  });

  document.addEventListener("mouseup", (e) => {
    isDragging = false;
  });

  return <div>dragedTest</div>;
}
