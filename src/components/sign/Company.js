import React from 'react'
import { useFormik } from 'formik'

import Button from '~ui/button/Button'
import SignFooter from '~components/sign/SignFooter'
import Input from '~ui/input/Input'

import { MenuItem, Select, Icon } from '@material-ui/core'

export default function Individual({ onSubmit, step }) {
  const formik = useFormik({
    initialValues: {
      kind: 'company',
      type: '1',
      companyAuth: '',
      companyName: '',
      companyOwner: '',
      companyAddress1: '',
      companyAddress2: '',
      companyAddress3: '',

      manager: '',
      id: '',
      password: '',
      passwordConfirm: '',
      email: '',
      phone: '',
      fax: '',

      tac1: false,
      tac2: false
    },

    onSubmit
  })

  return (
    <>
      <div className="company">
        {step.value === 1 && (
          <>
            <div className="sign-info">
              제공 기관인 경우 <br/>
              기업회원으로 가입하시기 바랍니다.
            </div>
            <div className="regBtn">
              <Button onClick={() => {
                step.setStep(2)
              }}>기업회원 가입하기</Button>
            </div>
          </>
        )}
        {step.value === 2 && (
          <div className="form">
            <div className="select">
              <Select
                value={formik.values.type}
                name="type"
                onChange={formik.handleChange}
                fullWidth
              >
                <MenuItem value="1">기업형태</MenuItem>
                <MenuItem value="2">기업 - 1</MenuItem>
                <MenuItem value="3">기업 - 2</MenuItem>
              </Select>
            </div>
            <Input
              fullWidth
              name="companyAuth"
              value={formik.values.companyAuth}
              label="기업인증"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="companyName"
              value={formik.values.companyName}
              label="회사명"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="companyOwner"
              value={formik.values.companyOwner}
              label="대표자명"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="companyAddress1"
              value={formik.values.companyAddress1}
              label="주소검색"
              onChange={formik.handleChange}
              adornment={{
                end: {
                  type: 'button',
                  icon: 'search',
                  text: '보내기',
                  onClick: () => alert('hi')
                }
              }}
            />
            <Input
              fullWidth
              name="companyAddress2"
              value={formik.values.companyAddress2}
              label="도로명 / 지번 주소 자동입력"
            />
            <Input
              fullWidth
              name="companyAddress3"
              value={formik.values.companyAddress3}
              label="상세 주소 입력"
              onChange={formik.handleChange}
            />
          </div>
        )}
        {step.value === 3 && (
          <div className="form">
            <Input
              fullWidth
              name="manager"
              value={formik.values.manager}
              label="담당자명"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="id"
              value={formik.values.id}
              label="아이디"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="password"
              value={formik.values.password}
              label="비밀번호"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="passwordConfirm"
              value={formik.values.passwordConfirm}
              label="비밀번호 확인"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="email"
              value={formik.values.email}
              label="이메일"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="phone"
              value={formik.values.phone}
              label="전화번호"
              onChange={formik.handleChange}
            />
            <Input
              fullWidth
              name="fax"
              value={formik.values.fax}
              label="팩스"
              onChange={formik.handleChange}
            />
          </div>
        )}
      </div>

      <div className="nextStep">
        {step.value === 2 && 
          <Button fullWidth onClick={() => {
            step.setStep(3);
          }}>다음단계 <Icon>arrow_forward</Icon></Button>
        }
        {step.value === 3 && <Button fullWidth>기업 회원가입 완료</Button>}
      </div>

      {step.value === 1 && (
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
