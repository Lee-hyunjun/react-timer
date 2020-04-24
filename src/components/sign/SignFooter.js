import React from 'react'

import AddIcon from '@material-ui/icons/Add';
import Checkbox from '~ui/checkbox/Checkbox'

export default function SignFooter({ value, handleChange, handleAllCheckChange }) {
  console.log(value);
  return (
    <div className="signInFooter">
      <div className="top agree">
        <div>
          <Checkbox 
            checked={value.tac1 && value.tac2} 
            onChange={handleAllCheckChange} 
            label={<>필수 동의 항목 및 이벤트 및 프로모션 메일 수신(선택)에 <br/> 모두 동의합니다.</>}
          />
        </div>
      </div>
      <div className="agree">
        <div>
          <Checkbox 
            checked={value.tac1} 
            onChange={handleChange}
            name="tac1"
            label={<p>이용약관 및 개인정보 취급 방식 동의[필수]</p>}
          />
        </div>
        <div className="add">
          <AddIcon/>
        </div>
      </div>
      <div className="agree">
        <div>
          <Checkbox 
            checked={value.tac2} 
            onChange={handleChange} 
            name="tac2"
            label={<p>이벤트 및 프로모션 메일 수신 [선택]</p>}
          />
        </div>
        <div className="add">
          <AddIcon/>
        </div>
      </div>
    </div>
  )
}
