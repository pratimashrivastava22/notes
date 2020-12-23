import { SAVE_NOTE, DELETE_NOTE, UPDATE_NOTES_ERROR } from '../Actions/Notes';
const initialState = {
  notes: [],
  updateNotesError: null,
  updateNotesSuccess: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_NOTE:
      let notes = [...state.notes, action.payload];
      return { ...state, notes, updateNotesError: null };
    case DELETE_NOTE:
      const notesData = state.notes.filter(n => n.id !== action.payload.deleteNoteId)
      return { ...state, notes: notesData };
    case UPDATE_NOTES_ERROR:
      return { ...state, updateNotesError: action.payload};
    default:
      return state;
  }
}