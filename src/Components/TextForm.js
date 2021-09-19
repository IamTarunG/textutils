import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { Form } from "react-bootstrap";
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpCase = () => {
    // console.log("Clicked Upper Case");

    let newTxt;
    newTxt = text.toUpperCase();
    setText(newTxt);
    props.salert("Converted to Upper case", "success");
  };

  const handleLoCase = () => {
    let ltext;
    ltext = text.toLowerCase();
    setText(ltext);
    props.salert("Converted to Lower case", "success");
  };
  const handleClearCase = () => {
    let ltext;
    ltext = "";
    setText(ltext);
    props.salert("Cleared", "success");
  };

  const onChangeHandle = (e) => {
    // console.log("On change is executing");
    // console.log(e);
    setText(e.target.value);
    // props.salert("Changes", "success");
  };

  const copy = () => {
    navigator.clipboard.writeText(text);
    props.salert("Copied", "success");
  };

  return (
    <>
      <div className="container my-3" style={props.chanbc}>
        <h1 className="heading">{props.heading}</h1>

        {/* <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            onChange={onChangeHandle}
            value={text}
            rows={8}
          />
        </Form.Group> */}
        <div className="form-group my-3">
          <textarea
            onChange={onChangeHandle}
            value={text}
            className="form-control"
            id="text"
            rows="8"
            // style={{
            //   backgroundColor: props.mode === "dark" ? "black" : "white",
            //   color: props.mode === "dark" ? "white" : "black",
            // }}
            style={props.chanbc}
          ></textarea>
        </div>
        <Button
          variant="primary"
          onClick={handleUpCase}
          className="my-1"
          disabled={text.length === 0}
        >
          Convert To UpperCase
        </Button>
        <Button
          variant="primary"
          onClick={handleLoCase}
          className="mx-1 my-1"
          disabled={text.length === 0}
        >
          Convert To LowerCase
        </Button>
        <Button
          variant="primary"
          onClick={copy}
          className="my-1 "
          disabled={text.length === 0}
        >
          Copy
        </Button>
        <Button
          variant="primary"
          onClick={handleClearCase}
          className="my-1 mx-1"
          disabled={text.length === 0}
        >
          Clear
        </Button>
      </div>
      <div className="container my-3" style={props.chanbc}>
        <h3>Your Text Summary</h3>
        <p>
          Words :{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }
          <br />
          Characters : {text.length} <br />
          {0.008 *
            text.split(" ").filter((elen) => {
              return elen.length !== 0;
            }).length +
            " "}
          Minutes Read
        </p>

        <h3>Preview</h3>
        <p>{text.length === 0 ? "Nothing to show at preview" : text}</p>
      </div>
    </>
  );
}
