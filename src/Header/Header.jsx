import React from "react";
import './Header.css';
import EventNoteIcon from '@mui/icons-material/EventNote';

function Header(){
    return <div>
        <h1 className="heading">
        <EventNoteIcon />
        Notes
        </h1>
    </div>
}

export default Header;