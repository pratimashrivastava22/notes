import { makeActionCreator } from './index';
export const SAVE_NOTE = 'SAVE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTES_SUCCESS = 'UPDATE_NOTES_SUCCESS';
export const UPDATE_NOTES_ERROR = 'UPDATE_NOTES_ERROR';

export const saveNote = makeActionCreator(SAVE_NOTE);
export const deleteNote = makeActionCreator(DELETE_NOTE);
export const updateNotesSuccess = makeActionCreator(UPDATE_NOTES_SUCCESS);
export const updateNotesError = makeActionCreator(UPDATE_NOTES_ERROR);
