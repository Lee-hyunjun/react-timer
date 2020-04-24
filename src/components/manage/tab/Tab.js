import React, { useState } from 'react'
import clsx from 'clsx'
import produce from 'immer'

import '~manage/tab/tab.scss'

export default function Tab({ data = [] }) {
  const [state, setState] = useState({
    active: 0
  })

  const handleChangeTab = (key) => {
    setState(produce(v => {
      v.active = key
    }))
  }

  return (
    <div className="tab">
      <div className="tabs">
        {data.map((item, i) => (
          <div key={i} onClick={() => handleChangeTab(i)} className={clsx("item", state.active === i ? 'bgGradient' : '')}>{item.title}</div>
        ))}
      </div>
      <div>
        {data[state.active].content}
      </div>
    </div>
  )
}
