import React, { useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
    const response = await axios.get('/yourNotes');
    setNotes(response.data);
    }
    fetchNotes();
  }, [])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <div key={index} className = "grid-item">
          <Note
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            noteId={noteItem._id}
            createdAt={noteItem.createdAt}
            onDelete={deleteNote}
          />
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
