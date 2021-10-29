import React, { useState } from 'react';

const CreateNotes = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [expand, setExpand] = useState(false);

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    event.preventDefault();

    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvents = (event) => {
    props.passNote(note);
    event.preventDefault();
    setNote({
      title: '',
      content: '',
    });
  };

  const expandIt = ()=>{
    setExpand(true)
  }
  return (
    <>
      <div className="main_note">
        <form>

          {expand?
          <input
            type="text"
            value={note.title}
            onChange={InputEvent}
            name="title"
            placeholder="Title"
            autocomplete="off"
          />
          : null}

          <textarea
            rows=""
            coloumns=""
            value={note.content}
            onChange={InputEvent}
            name="content"
            placeholder="Write a note..."
            onClick={expandIt}
          />

          {expand?
          <button onClick={addEvents}>+</button>
          :null}
          
        </form>
      </div>
    </>
  );
};

export default CreateNotes;
