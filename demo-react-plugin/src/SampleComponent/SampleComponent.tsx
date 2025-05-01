import React from "react";

import { SampleComponentProps } from "./SampleComponent.types";

import "./SampleComponent.scss";

const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => (
    <div
        className="sample-component"
    >
        <h3>This is a Sample component</h3>
        <div data-testid="sample-text" className="sample-text">{text}</div>
    </div>
);

export default SampleComponent;
