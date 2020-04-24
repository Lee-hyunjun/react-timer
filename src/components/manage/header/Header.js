import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import produce from 'immer'
import clsx from 'clsx'

import './header.scss'
import LogoText from '~assets/images/logo-text.png'

const MenuData = [
  {
    link: '/manage',
    name: 'HOME',
    list: []
  },
  {
    link: '/manage/support/add',
    name: '활동지원사',
    list: [
      {
        link: '/manage/support/add',
        name: '활동지원사 등록'
      },
      {
        link: '/manage/support/list',
        name: '활동지원사 리스트'
      }
    ]
  },
  {
    link: '/manage/service/add',
    name: '서비스내역',
    list: [
      {
        link: '/manage/service/add',
        name: '전자바우처내역 등록'
      },
      {
        link: '/manage/service/manage',
        name: '추가 서비스내역 관리'
      },
      {
        link: '/manage/service/list',
        name: '서비스내역 조회'
      }
    ]
  },
  {
    link: '/manage/serious/add',
    name: '기타수당',
    list: [
      {
        link: '/manage/serious/add',
        name: '중증가산수당 등록'
      },
      {
        link: '/manage/serious/list',
        name: '중증가산수당 조회'
      },
      {
        link: '/manage/transfee/add',
        name: '원거리교통비 등록'
      },
      {
        link: '/manage/transfee/list',
        name: '원고리교통비 조회'
      }
    ]
  },
  {
    link: '/manage/insurance/add',
    name: '사회보험',
    list: [
      {
        link: '/manage/insurance/add',
        name: '사회보험 EDI'
      },
      {
        link: '/manage/insurance/list',
        name: '사회보험 EDI조회'
      },
      {
        link: '/manage/integration/add',
        name: '사회보험 통합징수포털 등록'
      },
      {
        link: '/manage/integration/list',
        name: '사회보험 통합징수포털 조회'
      },
      {
        link: '/manage/reginfo/list',
        name: '사회보험 가입정보 관리'
      }
    ]
  },
  {
    link: '/manage/salary/calc1',
    name: '급여관리',
    list: [
      {
        link: '/manage/salary/calc1',
        name: '비포괄임금제 계산'
      },
      {
        link: '/manage/salary/calc2',
        name: '포괄임금제 계산'
      },
      {
        link: '/manage/salary/statement',
        name: '급여명세 관리'
      },
      {
        link: '/manage/salary/notice',
        name: '급여대장'
      },
      {
        link: '/manage/salary/other',
        name: '기타 급여'
      }
    ]
  },
]

export default function Header() {
  const [state, setState] = useState({
    activeMenu: -1,
    activeSubMenu: ''
  })

  useEffect(() => {
    const path = window.location.pathname
    let active = -1
    
    MenuData.map((item, i) => {
      if (item.link === path) {
        active = i
      } else {
        item.list.map((child, c) => {
          if (child.link === path) {
            active = i
          }
        })
      }
    })
  
    setState(produce(v => {
      v.activeMenu = active
      v.activeSubMenu = window.location.pathname
    }))
  }, [window.location.pathname])

  return (
    <header className="header">
      <div className="left">
        {/* <Link to="/manage" className="logoBox bgGradient">HARMONIUM</Link> */}
        <Link to="/manage"><img src={LogoText} alt="logo" /></Link>
      </div>
      <div className="right">
        <div className="mainMenuList">
          
          {MenuData.map((item, i) => (
            <div 
              key={i} 
              className={clsx("item", state.activeMenu === i ? 'active' : '')}
            >
              <Link to={item.link}>{item.name}</Link>

              <div className="subMenu">
                {item.list.map((child, k) => (
                <Link className={child.link === state.activeSubMenu ? 'active' : ''} key={k} to={child.link}>{child.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="info">
          <div className="userInfo">윤지홍님 환영합니다</div>
          <div className="logout bgGradient">로그아웃</div>
        </div>
      </div>
    </header>
  )
}
