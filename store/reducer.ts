import { combineReducers } from 'redux';
import updateReducer from './UserInfo/updateReducer';

const rootReducer = combineReducers({
    update: updateReducer,
});

export default rootReducer;
