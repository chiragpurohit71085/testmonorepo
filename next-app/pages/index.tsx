import React, { useEffect } from "react";
import { SampleComponent } from "@chiragpurohit71085/demo-react-plugin";
import { useAppStore } from "../store/store";

const Home: React.FC = () => {
  const { text, setText, callback, setCallback } = useAppStore();

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
        onCallback={callback}
      />
    </div>
  );
};

export default Home;