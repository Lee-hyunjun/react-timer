import React from 'react'
import AddIcon from '@material-ui/icons/Add';

import NoticeList from '../notice/NoticeList'

import './boards.scss'

const data = [
  {
    title: '시각장애 경험있으신 활동지원사님 구합니다.',
    place: '서울 강남구',
    sex: '성별 제한 없음',
    moreInfo: '중증 장애인 보조',
    days: ['월', '수', '금'],
    times: {
      start: '09:00',
      end: '18:00',
    }
  },
  {
    title: '시각장애 경험있으신 활동지원사님 구합니다.',
    place: '서울 강남구',
    sex: '성별 제한 없음',
    moreInfo: '중증 장애인 보조',
    days: ['월', '수', '금'],
    times: {
      start: '09:00',
      end: '18:00',
    }
  },
  {
    title: '시각장애 경험있으신 활동지원사님 구합니다.',
    place: '서울 강남구',
    sex: '성별 제한 없음',
    moreInfo: '중증 장애인 보조',
    days: ['월', '수', '금'],
    times: {
      start: '09:00',
      end: '18:00',
    }
  },
]

const data2 = [
  {
    title: '일본 "한국서 입국제한, 양국 관계에...',
    date: '2020.05.16'
  },
  {
    title: '신천지 대구교회 "생활 치료센터 입소...',
    date: '2020.05.10'
  },
  {
    title: '광주서 2명 연속 격리 해주 후 확진...',
    date: '2020.05.08'
  },
  {
    title: '중국 "시진핑, 나라 구하고 세계 살려"...',
    date: '2020.04.24'
  },
  {
    title: '"마스크 물량 한정적, 신분확인도 부...',
    date: '2020.04.16'
  },
]

export default function IndexBoards() {
  return (
    <>
    <div className="boards">
      <div className="contents rap">
        <div className="board">
          <div className="boardHeader">
            <div className="title">구인</div>
            <div className="more"><AddIcon/></div>
          </div>
          <NoticeList data={data} />
        </div>

        <div className="board">
          <div className="boardHeader">
            <div className="title">구직</div>
            <div className="more"><AddIcon/></div>
          </div>
          <NoticeList data={data} />
        </div>

        <div className="board">
          <div className="boardHeader">
            <div className="title">구인</div>
            <div className="more"><AddIcon/></div>
          </div>
          <NoticeList data={data} />
        </div>
      </div>
    </div>
    
    <div className="boards simple">
      <div className="contents rap">
        <div className="board simple">
          <div className="boardHeader">
            <div className="title">공지사항</div>
            <div className="more"><AddIcon/></div>
          </div>
          <NoticeList data={data2} type='simple' />
        </div>

        <div className="board simple">
          <div className="boardHeader">
            <div className="title">뉴스</div>
            <div className="more"><AddIcon/></div>
          </div>
          <NoticeList data={data2} type='simple' />
        </div>

        <div className="board simple">
          <div className="boardHeader">
            <div className="title">자료실</div>
            <div className="more"><AddIcon/></div>
          </div>
          <NoticeList data={data2} type='simple' />
        </div>
      </div>
    </div>
    </>
  )
}
