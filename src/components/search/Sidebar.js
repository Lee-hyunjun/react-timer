import React from 'react';
import { Tabs, Tab, Menu, MenuItem } from '@material-ui/core';

import whiteTextLogo from '~assets/images/logo-text--white.png';
import companyLogo1 from '~assets/images/company/logo1.png';
import companyLogo2 from '~assets/images/company/logo2.png';
import companyLogo3 from '~assets/images/company/logo3.png';
import homeIcon from '~assets/images/home.svg';
import jobIcon from '~assets/images/job.svg';
import providerIcon from '~assets/images/provider.svg';
import messageIcon from '~assets/images/message.svg';
import communityIcon from '~assets/images/community.svg';

import './sidebar.scss';

import Input from '~ui/input/Input';
import List from '~ui/list/List';
import { HorizontalItem } from '~ui/list/ListItem';
import SendNoteDialog from '~components/note/SendNoteDialog'

export default function SearchSidebar() {

  return (
    <div className="map-sidebar">
      <SearchSidebarHeader />
      <SearchSidebarTab />
      <SearchSidebarBody />
      <SendNoteDialog />
    </div>
  )
}

function SearchSidebarHeader() {
  // 임시용 나중에 한번에 처리해야함
  const [open, setOpen] = React.useState(null);

  return (
    <div className="header">
      <div className="nav">
        <img src={whiteTextLogo} alt="로고 이미지" />

        <button
          className="more"
          onClick={e => setOpen(e.currentTarget)}
          aria-controls="simple-menu"
          aria-haspopup="true"
        >
          <span className="material-icons">more_horiz</span>
        </button>
        <Menu
          id="simple-menu"
          anchorEl={open}
          keepMounted
          open={Boolean(open)}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          onClose={() => setOpen(null)}
        >
          <MenuItem><img src={homeIcon} alt="icon" /> Home</MenuItem>
          <MenuItem><img src={jobIcon} alt="icon" /> 구인/구직</MenuItem>
          <MenuItem><img src={providerIcon} alt="icon" /> 제공 기관</MenuItem>
          <MenuItem><img src={messageIcon} alt="icon" /> 메시지함</MenuItem>
          <MenuItem><img src={communityIcon} alt="icon" /> 커뮤니티</MenuItem>
        </Menu>
      </div>

      <div className="search">
        <Input
          className="keyword-input"
          theme="shadow"
          adornment={{
            end: {
              type: 'icon',
              icon: 'search'
            }
          }}
          fullWidth
        />
        <p className="info">제공기관, 활동보조인, 장애인 검색 서비스</p>
      </div>
    </div>
  )
}

function SearchSidebarTab() {
  return (
    <div className="tab">
      <Tabs value={0}>
        <Tab label="전체"/>
        <Tab label="기관"/>
        <Tab label="보조인"/>
        <Tab label="장애인"/>
      </Tabs>
    </div>
  )
}

function SearchSidebarBody() {
  return (
    <div className="body">
      <div className="result-text">
        <p className="result"><span className="highlight">‘OOOO’</span>의 검색 결과 총 <span className="highlight">24</span>건</p>
        <p className="sort"><span>거리순 노출</span></p>
      </div>
      <div className="result-list">
        <SearchSidebarList items={[
          {
            id: 1,
            image: companyLogo1,
            title: '마켓플레이스',
            phone: '010-1234-5678',
            address: '서울특별시 안촌로 1길 87 우리빌딩 201호',
            website: 'https://naver.com',
            info: '증상이 없는 이들도 검사를 받을 수 있도록 하고 신속하게 검사를 진행하기 위해 드라이브 스루 방식을 채택했다는 의미다.'
          },
          {
            id: 2,
            image: companyLogo2,
            title: 'MOON',
            phone: '010-1234-5678',
            address: '서울특별시 안촌로 1길 87 우리빌딩 201호',
            website: 'https://naver.com',
            info: '증상이 없는 이들도 검사를 받을 수 있도록 하고 신속하게 검사를 진행하기 위해 드라이브 스루 방식을 채택했다는 의미다.'
          },
          {
            id: 3,
            image: companyLogo3,
            title: '프로젝트G',
            phone: '010-1234-5678',
            address: '서울특별시 안촌로 1길 87 우리빌딩 201호',
            website: 'https://naver.com',
            info: '증상이 없는 이들도 검사를 받을 수 있도록 하고 신속하게 검사를 진행하기 위해 드라이브 스루 방식을 채택했다는 의미다.'
          },
          {
            id: 4,
            image: companyLogo1,
            title: '프로젝트G',
            phone: '010-1234-5678',
            address: '서울특별시 안촌로 1길 87 우리빌딩 201호',
            website: 'https://naver.com',
            info: '증상이 없는 이들도 검사를 받을 수 있도록 하고 신속하게 검사를 진행하기 위해 드라이브 스루 방식을 채택했다는 의미다.'
          }
        ]} />
      </div>
    </div>
  )
}

function SearchSidebarList({ items = [] }) {
  return (
    <>
      <List direction="vertical">
        {items.map((item, key) => (
          <SearchSidebarListItem
            {...item}
            key={key}
            eachIndex={key}
            isActive={item.id === 2}
          />
        ))}
      </List>
    </>
  )
}

function SearchSidebarListItem({ id, image, title, phone, address, website, info, eachIndex, isActive }) {
  return (
    <HorizontalItem
      className={isActive ? 'active' : ''}
      badge={eachIndex + 1}
      image={image}
      title={title}
      info={
        isActive ? (
          <>
            <p className="line"><span>제공기관</span> <span className="highlight">{phone}</span></p>
            <p>{address}</p>
            <p>{website}</p>
            <div>{info}</div>
          </>
        ) :
        (
          <>
            <p className="line"><span>제공기관</span> <span className="highlight">{phone}</span></p>
            <p>{address}</p>
          </>
        )
      }
      buttons={[
        {
          icon: "mail",
          onClick: () => {}
        }
      ]}
    />
  )
}
