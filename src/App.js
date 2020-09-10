import React from 'react';
import './assets/styles/app.scss'
import Slider from './container/slider'
import Situationdashboard from './container/SituationDashboard';
import Integration from './container/Integration';
import Detect from './container/Detect';
import Reasons from './container/Reasons';
function App() {
  return (
    <div className="App">
        <Slider />
        <Detect />
        <Situationdashboard />
        <Integration />
        <Reasons />
    </div>
  );
}

export default App;
