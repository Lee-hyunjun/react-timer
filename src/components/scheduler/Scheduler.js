import React from 'react'
import clsx from 'clsx'

import './scheduler.scss'

const weekLabels = ['월', '화', '수', '목', '금', '토', '일']


export default function Scheduler({ data }) {
  const weekRef = React.useRef()
  const firstHourRef = React.useRef()
  const lastHourRef = React.useRef()
  const [state, setState] = React.useState({
    boxWidth: 0,
    yu: 0,
    windowWidth: 0
  })

  const scheduleByWeek = data.reduce((acc, item) => ({
    ...acc,
    [item.week]: [item.start, item.end]
  }), {})


  React.useEffect(() => {
    const boxWidth = lastHourRef.current.offsetLeft - firstHourRef.current.offsetLeft
    const yu = firstHourRef.current.offsetLeft - weekRef.current.offsetLeft + firstHourRef.current.clientWidth / 2
    const resizeListener = () => setState({ ...state, windowWidth: window.innerWidth })

    window.addEventListener('resize', resizeListener)
    setState({ boxWidth, yu, windowWidth: window.innerWidth })

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [state.windowWidth])


  return (
    <div className="scheduler">
      <div className="view">
        <div className="hours">
          {Array(25).fill('').map((_, hour) => (state.windowWidth > 800 || !(hour % 3)) && (
            <span key={hour} className={clsx('hour', !(hour % 6) && 'active')} {...(hour ? (hour == 24 ? { ref: lastHourRef } : {}) : { ref: firstHourRef })}>
              {String(hour).padStart(2, '0')}
            </span>
          ))}
        </div>
        
        <div className="weeks">
          {Array(7).fill('').map((_, week) => {
            const [start, end] = scheduleByWeek[week] || []
            let per = 0
            let width = 0

            if (start) {
              const startTime = start.split(':')[0] * 3600 + start.split(':')[1] * 60
              const endTime = end.split(':')[0] * 3600 + end.split(':')[1] * 60
              const total = 24 * 3600

              width = state.boxWidth * (endTime - startTime) / total
              per = state.boxWidth * (startTime / total)
            }

            return (
              <div key={week} className={clsx('week', start && 'active')} {...(week ? {} : { ref: weekRef })}>
                <span className="label">{weekLabels[week]}</span>
                <div className="timebox" style={{
                  left: state.yu
                }}>
                  {start && (
                    <div className="schedule" style={{
                      left: per+'px',
                      width: width
                    }}>{start} ~ {end}</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
