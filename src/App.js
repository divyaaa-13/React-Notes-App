import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Input from './Input';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([ ]);
  
  function onAdd(note){
     setNotes((prev)=>{
      return ( [...prev, note]);
     })
  }
  function onDelete(id){
      setNotes((prev)=>{
       return prev.filter((item, index)=>{
          return index !== id;
        })
      })
  }
  return (
    <div className="App">
      <Header />
      <Input addNote={onAdd}  />
      {notes.map((noteItem, index)=>{
        return(
          <Note 
                title={noteItem.title} 
                content={noteItem.content} 
                id={index} 
                updateDelete={onDelete} 
                noteColor={noteItem.color} 
                noteTime={noteItem.time}
           />
        )
      })}
    </div>
  );
}

export default App;
