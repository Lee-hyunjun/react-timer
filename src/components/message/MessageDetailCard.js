import React from 'react'
import clsx from 'clsx'
import { Button as MuiButton } from '@material-ui/core'

import Dialog from '~ui/dialog/Dialog'
import ScheduleList from '~components/scheduler/ScheduleList'
import MessageDetailTableTab from '~components/message/MessageDetailTableTab'

const data = {
  category: 'jobOffer',
  writer: '(주)행복ICT 지원센터',
  title: '시각 장애인 활동지원사분 구합니다.',
  writeDate: '2020.03.15',
  schedule: [0,2,4],
  area: '서울 강남구',
  requestService: '중증 장애인 보조',
  gender: '없음',
  startAge: 30,
  endAge: 40,
  driving: '가능 (활동지원사 차량 지원 필요)',
  career: true
}

const schedule = [
  {
    title: '스케쥴',
    startDate: '2020.05.26',
    endDate: '2020.06.24',
    schedules: [
      {
        week: 0,
        start: '08:30',
        end: '18:00'
      },
      {
        week: 2,
        start: '08:30',
        end: '18:00'
      },
      {
        week: 4,
        start: '11:00',
        end: '20:30'
      },
      {
        week: 5,
        start: '10:30',
        end: '20:00'
      }
    ]
  }
]

const weekLabels = ['월', '화', '수', '목', '금', '토', '일']

export default function MessageDetailCard() {
  const [showSchedule, setShowSchedule] = React.useState(false)

  return (
    <div className="messageDetailCard">
      <div className="subtitle">
        <div className={clsx('badge', data.category)}>{data.category === 'jobOffer' ? '구인' : '구직'}</div>
        {data.writer}
      </div>
      
      <div className="title">
        <h2>{data.title}</h2>
        <span>등록일: {data.writeDate}</span>
      </div>

      <div className="infos">
        <div className="item">
          <div>스케쥴</div>
          <div>
            <div className="schedule">
              {data.schedule.map(week => <span>{weekLabels[week]}</span>)}
              <MuiButton variant="outlined" className="viewScheduleButton" onClick={() => setShowSchedule(true)}>자세히</MuiButton>
            </div>
          </div>
        </div>

        <div className="item">
          <div>지역</div>
          <div>{data.area}</div>
        </div>

        <div className="item">
          <div>요청 서비스</div>
          <div>{data.requestService}</div>
        </div>

        <div className="item">
          <div>성별제한</div>
          <div>{data.gender}</div>
        </div>

        <div className="item">
          <div>선호연령</div>
          <div>{data.startAge ? `${data.startAge}~${data.endAge}대` : '제한없음'}</div>
        </div>

        <div className="item">
          <div>운전여부</div>
          <div>{data.driving}</div>
        </div>

        <div className="item">
          <div>실습여부</div>
          <div>{data.career ? '했음' : '상관없음'}</div>
        </div>
      </div>

      <MessageDetailTableTab />

      <Dialog
        open={showSchedule}
        onClose={() => setShowSchedule(false)}
        className="messageDetailCard_scheduleDialog"
        maxWidth="md"
        fullWidth
      >
        <ScheduleList data={schedule} />
      </Dialog>
    </div>
  )
}
