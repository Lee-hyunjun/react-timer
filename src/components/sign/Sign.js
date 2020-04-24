import React from 'react'

import userContext from '../../contexts/userContext';

import SignIn from '~components/sign/SignIn'
import Individual from '~components/sign/Individual'
import Company from '~components/sign/Company'

import './sign.scss'

export default function Sign() {
  const {
    state: { sign },
    onSignUpTypeChange,
    onSignInSubmit,
    onSignUpSubmit,
    signIndividualStep,
    signCompanyStep,
  } = React.useContext(userContext);

  return (
    <div className="signContent">
      {sign.type === 'login' && (
        <>
          <SignIn
            onSubmit={onSignInSubmit}
            onChangeType={onSignUpTypeChange}
          />
        </>
      )}
      {(sign.type === 'individual' || sign.type === 'company') && (
        <>
          <div className="tab">
            <div className={sign.type === 'individual' ? 'active' : ''} onClick={() => {
              onSignUpTypeChange('individual');
            }}>개인회원</div>
            <div className={sign.type === 'company' ? 'active' : ''} onClick={() => {
              onSignUpTypeChange('company');
            }}>기관회원</div>
          </div>

          {sign.type === 'individual' && (
            <Individual
              onSubmit={onSignUpSubmit}
              step={signIndividualStep}
            />
          )}

          {sign.type === 'company' && (
            <Company
              onSubmit={onSignUpSubmit}
              step={signCompanyStep}
            />
          )}
        </>
      )}
    </div>
  )
}
