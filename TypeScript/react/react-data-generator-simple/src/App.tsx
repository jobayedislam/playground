import { useEffect } from "react";
import "./App.css";
import generateData from "./data/dataGenerator";

function App() {
  useEffect(() => {
    console.log(generateData());
  }, []);

  return (
    <>
      <h1>Simple Data Generator example</h1>
    </>
  );
}

export default App;
