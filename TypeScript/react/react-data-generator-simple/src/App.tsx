import { useState } from "react";
import "./App.css";
import generateData, { type Book } from "./data/dataGenerator";

function App() {
  const [data] = useState<Book[]>(generateData());

  return (
    <>
      <h1>Simple Data Generator example</h1>
      <button>Show Books</button>
      <div className="container">
        {data.map((book) => (
          <div className="card" key={book.id}>
            <p>Name: {book.name}</p>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
