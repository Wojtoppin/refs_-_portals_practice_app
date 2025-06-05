import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('');

  const inputtedPlayerName = useRef();

  const handleClick = () =>{
    setPlayerName(inputtedPlayerName.current.value);
    inputtedPlayerName.current.value = '';
  }
  console.log(playerName)
  return (
    <section id="player">
      <h2>Welcome {playerName.length > 0 ? playerName: "unknown entity"}</h2>
      <p>
        <input ref={inputtedPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
