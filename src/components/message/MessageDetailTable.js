import React, { useState } from 'react'
import { Button as MuiButton, Icon } from '@material-ui/core'
import Dialog from '~ui/dialog/Dialog'

import Table from '~components/table/Table'

const columns = [
  {
    label: '작성자',
    name: 'writer'
  },
  {
    label: '제목',
    name: 'title'
  },
  {
    label: '작성일',
    name: 'writeDate'
  },
  {
    label: '답변',
    name: 'action'
  }
]

export default function MessageDetailTable() {
  const [showMessageDialog, setShowMessageDialog] = React.useState(false)
  

  const datas = Array(18).fill({
    writer: (
      <div className="writer">
        <div className="badge">제공기관</div>
        (주)행복 ICT 지원센터
      </div>
    ),
    title: '정총리 "도쿄서 확진 많아져..日비자제한 연장검토 가능성 높다"',
    writeDate: (
      <div className="center date">2020.03.15</div>
    ),
    action: (
      <div className="center">
        <MuiButton className="answerButton" variant="contained" onClick={() => setShowMessageDialog(true)}>답변</MuiButton>
      </div>
    )
  })

  return (
    <div className="messageDetailTable">
      <Table
        columns={columns}
        datas={datas}
      />

      <Dialog open={showMessageDialog} onClose={() => setShowMessageDialog(false)} className="messageDetailDialog" maxWidth="sm" fullWidth>
        <div className="content">
          <div className="infos">
            <div>보낸사람: userid1004</div>
            <div>받은시각: 2020.02.12 (15:00)</div>
          </div>

          <div className="messageBox">

          </div>

          <div className="buttons">
            <div className="left">
              <MuiButton startIcon={<Icon>chevron_left</Icon>}>
                이전
              </MuiButton>

              <MuiButton endIcon={<Icon>chevron_right</Icon>}>
                다음
              </MuiButton>

              <MuiButton>목록</MuiButton>
            </div>

            <div className="right">
              <MuiButton className="deleteButton">삭제</MuiButton>
              <MuiButton className="answerButton" variant="contained">답변하기</MuiButton>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
