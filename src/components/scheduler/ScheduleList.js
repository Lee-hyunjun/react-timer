import React from 'react'
import { Icon, Button } from '@material-ui/core'

import './scheduleList.scss'

import Scheduler from './Scheduler'

// 테스트 데이터
// const _data = [
//   {
//     title: '스케쥴 01',
//     startDate: '2020.05.26',
//     endDate: '2020.06.24',
//     schedules: [
//       {
//         week: 0,
//         start: '08:30',
//         end: '18:00'
//       },
//       {
//         week: 2,
//         start: '08:30',
//         end: '18:00'
//       },
//       {
//         week: 4,
//         start: '11:00',
//         end: '20:30'
//       },
//       {
//         week: 5,
//         start: '10:30',
//         end: '20:00'
//       }
//     ]
//   }
// ]

export default function ScheduleList({ data }) {

  return (
    <div className="scheduleList">
      {data.map(item => (
        <div className="item">
          <div className="header">
            <h3 className="title">{item.title}</h3>

            <div className="date">
              {item.startDate} ~ {item.endDate}
            </div>

            <div className="actions">
              <Button variant="contained">
                <Icon>edit</Icon>
              </Button>

              <Button variant="contained">
                <Icon>delete</Icon>
              </Button>
            </div>
          </div>

          <Scheduler data={item.schedules} />
        </div>
      ))}
    </div>
  )
}
