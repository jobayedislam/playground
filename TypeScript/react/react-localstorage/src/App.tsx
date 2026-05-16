import { useState } from "react";

function App() {
  const [text, setText] = useState<string>("");

  return (
    <>
      <h1>LocalStorage test</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </>
  );
}

export default App;
