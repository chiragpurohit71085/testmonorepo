import React, { JSX } from "react";
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