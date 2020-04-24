import React, { useState, useEffect } from 'react'
import produce from 'immer'
import clsx from 'clsx'

import './board.scss'

export default function Board({ title = '', data = [] }) {
  const [state, setState] = useState({
    active: []
  })

  useEffect(() => {
    setState(produce(v => {
      for (let i = 0; i < data.length; i++) {
        v.active.push(i)
      }
    }))
  }, [])

  return (
    <div className="rap">

      <div className="board">
        <div className="info">공지사항은 제목을 클릭하시면 내용을 펼쳐보실 수 있습니다.</div>
        
        <div className="list">
          {data.map((item, i) => (
            <div key={i} className={clsx('item', item.boardType, state.active.indexOf(i) !== -1 ? 'active' : '')}>
              <div className="header" onClick={() => {
                setState(produce(v => {
                  const key = v.active.indexOf(i)
                  if (key === -1) {
                    v.active = [...v.active, i]
                  } else {
                    v.active.splice(key, 1)
                    v.active = v.active
                  }
                }))
              }}>
                <h2>{item.title}</h2>
                <p className="date">{item.date}</p>
              </div>
              <div className="contents">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}