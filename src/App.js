import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNotes from './CreateNotes';
import Note from './Note';

const App = () => {
  return (
    <>
      <Header />
      <CreateNotes />
      <Note/>
      <Footer />
    </>
  );
};

export default App;
