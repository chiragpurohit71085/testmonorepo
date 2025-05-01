import React from 'react';
import { SampleComponent } from 'testing_react_plugin';

const Home: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Next.js App with Fixed TS Widget</h1>
     <SampleComponent text="sample x">{null}</SampleComponent>
  </div>
);

export default Home;
