import React from 'react'
import AddIcon from '@material-ui/icons/Add';

export default function NoticeItem({ type = 'default', title = '', content = '', place = '', sex = '', moreInfo = '', days = [], times = {}, date = '' }) {

  
  return (
    <>
      {type === 'default' && (
        <div className="noticeItem">
          <div className="title">{title}</div>
          <div className="content">{content}</div>
          <div className='info'>
            <span>{place}</span>
            <span>{sex}</span>
            <span>{moreInfo}</span>
          </div>
          <div className="daysInfo">
            <div className="days">
              {days.map((item, i) => (<div key={i}>{item}</div>))}
            </div>
            <div className="times">{times.start}~{times.end}</div>
          </div>
        </div>
      )}

      {type === 'simple' && (
        <div className="noticeItem simple">
          <div className="content">
            <div className="plus"><AddIcon/></div>
            <div className="title">{title}</div>
          </div>
          <div className="date">{date}</div>
        </div>
      )}
    </>  
  )
}
