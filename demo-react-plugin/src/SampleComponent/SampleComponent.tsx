import React, { JSX } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SampleComponentProps } from "./SampleComponent.types";

const SampleComponent = ({
  text = "Initial Text",
  onTextChange = () => {},
  onCallback = () => {},
}: SampleComponentProps): JSX.Element => {
  const handleButtonClick = () => {
    onTextChange("Updated from SampleComponent");
    onCallback();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>This is a Sample component</Text>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>Update Text</Text>
      </Pressable>
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
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SampleComponent;