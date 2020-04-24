import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import useDialog from '../hooks/useDialog';
import useProcess from '../hooks/useProcess';

import { setIndividualStep, setCompanyStep, changeType } from '../modules/stores/sign';

const userContext = React.createContext({});

export default userContext;

export function Provider({ children }) {
  const dispatch = useDispatch();
  const state = useSelector(state => ({
    sign: state.sign
  }), shallowEqual);

  const signDialog = useDialog('sign');
  
  const signIndividualStep = useProcess(state.sign.individualStep, value => {
    dispatch(setIndividualStep(value))
  }, 2)

  const signCompanyStep = useProcess(state.sign.companyStep, value => {
    dispatch(setCompanyStep(value))
  }, 2)

  const onSignInSubmit = React.useCallback(value => {
  }, [])

  const onSignUpSubmit = React.useCallback(value => {
  }, [])

  const onNaverSignClick = React.useCallback(_ => {
    alert('naver login');
  }, [])

  const onKakaoSignClick = React.useCallback(_ => {
    alert('kakao login');
  }, [])

  const onSignUpTypeChange = React.useCallback(type => {
    console.log(type);
    dispatch(changeType(type));
  }, [dispatch])

  return (
    <userContext.Provider value={{
        state,
        signDialog,

        onSignInSubmit,
        onSignUpSubmit,
        onNaverSignClick,
        onKakaoSignClick,
        onSignUpTypeChange,

        signIndividualStep,
        signCompanyStep
    }}>
      {children}
    </userContext.Provider>
  )
}