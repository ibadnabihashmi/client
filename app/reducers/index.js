import { combineReducers } from 'redux';
import messages from './messages';
import todos from './todos';

export default combineReducers({
  messages,
  todos
});
