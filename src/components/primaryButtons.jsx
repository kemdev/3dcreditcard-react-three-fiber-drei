import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MDBIcon } from "mdb-react-ui-kit";

export default function primaryButtons({
  handleSubmitButton,
  setIsRandom,
  leftText,
  rightText
}) {
  return (
    <ButtonGroup
      className="reGenerateContainer"
      style={{ zIndex: 1, marginTop: "45vh", position: "absolute" }}
    >
      <Button
        color="success"
        className="reGenerateButton mx-5"
        onClick={(e) => setIsRandom(false)}
      >
        <MDBIcon
          fas
          icon="chevron-left"
          // className="mx-2"
          style={{ marginLeft: "1px", marginRight: "1rem" }}
        />
        {leftText}
      </Button>

      <Button
        color="success"
        className="reGenerateButton"
        onClick={handleSubmitButton}
      >
        {rightText}
        <MDBIcon
          fas
          icon="sync"
          style={{ marginRight: "1px", marginLeft: "1rem" }}
        />
      </Button>
    </ButtonGroup>
  );
}
