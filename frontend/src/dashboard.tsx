import { useState, useEffect, React } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [prediction, setPrediction] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:8000/predict')
      .then((res) => setPrediction(res.data.prediction));
  }, []);

  return (
    <div>
      <h2>Next Month's Prediction: ${prediction.toFixed(2)}</h2>
    </div>
  );
}