import React, { useState } from "react";
import './Input.css';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function Input(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const colours = ["#CDABEB", "#F6CA94", "#C7CAFF", "#C1CBC0", "#F6C2F3", "#DFDA70"];
    const [note, setNote] = useState({
        title: "",
        content: "",
        color: "",
        time : ""
    });

    function expand(){
        setIsExpanded(true);
    }

    const [selectedColourIndex, setSelectedColourIndex] = useState(null);

    function updateType(event) {
        const { name, value } = event.target;
        setNote((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    function updateTime(){
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate =  new Date();
        const noteDate = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
        const noteDay = weekdays[currentDate.getDay()];
        const noteTime = ` ${currentDate.getHours()}:${currentDate.getMinutes()}`;
        const currentTime= `${noteDate}  ${noteDay}  ${noteTime}`;
        
        setNote((prev) => ({
            ...prev,
            time: currentTime,
        })); 
    }

    function updateColourPick(colour, index) {
        setSelectedColourIndex(index);
        setNote((prev) => ({
            ...prev,
            color: colour,
        }));
        updateTime();
    }

    function onsubmit(event) {
        event.preventDefault();
        props.addNote(note);
        setNote({
            title: "",
            content: "",
            color: "",
            time : ""
        });
        setSelectedColourIndex(null); // Reset selected color index
    }

    return (
        <div className="input-box">
            <form>

            {
                isExpanded ?
                <input
                    onChange={updateType}
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                /> :
                null
            }
               
                <textarea
                    onChange={updateType}
                    onClick={expand}
                    name="content"
                    placeholder="type your note..."
                    value={note.content}
                />
        {
            isExpanded ?
            <ul>
                    {colours.map((colour, index) => {
                        const isSelected = selectedColourIndex === index;
                        return (
                            <li
                                key={index}
                                onClick={() => updateColourPick(colour, index)}
                                className="colour-choice"
                                style={{ backgroundColor: colour, border: isSelected ? "2px solid black" : "none" }}
                            />
                        );
                    })}
                </ul> :
                null
        }
        {
            isExpanded ?
                <Zoom in={true} >
                    <button
                        className="submit-btn"
                        onClick={onsubmit}>
                        <AddIcon />
                    </button>
                </Zoom> :
                null
        }      
            </form>
        </div>
    );
}

export default Input;
