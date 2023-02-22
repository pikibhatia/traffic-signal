import Color from './Color'
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const durations = [5000, 2000, 5000, 2000];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorIndex((colorIndex + 1) % 5);
    }, durations[colorIndex]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="trafficlight">
      <Color color="green" active={colorIndex === 0} />
      <Color color="yellow" active={colorIndex === 1 || colorIndex === 3} />
      <Color color="red" active={colorIndex === 2} />
    </div>
  );
};


export default App;
