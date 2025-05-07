import React, { JSX } from "react";
import { SampleComponentProps } from "./SampleComponent.types";
import "./SampleComponent.scss";

const SampleComponent = ({
  text,
  onTextChange,
  onCallback,
}: SampleComponentProps): JSX.Element => {
  const handleButtonClick = () => {
    onTextChange("Updated from SampleComponent");
    onCallback();
  };

  return (
    <div className="sample-component">
      <h3>This is a Sample component</h3>
      <div data-testid="sample-text" className="sample-text">{text}</div>
      <button onClick={handleButtonClick}>Update Text</button>
    </div>
  );
};

export default SampleComponent;