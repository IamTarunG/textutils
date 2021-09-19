import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    let l = word.toLowerCase();
    return l.charAt(0).toUpperCase() + l.slice(1);
  };

  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} d-flex align-items-center`}
          role="alert"
        >
          <div>
            {capitalize(props.alert.type)}: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
