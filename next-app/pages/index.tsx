import React from 'react';
import UserInfoWidget from 'user-info-widget';

const Home: React.FC = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Next.js App with Fixed TS Widget</h1>
    <UserInfoWidget style={{ marginTop: '1rem' }} />
  </div>
);

export default Home;
