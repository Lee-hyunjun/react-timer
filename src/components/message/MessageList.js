import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

import messageContext from '../../contexts/messageContext'

import MessageListItem from '~components/message/MessageListItem'

export default function MessageList({ type }) {
  const {
    state: {
      messages,
      providerMessages
    },
  } = React.useContext(messageContext)

  const datas = type === 'company' ? providerMessages : messages;

  return (
    <div className="messageList">
      {!datas.length ? (
        <div className="empty">
          항목이 없습니다
        </div>
      ) : (
        <Grid container spacing={4}>
          {datas.map((item, i) => (
            <Grid item md={4} key={i}>
              <MessageListItem type={type} {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}
