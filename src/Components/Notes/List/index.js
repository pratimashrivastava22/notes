import React from 'react';

const NotesList = ({ notes, deleteNote }) => {
  return (
    <div className='w30p grey-brd'>
      {(notes && notes.length > 0) ? notes.map((note, index) => <div className='p10' key={index}>
        <div className='flex-row'>
          <div className='w60p'>{note.title}</div>
          <div onClick={() => deleteNote({ deleteNoteId: note.id})}>
            X
          </div>
        </div>
        <div>{note.note}</div>
        <hr/>
      </div>)
      : <div className='w30p p10'>Note list is empty.</div>}
    </div>
  );
};

export default NotesList;