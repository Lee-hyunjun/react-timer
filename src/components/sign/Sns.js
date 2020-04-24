import React from 'react'

import userContext from '../../contexts/userContext';

import Button from '~ui/button/Button.js'

import KakaoImg from '~assets/images/kakao.png'
import NaverImg from '~assets/images/naver.png'

export default function Sns() {
  const {
    onNaverSignClick,
    onKakaoSignClick
  } = React.useContext(userContext);

  return (
    <div className="sns">
      <div className="title">SNS 연동 로그인</div>
      <div className="content">
        <Button theme="black" onClick={e => onNaverSignClick()}>
          <div className="iconBox">
            <img src={NaverImg} alt="naver logo" />
          </div>
          <span style={{
            position: 'relative',
            left: '4px'
          }}>네이버 로그인</span>
        </Button>
        <Button theme="black" onClick={e => onKakaoSignClick()}>
          <div className="iconBox">
            <img src={KakaoImg} alt="kakao logo" />
          </div>
          <span style={{
            position: 'relative',
            left: '10px'
          }}>카카오 로그인</span>
        </Button>
      </div>
    </div>
  )
}
