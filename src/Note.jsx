import React, { useState } from "react";
import './Note.css';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    function remove(){
        props.updateDelete(props.id);
    }
    return (
        <div className="note-container">
    <div className="note"
        style={{backgroundColor : props.noteColor}}
    >
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <h5>{props.noteTime}</h5>
        <button onClick={remove}>
            <DeleteIcon />
        </button>
    </div>
    </div>)
}

export default Note;