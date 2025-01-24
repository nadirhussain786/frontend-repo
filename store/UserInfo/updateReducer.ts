import { START_UPDATE, UPDATE_FAILURE, UPDATE_SUCCESS } from "./updateTypes";

const initialState = {
  status: 'idle', // idle | loading | succeeded | failed
  message: '',
};

const updateReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case START_UPDATE:
      return {
        ...state,
        status: 'loading',
        message: 'Updating...',
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        status: 'succeeded',
        message: action.payload || 'Update successful!',
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        status: 'failed',
        message: action.payload || 'Update failed!',
      };
    default:
      return state;
  }
};

export default updateReducer;
