import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNotes from './CreateNotes';
import Note from './Note';

const App = () => {
  const [cont, setCont] = useState([]);

  const addNote = (note) => {
    //alert('note saved');

    setCont((preData) => {
      return [...preData, note];
    });
  };

  const deleteNotes = (id) => {
    setCont((olddata) =>
      olddata.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNotes passNote={addNote} />

      {cont.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={deleteNotes}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
