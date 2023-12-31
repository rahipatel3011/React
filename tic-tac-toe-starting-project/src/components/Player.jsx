import { useState } from "react";


export default function Player({initialName, symbol, isActive, onChangeName}){
    const [isEditing, setIsEditing] = useState(false);
    const [name, setNewName] = useState(initialName);
    

    // handler to handle isEditing useState
    const editingHandler = ()=>{
        setIsEditing(prev => !prev);
        if(isEditing){
            onChangeName(symbol, name);
        }
    };

    // handler to chnage name of the player
    const changeNameHandler = (event)=>{
        setNewName(event.target.value);
    };

    // switch editing mode according to isEditing useState
    let playerName = <span className="player-name">{name}</span>;
    const buttonName = isEditing ? 'Save' : 'Edit';
    if(isEditing){
        playerName = <input onChange={changeNameHandler} value={name} type="text" required/>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editingHandler} >{buttonName}</button>
          </li>
    );
}