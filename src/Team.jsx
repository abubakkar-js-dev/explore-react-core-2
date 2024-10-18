import { useState } from "react";

export default function Team(){
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    };
    const [player,updatePlayer] = useState(0);
    const addPlayer = () =>{
        const newPlayer = player + 1;
        updatePlayer(newPlayer);
    }
    const removePlayer = () =>{
        if(player > 0){
            const removePlayer = player - 1;
            updatePlayer(removePlayer);
        }
    }
    return (

        <div style={teamStyle}>
            <h3>Players: {player}</h3>
            <p style={{margin: '5px 0'}}>{ !player ?  'You can not remove player' : ''}</p>
            <button onClick={addPlayer} style={{border: '2px solid purple',margin: '10px'}}>Add Player</button>
            <button onClick={removePlayer} style={{border: '2px solid purple',margin: '10px'}}>Remove Player</button>

        </div>
    )
}