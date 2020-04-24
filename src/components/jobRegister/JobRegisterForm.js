import React from 'react'
import { Grid, Icon, Button as MuiButton } from '@material-ui/core'
import { useFormik } from 'formik'

import './jobRegister.scss'

import Input from '~ui/input/Input'
import Checkbox from '~ui/checkbox/Checkbox'
import Button from '~ui/button/Button'
import ScheduleList from '~components/scheduler/ScheduleList'
import Dialog from '~ui/dialog/Dialog'

const data = [
  {
    title: '스케쥴 01',
    startDate: '2020.05.26',
    endDate: '2020.06.24',
    schedules: [
      {
        week: 0,
        start: '08:30',
        end: '18:00'
      },
      {
        week: 2,
        start: '08:30',
        end: '18:00'
      },
      {
        week: 4,
        start: '11:00',
        end: '20:30'
      },
      {
        week: 5,
        start: '10:30',
        end: '20:00'
      }
    ]
  }
]

export default function JobRegisterForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      visiblePhone: '1',

      service1: '',
      service2: '',
      serviceMemo: '',

      addressDo: '',
      addressSi: '',
      addressGu: '',

      ageLimit: '0',
      minAge: '20',
      maxAge: '50',

      sexLimit: 'none',
      driveLimit: '1',
    },

    onSubmit
  })

  return (
    <>
      <div className="jobRegisterForm">
        <div className="rap">
          <h1>구인등록</h1>

          <section className="writerInfoForm">
            <h2>작성자 정보</h2>

            <Input
              label="성명"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
            />
            <Input
              label="연락처"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              adornment={{
                end: {
                  type: 'button',
                  icon: 'phonelink_setup',
                  text: '번호변경',
                  onClick: () => {}
                }
              }}
              fullWidth
            />

            <Grid container spacing={4}>
              <Grid className="helperText" item md={3}>
                <em>+</em>연락처 노출을 원하시나요?
              </Grid>

              <Grid item md={2}>
                <Checkbox
                  label="예"
                  checked={formik.values.visiblePhone === '1'}
                  onChange={_ => formik.setFieldValue('visiblePhone', '1')}
                />
              </Grid>

              <Grid item md={2}>
                <Checkbox
                  label="아니요"
                  checked={formik.values.visiblePhone === '0'}
                  onChange={_ => formik.setFieldValue('visiblePhone', '0')}
                />
              </Grid>
            </Grid>
          </section>

          <section>
            <h2>구인 조건</h2>
            
            <MuiButton
              className="addButton"
              variant="contained"
              color="primary"
              startIcon={<Icon>control_point</Icon>}
              fullWidth
            >
              스케쥴 추가
            </MuiButton>

            <ScheduleList data={data} />

            <Grid className="gridForm" container spacing={2}>

              {/* 요청 서비스 */}
              <Grid className="formLabel" item md={4}>
                요청 서비스
              </Grid>

              <Grid item md={4}>
                <Input
                  name="service1"
                  value={formik.values.service1}
                  onChange={formik.handleChange}
                  placeholder="서비스1"
                  fullWidth
                />
              </Grid>

              <Grid item md={4}>
                <Input
                  name="service2"
                  value={formik.values.service2}
                  onChange={formik.handleChange}
                  placeholder="서비스2"
                  fullWidth
                />
              </Grid>

              <Grid item md={4}></Grid>

              <Grid item md={8}>
                <Input
                  name="serviceMemo"
                  value={formik.values.serviceMemo}
                  onChange={formik.handleChange}
                  placeholder="추가 설명 필요시 작성해주세요."
                  fullWidth
                />
              </Grid>


              <div className="marginDivider" />


              {/* 지역선택 */}
              <Grid className="formLabel" item md={4}>
                지역선택
              </Grid>

              <Grid item md={8}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Input
                      name="addressDo"
                      onChange={formik.handleChange}
                      value={formik.values.addressDo}
                      label="도"
                      fullWidth
                    />
                  </Grid>

                  <Grid item md={4}>
                    <Input
                      name="addressSi"
                      onChange={formik.handleChange}
                      value={formik.values.addressSi}
                      label="시"
                      fullWidth
                    />
                  </Grid>

                  <Grid item md={4}>
                    <Input
                      name="addressGu"
                      onChange={formik.handleChange}
                      value={formik.values.addressGu}
                      label="구"
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Grid>


              <div className="marginDivider" />


              {/* 선호연령 */}
              <Grid className="formLabel" item md={4}>
                선호연령
              </Grid>

              <Grid item md={8}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Checkbox
                      label="제한없음"
                      checked={formik.values.ageLimit === "0"}
                      onChange={_ => formik.setFieldValue('ageLimit', '0')}
                    />
                  </Grid>

                  <Grid className="ageRangeGrid" item md={8}>
                    <Checkbox
                      label="있음"
                      checked={formik.values.ageLimit === "1"}
                      onChange={_ => formik.setFieldValue('ageLimit', '1')}
                    />
                    {
                      formik.values.ageLimit === '1' && (
                        <div className="ageRange">
                          <Input
                            name="minAge"
                            onChange={formik.handleChange}
                            value={formik.values.minAge}
                            fullWidth
                          />
                          <span>~</span>
                          <Input
                            name="maxAge"
                            onChange={formik.handleChange}
                            value={formik.values.maxAge}
                            fullWidth
                          />
                        </div>
                      )
                    }
                  </Grid>
                </Grid>
              </Grid>


              <div className="marginDivider" />


              {/* 성별제한 */}
              <Grid className="formLabel" item md={4}>
                성별제한
              </Grid>

              <Grid item md={8}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Checkbox
                      label="없음"
                      checked={formik.values.sexLimit === "none"}
                      onChange={_ => formik.setFieldValue('sexLimit', 'none')}
                    />
                  </Grid>

                  <Grid item md={4}>
                    <Checkbox
                      label="남자"
                      checked={formik.values.sexLimit === "male"}
                      onChange={_ => formik.setFieldValue('sexLimit', 'male')}
                    />
                  </Grid>

                  <Grid item md={4}>
                    <Checkbox
                      label="여자"
                      checked={formik.values.sexLimit === "female"}
                      onChange={_ => formik.setFieldValue('sexLimit', 'female')}
                    />
                  </Grid>
                </Grid>
              </Grid>


              <div className="marginDivider" />


              {/* 운전여부 */}
              <Grid className="formLabel" item md={4}>
                운전여부
              </Grid>

              <Grid item md={8}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Checkbox
                      label="필요"
                      checked={formik.values.driveLimit === "1"}
                      onChange={_ => formik.setFieldValue('driveLimit', '1')}
                    />
                  </Grid>

                  <Grid item md={8}>
                    <Checkbox
                      label="활동지원사 차량 필요"
                      checked={formik.values.driveLimit === "2"}
                      onChange={_ => formik.setFieldValue('driveLimit', '2')}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={4}></Grid>

              <Grid item md={8}>
                <Checkbox
                  label="불필요"
                  checked={formik.values.driveLimit === "0"}
                  onChange={_ => formik.setFieldValue('driveLimit', '0')}
                />
              </Grid>


              <div className="marginDivider" />


              {/* 경력자만 */}
              <Grid className="formLabel" item md={4}>
                선호연령
              </Grid>

              <Grid item md={8}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <Checkbox label="예" defaultChecked />
                  </Grid>

                  <Grid item md={8}>
                    <Checkbox label="제한없음" />
                  </Grid>
                </Grid>
              </Grid>

            </Grid>
          </section>
          
          <div className="registerButtonBox">
            <Button fullWidth>등록완료</Button>
          </div>
        </div>
      </div>
    </>
  )
}
