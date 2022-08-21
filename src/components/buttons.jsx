import React from "react";
import { MDBTooltip } from "mdb-react-ui-kit";
// import {Button } from 'react-bootstrap';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default function Buttons({ setIsRandom, handleSubmitButton }) {
  return (
    <ButtonGroup
      // style={{ marginTop: "45vh" }}
      className="reGenerateContainer"
    >
      <Button
        className="reGenerateButton mx-5 p-4"
        onClick={() => {
          setIsRandom("yes");
          handleSubmitButton();
        }}
      >
        Generate Random Credit Card
      </Button>
      {/* <Button className="reGenerateButton" onClick={() => setIsRandom("no")}>
          <MDBTooltip
            tag="span"
            // wrapperProps={{ button: "EnterMy" }}
            title="Still in Progress!"
          >
            Enter my Credit Card Data
          </MDBTooltip>
        </Button> */}
    </ButtonGroup>
  );
}
