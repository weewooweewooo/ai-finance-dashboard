import { useState, useEffect, React } from "react";
import axios from 'axios';

function App() {
  const [health, setHealth] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}/health`)
      .then((res) => setHealth(res.data.status))
      .catch(() => setHealth('backend offline'));
  }, []);

  return (
    <div>
      <h1>Budget App</h1>
      <p>Backend Status: {health}</p>
    </div>
  );
}

export default App;
