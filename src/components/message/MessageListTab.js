import React from 'react'
import clsx from 'clsx'

import messageContext from '../../contexts/messageContext'

import MessageList from '~components/message/MessageList'

export default function MessageListTab({ type = 'default' }) {
  const {
    state: {
      filter: {
        tab: activeTab
      },

      stat,
    },

    onChangeFilter
  } = React.useContext(messageContext)
  
  const tabs = [
    {
      id: 'all',
      name: '전체',
      count: stat.allCount,
    },
    {
      id: 'jobOfferCount',
      name: '구인',
      count: stat.jobOfferCount,
    },
    {
      id: 'jobSearchCount',
      name: '구직',
      count: stat.jobSearchCount,
    }
  ]

  return (
    <div className="messageListTab">

      {type !== 'default' ? '' : (
        <div className="tabs">
          {tabs.map(tab => (
            <div
              className={clsx('tab', activeTab === tab.id ? 'active' : '')}
              onClick={_ => onChangeFilter('tab', tab.id)}
            >{tab.name} ({tab.count})</div>
          ))}
        </div>
      )}

      <div className="tabPanel">
        <MessageList type={type} />
      </div>
    </div>
  )
}
