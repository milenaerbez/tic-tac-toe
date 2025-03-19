import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}){

const [playerName, setPlayerName] = useState(initialName); 
const [isEditing, setIsEditing] = useState(false);

//updating state based on the old state !! --> pass a function

//situacija:
//handleClick(){
//     setIsEditing(!isEditing); 
//     setIsEditing(!isEditing); 
// u oba slucaja ga stavi na true zato sto je pocetno false i ne radi ono sto mi zelimo
// to je caka sa previous state updating   }


function handleEditClick (){
    setIsEditing( (editing)=> !editing);

    if(isEditing){ onChangeName(symbol, playerName);}
    
}
//TWO WAY BINDING - situacija sa onChange i value 
function handleChange(event){

    setPlayerName(event.target.value);
}

let editablePlayerName = <span className="player-name"> {playerName}</span>;


if(isEditing){
    editablePlayerName = <input type="text"  required value={playerName}  onChange={handleChange}/>
}

    return (<li className={isActive ? 'active' : undefined}>
        <span className="player">
        {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>);
}
//handleEditClick ne sme stajati sa () odnosno ne sme se odmah izvrsiti 