
import { addNewEmptyNte, savingNewNote, setActiveNote, setNotes } from "./journalSlice";



const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    // const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes` ) );
    // await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNte(newNote));
    dispatch(setActiveNote(newNote));

  }
}

export default startNewNote;