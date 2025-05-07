

---

### 1. **Use `react-native-web` for Cross-Platform Compatibility**
`react-native-web` allows React Native components to work in web environments. Install it in your project:

```bash
npm install react-native-web
```

---

### 2. **Refactor `SampleComponent`**
Update `SampleComponent` to use React Native components (`View`, `Text`, `Button`) and `StyleSheet` for styling. Use `Platform` from `react-native` to handle platform-specific logic if needed.

#### Updated SampleComponent.tsx
```tsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SampleComponentProps } from "./SampleComponent.types";

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
    <View style={styles.container}>
      <Text style={styles.heading}>This is a Sample component</Text>
      <Text style={styles.text}>{text}</Text>
      <Button title="Update Text" onPress={handleButtonClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 8,
  },
});

export default SampleComponent;
```

---

### 3. **Update SampleComponent.types.ts**
No changes are needed here since the props are already platform-agnostic.

---

### 4. **Update index.ts**
Export the refactored `SampleComponent` as usual.

```ts
import SampleComponent from "./SampleComponent/SampleComponent";

export { SampleComponent };
```

---

### 5. **Remove SCSS**
Since React Native uses `StyleSheet` for styling, you no longer need SCSS. Delete the SampleComponent.scss file and remove any SCSS-related configurations from your build tools (e.g., Rollup).

---

### 6. **Update jest.config.ts**
Update the Jest configuration to handle `react-native` and `react-native-web`:

```ts
export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^react-native$": "react-native-web",
  },
  setupFilesAfterEnv: ["./jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/*.spec.(ts|tsx)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
```

---

### 7. **Test the Component**
Update the test file to use `react-native-testing-library` instead of `@testing-library/react`.

#### Updated SampleComponent.spec.tsx
```tsx
-widget/widget_and_next_tsnode/demo-react-plugin/src/SampleComponent/SampleComponent.spec.tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SampleComponent from "./SampleComponent";

describe("SampleComponent", () => {
  it("should display the correct text", () => {
    const mockOnTextChange = jest.fn();
    const mockOnCallback = jest.fn();

    const { getByText } = render(
      <SampleComponent
        text="Initial Text"
        onTextChange={mockOnTextChange}
        onCallback={mockOnCallback}
      />
    );

    expect(getByText("Initial Text")).toBeTruthy();
  });

  it("should call onTextChange and onCallback when the button is pressed", () => {
    const mockOnTextChange = jest.fn();
    const mockOnCallback = jest.fn();

    const { getByText } = render(
      <SampleComponent
        text="Initial Text"
        onTextChange={mockOnTextChange}
        onCallback={mockOnCallback}
      />
    );

    fireEvent.press(getByText("Update Text"));

    expect(mockOnTextChange).toHaveBeenCalledWith("Updated from SampleComponent");
    expect(mockOnCallback).toHaveBeenCalled();
  });
});
```

---

### 8. **Build and Publish**
1. Build the package using Rollup.
2. Publish it to your private GitHub repository or npm registry.

---

### 9. **Usage in React and React Native**
- **React Web**: Use `react-native-web` to render the component in a web environment.
- **React Native**: Use the component directly in a React Native project.

---

### Summary
This refactor makes the demo-react-plugin compatible with both React and React Native by:
1. Replacing DOM-specific elements with React Native components.
2. Using `StyleSheet` for styling.
3. Removing SCSS dependencies.
4. Updating tests to use `react-native-testing-library`.

This ensures the component is cross-platform and reusable in both environments.

Similar code found with 2 license types