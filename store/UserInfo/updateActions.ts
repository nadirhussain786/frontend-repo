import { START_UPDATE, UPDATE_FAILURE, UPDATE_SUCCESS } from "./updateTypes";

export const startUpdate = () => ({
  type: START_UPDATE,
});

export const updateSuccess = (message : string) => ({
  type: UPDATE_SUCCESS,
  payload: message,
});

export const updateFailure = (message : string) => ({
  type: UPDATE_FAILURE,
  payload: message,
});
