import { createAction, handleActions } from 'redux-actions';
import produce from 'immer'

const CHANGE_TYPE = 'sign/CHANGE_TYPE';
const SET_INDIVIDUAL_STEP = 'sign/SET_INDIVIDUAL_STEP';
const SET_COMPANY_STEP = 'sign/SET_COMPANY_STEP';

const initState = {
  type: 'login',
  individualStep: 1,
  companyStep: 1,
}

export const changeType = createAction(CHANGE_TYPE, (type) => ({
  type
}))

export const setIndividualStep = createAction(SET_INDIVIDUAL_STEP, (step) => ({
  step
}))

export const setCompanyStep = createAction(SET_COMPANY_STEP, (step) => ({
  step
}))

export default handleActions(
  {
    [CHANGE_TYPE]: (state, action) => {
      return produce(state, draft => {
        draft.type = action.payload.type
      })
    },
    [SET_INDIVIDUAL_STEP]: (state, action) => {
      return produce(state, draft => {
        draft.individualStep = action.payload.step;
      })
    },
    [SET_COMPANY_STEP]: (state, action) => {
      return produce(state, draft => {
        draft.companyStep = action.payload.step;
      })
    },
  },

  initState
)
