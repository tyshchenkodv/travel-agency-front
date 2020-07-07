import { combineReducers } from 'redux';

import event from './event';
import events from './events';

export default () => combineReducers({
    event,
    events,
});
