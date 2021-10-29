import React from 'react';

const Note = (props) => {

  const delNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1> {props.title} </h1>
        <br />
        <p> {props.content} </p>
        <button className="btn" onClick={delNote}>
          
          -
        </button>
      </div>
    </>
  );
};

export default Note;
