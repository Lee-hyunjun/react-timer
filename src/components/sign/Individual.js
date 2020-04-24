import React, { useState } from 'react'
import produce from 'immer'
import { useFormik } from 'formik';

import Button from '~ui/button/Button.js'
import Sns from '~components/sign/Sns'
import Input from '~ui/input/Input'
import SignFooter from '~components/sign/SignFooter'

export default function Individual({ onSubmit }) {
  const [state, setState] = useState({
    step: 1,
  })
  const formik = useFormik({
    initialValues: {
      kind: 'individual',
      name: '',
      userId: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phone: '',
      phoneCode: '',
      phoneMsgChk: false,
      tac1: false,
      tac2: false,
    },

    onSubmit
  })

  return (
    <>
      <div className="individual">
        {state.step === 1 && (
          <>
            <div className="sign-info">
              장애인 및 활동지원사 이신 분들인 경우 <br/>
              개인회원으로 가입하시기 바랍니다.
            </div>
            <div className="regBtn">
              <Button onClick={() => {
                setState(produce(v => {
                  v.step = 2
                }))
              }}>개인회원 가입하기</Button>
            </div>
            <Sns/>
          </>
        )}

        {state.step === 2 && (
          <form onSubmit={formik.handleSubmit} className="form">
            <Input
              fullWidth
              label="성명"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              label="아이디"
              name="userId"
              value={formik.values.userId}
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              label="비밀번호 (알페벳/숫자/특수기호 포함 8자 이상)"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              label="비밀번호 확인"
              name="passwordConfirm"
              value={formik.values.passwordConfir}
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              label="이메일"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              label="휴대폰 본인 인증"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              adornment={{
                end: {
                  type: 'button',
                  icon: 'mobile_friendly',
                  text: '보내기',
                  onClick: () => alert('hi')
                }
              }}
            />
            <Input
              fullWidth
              label="인증번호 입력"
              name="phoneCode"
              value={formik.values.phoneCode}
              onChange={formik.handleChange}
              adornment={{
                end: {
                  type: 'button',
                  icon: 'beenhere',
                  text: '인증확인',
                  onClick: () => alert('hi')
                }
              }}
            />
          </form>
        )}
      </div>

      {state.step === 2 && (
        <Button
          fullWidth
          style={{height: '7.5rem', fontSize: '1.8rem'}}
        >개인회원 가입하기</Button>
      )}

      {state.step === 1 && (
        <SignFooter 
          value={formik.values}
          handleChange={formik.handleChange}
          handleAllCheckChange={(e) => {
            formik.setValues({
              ...formik.values,
              tac1: e.target.checked,
              tac2: e.target.checked,
            })
          }}
        />
      )}
    </>
  )
}
