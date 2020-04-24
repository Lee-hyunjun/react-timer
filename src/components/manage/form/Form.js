import React from 'react'
import clsx from 'clsx'

import { Input, Icon, FormControl, FormLabel, Checkbox, FormGroup, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import Button from '~ui/button/Button'

import './form.scss'

/* 

  data = [
    [
      {
        label: '이름',
        required: true,
        info: '이름을 반드시 입력해주세요',
        content: [
          {
            type: 'input',
            placeholder: '이름을 입력해주세요',
            regExp: '',
            onChange: () => {}
          }
        ],
        style: {}
      },
      {
        label: '성별',
        required: true,
        info: '',
        content: [
          {
            type: 'radio',
            placeholder: '테스트',
            regExp: '',
            onChange: () => {}
          }
        ]
      },
    ],
  ]
*/
// type = default || column
export default function Form({ type="default", title = '', data = [], saveTxt = '저장', save = () => {}, saveType="default", footer = "", reset=false, remove=false }) {
  return (
    <div className="form">
      <div className="title">{title}</div>

      <div className={clsx("list", type)}>
        {data.map((item, i) => (
          <>
          {!item.length ? '' : (
            <div key={i} className="item">
              {item.map((v, c) => (
                <div 
                  key={c}
                  className={clsx("field", v.required ? 'required' : '')}
                  style={{
                    width: type === 'default' ? 100/item.length+"%" : 100+"%"
                  }}
                >
                  <div className="label">
                    {v.label}
                    <span className='req'>{v.required ? '*' : ''}</span>
                  </div>
                  <div className="ibox">
                    <div className="list" style={v.style}>
                      {v.type === 'radio' && (
                        <RadioGroup 
                          name="gender1" 
                          onChange={v.onChange ? v.onChange : () => {}}
                          style={{
                            width: '100%',
                          }}
                        >
                          {v.content.map((value, k) => (
                            <FormControlLabel key={k} value={value} control={<Radio />} label={value} />
                          ))}
                        </RadioGroup>
                      )}
                      
                      {v.type === 'checkbox' && (
                        <FormGroup 
                          name="gender1" 
                          value={v.content[0]} 
                          onChange={v.onChange ? v.onChange : () => {}}
                          style={{
                            width: '100%',
                          }}
                        >
                          {v.content.map((v, k) => (
                            <FormControlLabel
                              control={<Checkbox onChange={v.onChange} name={v.name} />}
                              label={v.value}
                              key={k}
                            />
                          ))}
                        </FormGroup>
                      )}
                      
                      {['radio', 'checkbox'].indexOf(v.type) === -1 && (
                        v.content.map((content, k) => (
                          <div 
                            key={k}
                            style={{
                              width: 100 / v.content.length + "%",
                            }}
                            {...content.prop}
                          >
                            {content.type === 'input' && (
                              <>
                                {content.label && (<span style={{fontSize: '12px'}}>{content.label}</span>)}
                                {content.value ? (
                                  <Input 
                                    placeholder={content.placeholder}
                                    fullWidth
                                    onChange={content.onChange ? content.onChange : () => {}}
                                    disabled={content.disabled}
                                    value={content.value}
                                  />
                                ) : (
                                  <Input 
                                    placeholder={content.placeholder}
                                    fullWidth
                                    onChange={content.onChange ? content.onChange : () => {}}
                                    disabled={content.disabled}
                                  />
                                )}
                              </>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                    {v.info && (
                      <div className="info">
                        <Icon>info</Icon>
                        {v.info}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          </>
        ))}
      </div>
      <div>{footer}</div>
      <div className={clsx("save", saveType === "relative" ? 'relative' : '', reset ? 'reset' : '')}>
        <Button fullWidth onClick={save}>{saveTxt}</Button>
        {reset ? (<Button fullWidth onClick={save}>초기화</Button>) : ''}
        {remove ? (<Button fullWidth onClick={save}>삭제</Button>) : ''}
      </div>
    </div>
  )
}
