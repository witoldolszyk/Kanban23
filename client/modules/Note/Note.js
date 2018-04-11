import React, { PropTypes } from 'react';
import Note from './Note';
import styles from './Notes.css';
import Edit from '../../components/Edit';


const Notes = ({ notes, laneId, editNote, updateNote, deleteNoteRequest }) => {
  return (<ul className={styles.notes}>{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
      editing={note.editing}
    >
      <Edit
        editing={note.editing}
        value={note.task}
        onValueClick={() => editNote(note.id)}
        onUpdate={(task) => updateNote({
          ...note,
          task,
          editing: false,
      }
    )}
        onDelete={() => deleteNoteRequest(note.id, laneId)}
      />
    </Note>
  )}</ul>);
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  notes: PropTypes.array,
  deleteNoteRequest: PropTypes.func,
};

export default Notes;
