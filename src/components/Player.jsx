import { useState } from "react";

export const Player = ({ initialName, symbol, isActive }) => {
    const [playerName, setPlayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setIsEditing((editing)=>!editing);
  };
  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player" >
        {isEditing ? (
          <input type="text" value={playerName} onChange={(e) => handleChange(e)} required />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => handleClick()}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </span>
    </li>
  );
};
