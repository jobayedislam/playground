import { useEffect, useState } from "react";
import "./App.css";
import generateData, { type Book } from "./data/dataGenerator";

function App() {
  const [data] = useState<Book[]>(generateData());

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      <h1>Simple Data Generator example</h1>
    </>
  );
}

export default App;
