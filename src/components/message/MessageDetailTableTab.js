import React from 'react'

import MessageDetailTable from '~components/message/MessageDetailTable'

export default function MessageDetailTableTab() {
  return (
    <div className="messageDetailTableTab">
      <div className="tabs">
        <div className="tab active">받은 메세지함 (18)</div>
        <div className="tab">보낸 메세지함 (5)</div>
        <div className="tab">게시글보기</div>
      </div>

      <div className="tabPanel">
        <MessageDetailTable />
      </div>
    </div>
  )
}
