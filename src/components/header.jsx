import React, { useState } from "react";
import {
  MDBInput,
  MDBCheckbox,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
} from "mdb-react-ui-kit";

export default function Header(props) {
  const [cardInfo, setCardInfo] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expMonth, setExpMonth] = useState();
  const [expYear, setExpYear] = useState();

  const cardInfoHandler = (e) => {
    setCardInfo();
  };

  console.log(firstName);

  return (
    <div className="header" style={props?.style}>
      <h1 className={`title display-1 my-4 text-center`}>
        Add your Card Information
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <MDBInputGroup className="mb-4 "  size="lg">
          <MDBInputGroupText>First Name</MDBInputGroupText>
          <MDBInputGroupElement
            type="text"
            id="form5Example1"
            placeholder=" "
            // onChange={(e) => props?.firstnamehandler(e.target.value)}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <MDBInputGroupText className='ms-5'>Last Name</MDBInputGroupText>
          <MDBInputGroupElement
            type="text"
            id="form5Example1"
            placeholder=" "

            // placeholder="ex. Alarmanazi"
            // onChange={(e) => props?.firstnamehandler(e.target.value)}
            onChange={(e) => setLastName(e.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className="mb-4"  size="lg">
          <MDBInputGroupText>Card Number</MDBInputGroupText>
          <MDBInputGroupElement
          className="w-25"
            type="text"
            placeholder=" "

            // placeholder="ex. 123456789"
            // onChange={(e) => props?.firstnamehandler(e.target.value)}
            onChange={(e) => setCardNumber(e.target.value)}
          />

          {/* Card Expiration Month */}
          <MDBInputGroupText className="ms-5" >EXP. Month</MDBInputGroupText>
          <MDBInputGroupElement
            type="text"
            placeholder=" "

            // placeholder="ex. 10"
            // onChange={(e) => props?.firstnamehandler(e.target.value)}
            onChange={(e) => setExpMonth(e.target.value)}
          />

          {/* Card Expiration Year  */}
          <MDBInputGroupText className="ms-4" >EXP. Year</MDBInputGroupText>
          <MDBInputGroupElement
            type="text"
            placeholder=" "

            // placeholder="ex. 30"
            // onChange={(e) => props?.firstnamehandler(e.target.value)}
            onChange={(e) => setExpYear(e.target.value)}
          />
          
          </MDBInputGroup>



        <MDBCheckbox
          wrapperClass="d-flex justify-content-center mb-4"
          id="form5Example3"
          label="I have read and agree to the terms"
          // defaultChecked
        />
        {/* <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            props?.setShow(true);
            props?.handlesubmitbutton();
          }}
        >
          Generate
        </button> */}
      </form>
    </div>
  );
}
