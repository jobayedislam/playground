import { useState } from "react";

function App() {
  const [text, setText] = useState<string>("");

  const handleClick = () => {
    console.log(text);
  };

  return (
    <>
      <h1>LocalStorage test</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Show Text</button>
    </>
  );
}

export default App;
