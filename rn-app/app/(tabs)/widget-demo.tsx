import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SampleComponent } from "@chiragpurohit71085/demo-react-plugin";

import { ThemedText } from '@/components/ThemedText';

export default function WidgetDemo() {
  const [text, setText] = useState('Initial Text');

  return (
    <>
      <Stack.Screen options={{ title: 'Widget Demo' }} />
      <View style={styles.container}>
        <ThemedText type="title">Widget Demo Screen</ThemedText>
        <ThemedText style={styles.sharedState}>Shared State: {text}</ThemedText>
        <SampleComponent
          text={text}
          onTextChange={setText}
          onCallback={() => alert('Callback triggered from SampleComponent!')}
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