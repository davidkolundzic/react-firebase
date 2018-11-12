import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from "./eventConstant";

export const createEvent = (event) => ({
  type: CREATE_EVENT,
  payload: {
      event
  }
})

export const updateEvent = (event) => ({
  type: UPDATE_EVENT,
  payload: {event}
})

export const deleteEvent= (eventId) => ({
  type: DELETE_EVENT,
  payload: {eventId}
})

