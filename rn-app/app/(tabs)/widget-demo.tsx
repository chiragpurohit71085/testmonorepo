import { Stack } from 'expo-router';
import React, { useEffect } from "react";
import { StyleSheet, View } from 'react-native';
import { SampleComponent } from "@chiragpurohit71085/demo-react-plugin";
import { ThemedText } from '@/components/ThemedText';
import { useAppStore } from "../../store/store";
export default function WidgetDemo() {
  
  const { text, setText, callback, setCallback } = useAppStore();

    useEffect(() => {
      setCallback(() => () => {
        alert("Callback triggered from SampleComponent!");
      });
    }, [setCallback]);

  return (
    <>
      <Stack.Screen options={{ title: 'Widget Demo' }} />
      <View style={styles.container}>
        <ThemedText type="title">Widget Demo Screen</ThemedText>
        <ThemedText style={styles.sharedState}>Shared State: {text}</ThemedText>
        <SampleComponent
          text={text}
          onTextChange={setText}
          onCallback={callback}          
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  sharedState: {
    marginVertical: 8,
  },
});