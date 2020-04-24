import React from 'react';
import { Link } from 'react-router-dom'

import './footer.scss'

import FooterLogo from '../../assets/images/footerLogo.png'
import Footer1 from '../../assets/images/footer1.png'
import Footer2 from '../../assets/images/footer2.png'
import Footer3 from '../../assets/images/footer3.png'

export default function UserFooter() {
  return (
    <footer className="userFooter">
      <div className="topLinks rap">
        <Link to="#">회사소개</Link>
        <Link to="#">광고문의</Link>
        <Link to="#">제휴문의</Link>
        <Link to="#">이용약관</Link>
        <Link to="#"><strong>개인정보처리방침</strong></Link>
        <Link to="#">1:1문의</Link>
      </div>
      <div className="contents rap">
        <div className="logo">
          <img src={FooterLogo} alt="logo" />
        </div>
        <div className='text'>
          <p>
            <span>고객센터 0000-0000 (평일 09:00 ~ 19:00 토요일 09:00 ~ 15:00)</span>
            <span>FAX 000-0000-0000</span>
            <span>Email help@harmonyum.com</span>
          </p>
          <p>
            <span>서울시 서초구 서초대로 000 00빌딩 16~18층</span>
            <span>하모니움 대표 : 000 사업자등록번호 : 000-00-0000</span>
            <span>통신판매업 신고번호 : 2020-서울서초-0287</span>
          </p>
          <p><span>직업정보제공사업 신고번호 : 00청 제2020-00호</span></p>
        </div>
        <button className="topBtn">Top</button>
      </div>
      <div className='btm rap'>
        <img src={Footer1} alt="footer" />
        <img src={Footer2} alt="footer" />
        <img src={Footer3} alt="footer" />
      </div>
    </footer>
  )
}
