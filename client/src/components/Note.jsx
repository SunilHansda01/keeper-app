import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import Content from "./Content";

function Note(props) {
  
  function handleClick(noteId) {
    props.onDelete(props.id);
    axios.delete("/delete-note/" + noteId);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <Content content = {props.content} />
      <div>{new Date(props.createdAt).toDateString()}</div>
      <div>
        <button onClick={()=> handleClick(props.noteId)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Note;
