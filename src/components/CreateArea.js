import React from "react";
import { v4 as uuidv4 } from 'uuid';

function CreateArea(props) {
  const [title_text, setTitle] = React.useState("");
  const [desc_text, setDesc] = React.useState("");
  function f(event){
    setTitle(event.target.value);
  }
  function g(event){
    setDesc(event.target.value);
  }
  return (
    <div>
      <form>
        <input name="title" placeholder="Title"
          onChange={f} value={title_text}/>
        <textarea name="content" placeholder="Take a note..." rows="3"
          onChange={g} value={desc_text} />
        <button onClick={(event)=>{
          event.preventDefault();
          const newItem={
            id:uuidv4(),
            title:title_text,
            content:desc_text
          }
           props.getContent(newItem);
            setTitle("");
            setDesc("");
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
