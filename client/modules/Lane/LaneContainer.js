import { connect } from 'react-redux';
import Lane from './Lane';
import * as laneActions from './LaneActions';
import { createLaneRequest, fetchLanes, deleteLaneRequest } from '../Lane/LaneActions';
import { deleteLane, updateLane, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';


const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane,
  addNote: createNoteRequest,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
