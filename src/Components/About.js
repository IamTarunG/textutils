import React from "react";
import { Accordion } from "react-bootstrap";

export default function About(props) {
  return (
    <div>
      <h1
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        About Us
      </h1>
      <div className="container my-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Analyze the Text</Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "light" ? "black" : "white",
                border: props.mode === "light" ? "black" : "1px solid white",
              }}
            >
              The TextUtils has the utility to manipulate the text from Upper
              case to Lower case and Lower case to Upper case
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Browser Compatiable</Accordion.Header>
            <Accordion.Body
              style={{
                backgroundColor: props.mode === "light" ? "white" : "black",
                color: props.mode === "light" ? "black" : "white",
                border: props.mode === "light" ? "black" : "1px solid white",
              }}
            >
              This TetxUtils is Browser Compatiable
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
