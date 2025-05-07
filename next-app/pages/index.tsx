import React, { useEffect } from "react";
import { SampleComponent } from "demo-react-plugin";
import { useAppStore } from "../store/store";

const Home: React.FC = () => {
  const { text, setText, setCallback } = useAppStore();

  useEffect(() => {
    setCallback(() => () => {
      alert("Callback triggered from SampleComponent!");
    });
  }, [setCallback]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Next.js App with Zustand and SampleComponent</h1>
      <p>Shared State: {text}</p>
      <SampleComponent
        text={text}
        onTextChange={setText}
        onCallback={() => alert("Callback executed in Next.js App!")}
      />
    </div>
  );
};

export default Home;