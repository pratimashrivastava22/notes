import React, { useState } from 'react';
import BaseButton from '../Base/Button';
import NotesList from './List';
import { bindActionCreators } from 'redux';
import { saveNote, deleteNote } from '../../Actions/Notes';
import { connect } from 'react-redux';
import TextInput from '../Base/TextInput';
import { TextareaAutosize } from '@material-ui/core';

const Notes = ({ notes, saveNote, deleteNote }) => {
  const [title, setTitle] = useState(null);
  const [note, setNote] = useState(null);

  const save = (e) => {
    e.preventDefault();
    saveNote({ title, note, id: Math.floor(Math.random() * 10000000) })
  };

  return (
    <>
      <div className='p10 bg-grey'>G Notes</div>
      <div className='flex-row p10'>
        <NotesList notes={notes} deleteNote={deleteNote} />
        <form className='w60p flex-col' onSubmit={save}>
          <div>
            <TextInput
              id='title'
              label='Title'
              onChange={(e) => setTitle(e.target.value)}
            />
            <h2>Body :</h2>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={10}
              onChange={(e) => setNote(e.target.value)}
              id='body'
              className='w100p'
            />
          </div>
          <BaseButton
            text='Save'
            type='submit'
            className='align-right'
          />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const { notes } = state.notesState;
  return { notes };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  { saveNote, deleteNote }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Notes);