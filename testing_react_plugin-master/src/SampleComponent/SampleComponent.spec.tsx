import React from "react";
import { render } from "@testing-library/react";

import SampleComponent from "./SampleComponent";
import { SampleComponentProps } from "./SampleComponent.types";

describe("Sample Component", () => {
    let props: SampleComponentProps;

    beforeEach(() => {
        props = {
            text: "sample"
        };
    });

    it("should have text as sample", () => {
        const { getByTestId } = render(<SampleComponent {...props} />)

        const testComponent = getByTestId("sample-text");

        expect(testComponent).toHaveTextContent("sample");
    });
});
