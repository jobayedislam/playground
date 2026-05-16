import { useState } from "react";
import "./App.css";
import generateData, { type Book } from "./data/dataGenerator";

function App() {
  const [data] = useState<Book[]>(generateData());

  return (
    <>
      <h1>Simple Data Generator example</h1>
      {data.map((book) => (
        <div key={book.id}>
          <p>Name: {book.name}</p>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
        </div>
      ))}
    </>
  );
}

export default App;
