import { useRef, useState } from "react";

function App() {
  const [text, setText] = useState<string>("");
  const textRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(text);
  };

  const handleRefClick = () => {
    console.log(textRef.current?.value);
  };

  return (
    <>
      <h1>LocalStorage test</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>Show Text</button>
      <hr />
      <input type="text" ref={textRef} />
      <button onClick={handleRefClick}>Show Text</button>
    </>
  );
}

export default App;
