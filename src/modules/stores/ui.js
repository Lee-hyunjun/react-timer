export const OPEN_DIALOG = 'ui/OPEN_DIALOG';
export const CLOSE_DIALOG = 'ui/CLOSE_DIALOG';

const initState = {
  dialog: {
    sign: false
  }
}

export const openDialog = (id) => ({
  type: OPEN_DIALOG,
  payload: {
    id
  }
})

export const closeDialog = (id) => ({
  type: CLOSE_DIALOG,
  payload: {
    id
  }
})

export default function ui(state = initState, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          [action.payload.id]: true
        }
      }

    case CLOSE_DIALOG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          [action.payload.id]: false
        }
      }

    default:
      return state;
  }
}
