import { useState } from "react";
import "./App.css";
import generateData, { type Book } from "./data/dataGenerator";

function App() {
  const [numOfBooks] = useState<number>(15);
  const [data, setData] = useState<Book[]>(generateData(numOfBooks));
  const [areBooksShown, setAreBooksShown] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>(numOfBooks.toString());

  const handleToggleBooks = () => {
    setAreBooksShown(!areBooksShown);
  };

  const handleBooksNumberChange = (value: string) => {
    setInputText(value);
    const num = Number(value);

    if (num !== 0 || !isNaN(num)) {
      setData(generateData(num));
    }
  };

  return (
    <>
      <h1>Simple Data Generator example</h1>
      <button onClick={handleToggleBooks} className="toggle-books-btn">
        {areBooksShown ? "Hide Books" : "Show Books"}
      </button>
      {areBooksShown && (
        <div>
          <div className="card-header">
            Number of books:{" "}
            <input
              type="text"
              value={inputText}
              onChange={(e) => handleBooksNumberChange(e.target.value)}
            />
          </div>

          <div className="container">
            {data.map((book) => (
              <div className="card" key={book.id}>
                <p>Name: {book.name}</p>
                <p>Author: {book.author}</p>
                <p>ISBN: {book.isbn}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
