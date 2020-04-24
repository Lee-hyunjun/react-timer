import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';

import './sign.scss'

import { Checkbox, FormControlLabel } from '@material-ui/core'
import Input from '~ui/input/Input'
import Button from '~ui/button/Button'
import Sns from '~components/sign/Sns'

export default function SignIn({ onSubmit, onChangeType }) {
  const formik = useFormik({
    initialValues: {
      id: '',
      password: '',
      remember: '',
    },

    onSubmit
  });

  return (
    <div className="signIn">

      <div className="header">로그인</div>

      <div className="box">
        <form onSubmit={formik.handleSubmit}>
          <div className="input">
            <Input
              fullWidth
              theme="filled"
              placeholder="아이디"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
            ></Input>
          </div>
          <div className="input">
            <Input
              fullWidth
              theme="filled"
              placeholder="비밀번호"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            ></Input>
          </div>
          <Button fullWidth type="submit">로그인</Button>
          <div className="util">
            <div className="remember">
              <FormControlLabel
                control={
                  <Checkbox
                    name="remember"
                    checked={formik.values.remember}
                    onChange={formik.handleChange} />
                }
                label="계정 기억하기"
              />
            </div>
            <div className="find">
              <Link to="#">아이디/패스워드 찾기</Link>
              <Link to="#" onClick={() => {
                onChangeType('individual');
              }}>회원가입</Link>
            </div>
          </div>
        </form>
      </div>

      <Sns/>
    </div>
  )
}
