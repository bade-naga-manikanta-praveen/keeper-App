import React from "react";
import Header from "./header";
import Note from "./note";
import CreateArea from "./CreateArea";






function App() {
  const [items, setItems] = React.useState([]);

  function handlechange(newitem){
     setItems([...items,newitem]);
  }

  function deletenote(id){
     setItems(items.filter((obj,index)=>{
       return (obj.id!==id);
     }));
  }

  function CreateNote(props){
    return <Note key={props.id} id={props.id} title={props.title} content={props.content} delete={deletenote} />
  }

  return (
    <div>
      <Header />
      <CreateArea 
        getContent={handlechange}
      />
       {items.map(CreateNote)}
    </div>
  );
}

export default App;
