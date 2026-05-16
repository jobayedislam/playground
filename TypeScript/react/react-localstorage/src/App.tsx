import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    console.log(text);
    localStorage.setItem("inputText", text);
    setText("");
  };

  const returnStorageItem = (item: string): string | null => {
    return localStorage.getItem(item);
  };

  return (
    <>
      <h1>LocalStorage test</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick} className="button">
        Show Text
      </button>
      <p>Live update: {text}</p>
      <p>LocalStorage update: {returnStorageItem("inputText")}</p>
    </>
  );
}

export default App;
