import React, { useState } from 'react';

const CreateNotes = () => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const InputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    const { name, value } = event.target;

    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
    console.log(note);
  };
  return (
    <>
      <div className="main_note">
        <form>
          <input
            type="text"
            value={note.title}
            onChange={InputEvent}
            name="title"
            placeholder="Title"
            autocomplete="off"
          />
          <textarea
            rows=""
            coloumns=""
            value={note.content}
            onChange={InputEvent}
            name="content"
            placeholder="Write a note..."
          />
          <button>+</button>
        </form>
      </div>
    </>
  );
};

export default CreateNotes;
