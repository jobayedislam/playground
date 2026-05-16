import { useState } from "react";
import "./App.css";
import generateData, { type Book } from "./data/dataGenerator";

function App() {
  const [data] = useState<Book[]>(generateData());
  const [areBooksShown, setAreBooksShown] = useState<boolean>(false);

  const handleToggleBooks = () => {
    setAreBooksShown(!areBooksShown);
  };

  return (
    <>
      <h1>Simple Data Generator example</h1>
      <button onClick={handleToggleBooks}>
        {areBooksShown ? "Hide Books" : "Show Books"}
      </button>
      <div className="container">
        {areBooksShown &&
          data.map((book) => (
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
