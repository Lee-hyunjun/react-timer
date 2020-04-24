import React from 'react'

import NoticeItem from './NoticeItem'

import './notice.scss'

export default function NoticeList({ data = [], type = 'default' }) {
  return (
    <div className="noticeList">
      {type === 'default' && data.map((item, i) => (
        <div key={i}>
          <NoticeItem 
            title={item.title}
            days={item.days}
            times={item.times}
            place={item.place}
            sex={item.sex}
            moreInfo={item.moreInfo}
          />
        </div>
      ))}

      {type === 'simple' && data.map((item, i) => (
        <div key={i}>
          <NoticeItem 
            title={item.title}
            date={item.date}
            type={type}
          />
        </div>
      ))}
    </div>
  )
}
