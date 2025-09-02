import { useState } from "react";

export default function Calc() {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="닉네임을 입력하세요"
        className=""
      />
      <button onClick={() => setName(input)} className="">
        🔍
      </button>
      {name && <div> 저장된 이름 : {name}</div>}
    </div>
  );
}
